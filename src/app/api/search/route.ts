import {NextResponse} from "next/server";
import {events} from "@/data/events";
import {interpretSearch,searchRaces,type RadiusMiles} from "@/lib/race-search";

export const runtime="nodejs";
const cache=new Map<string,{at:number,value:ReturnType<typeof searchRaces>}>();
async function interpretAmbiguous(query:string,radius:RadiusMiles){
 const key=process.env.GEMINI_API_KEY;if(!key)return null;
 const model="gemini-3.1-flash-lite-preview";const prompt=`Interpret this competitive watercraft race search. Return JSON only. Never invent events. Query: ${JSON.stringify(query)}\nSchema: {"location"?:string,"locationKind"?:"city"|"state"|"zip"|"waterway"|"region","discipline"?:"Sailing"|"Regatta"|"Rowing"|"Powerboat racing"|"Kayak racing"|"Canoe racing"|"Dragon boat racing"|"Stand-up paddleboard racing"|"Steamboat racing"}. Resolve common U.S. place nicknames only when confident.`;
  try{const response=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,{method:"POST",headers:{"content-type":"application/json","x-goog-api-key":key},body:JSON.stringify({contents:[{parts:[{text:prompt}]}],generationConfig:{responseMimeType:"application/json",temperature:0,maxOutputTokens:180}})});if(!response.ok)return null;const json=await response.json();const text=json?.candidates?.[0]?.content?.parts?.[0]?.text;if(!text)return null;const parsed=JSON.parse(text);const intent=[...(parsed.discipline?[parsed.discipline==="Regatta"?"EVENT_TYPE":"DISCIPLINE"]:[]),...(parsed.locationKind?[parsed.locationKind==="waterway"?"WATERWAY":parsed.locationKind==="state"?"STATE":"LOCATION"]:[])];return{query,radius,...parsed,intent,usedAI:true}}catch{return null}
}
export async function POST(request:Request){
 try{
  const body=await request.json();const query=String(body.query||"").slice(0,180);const radius=([25,50,100,250].includes(Number(body.radius))?Number(body.radius):100) as RadiusMiles;
  const key=`${query.toLowerCase()}|${radius}`;const hit=cache.get(key);if(hit&&Date.now()-hit.at<86400000)return NextResponse.json(hit.value);
  let interpretation=interpretSearch(query,radius);let result=searchRaces(events,interpretation);
  const underconstrained=!interpretation.location&&!interpretation.discipline&&!interpretation.dateRange&&result.exact.length===0&&query.trim().split(/\s+/).length>=3;
  if(underconstrained){const ai=await interpretAmbiguous(query,radius);if(ai){interpretation={...interpretation,...ai};result=searchRaces(events,interpretation)}}
  cache.set(key,{at:Date.now(),value:result});return NextResponse.json(result);
 }catch{return NextResponse.json({error:"Invalid search request"},{status:400})}
}
