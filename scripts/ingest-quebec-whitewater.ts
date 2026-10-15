import type {RaceEvent} from "../src/data/events.ts";
import {quebecWhitewaterEvents} from "../src/data/quebec-whitewater.ts";
import {pathToFileURL} from "node:url";

type Source={id:string;url:string;language:"en"|"fr"|"bilingual";kind:"organizer"|"federation"|"public-authority"};
type ReviewCandidate={name:string;sourceUrl:string;reason:string};

export const sources:Source[]=[
 {id:"classique-mauricie",url:"https://classiquedecanots.com/",language:"fr",kind:"organizer"},
 {id:"ville-la-tuque-classique",url:"https://www.ville.latuque.qc.ca/fr/evenements/2026/9/6/144967/classique-internationale-de-canots-de-la-mauricie",language:"fr",kind:"public-authority"},
 {id:"eau-vive-quebec-orizon",url:"https://eauvivequebec.ca/festival-o-rizon/",language:"fr",kind:"federation"},
 {id:"eau-vive-quebec-river-festival",url:"https://eauvivequebec.ca/evenement/festival-de-la-riviere/",language:"fr",kind:"federation"}
];

// These sources describe paddling gatherings but do not currently support a race record.
export const reviewQueue:ReviewCandidate[]=[
 {name:"Montréal Eau Vive",sourceUrl:"https://eauvivequebec.ca/evenement/montreal-eau-vive/",reason:"Festival page does not document a competitive race."},
 {name:"MISTASSIBI FEST",sourceUrl:"https://eauvivequebec.ca/evenement/mistassibi-fest/",reason:"Advanced whitewater festival; no race is documented."},
 {name:"Festi-Tewks",sourceUrl:"https://eauvivequebec.ca/evenement/festi-tewks/",reason:"River gathering; no race is documented."},
 {name:"Jacques-Cartier regional event",sourceUrl:"https://eauvivequebec.ca/pratiquer/trouver-un-evenement/",reason:"No official future race date or race detail page is available."}
];

const allowedStates=new Set(["Quebec","Québec"]);
export function validateQuebecEvent(event:RaceEvent){
 const errors:string[]=[];
 if(!event.officialUrl.startsWith("https://"))errors.push("official source URL is required");
 if(!allowedStates.has(event.state)||event.country!=="Canada")errors.push("record is outside Quebec");
 if(!event.waterway||!event.waterwayVerified)errors.push("verified waterway is required");
 if(!event.localized?.en||!event.localized?.fr)errors.push("English and French metadata are required");
 if(event.status==="Confirmed"&&!event.startDate)errors.push("confirmed events require a date");
 if(event.startDate&&Number.isNaN(Date.parse(`${event.startDate}T12:00:00Z`)))errors.push("invalid start date");
 if(event.endDate&&event.startDate&&event.endDate<event.startDate)errors.push("end date precedes start date");
 if(event.sports.some(s=>/swim/i.test(s)))errors.push("swimming is excluded");
 return errors;
}

export async function verifySources(fetcher:typeof fetch=fetch){
 const checks=await Promise.all(sources.map(async source=>{
  try{const response=await fetcher(source.url,{headers:{"user-agent":"RiverRacingSourceVerifier/1.0"},redirect:"follow"});return{...source,ok:response.ok,status:response.status,finalUrl:response.url}}catch{return{...source,ok:false,status:0,finalUrl:source.url}}
 }));
 return checks;
}

export async function run(){
 const invalid=quebecWhitewaterEvents.map(event=>({slug:event.slug,errors:validateQuebecEvent(event)})).filter(result=>result.errors.length);
 if(invalid.length)throw new Error(`Quebec validation failed: ${JSON.stringify(invalid)}`);
 const sourceChecks=await verifySources();
 const unavailable=sourceChecks.filter(source=>!source.ok);
 const report={accepted:quebecWhitewaterEvents.length,review:reviewQueue.length,invalid:invalid.length,sources:sourceChecks};
 console.log(JSON.stringify(report,null,2));
 if(unavailable.length)process.exitCode=2;
 return report;
}

if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href)await run();
