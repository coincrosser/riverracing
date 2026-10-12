import type {RaceEvent} from "@/data/events";

export type RadiusMiles=25|50|100|250;
export type SearchIntent="DISCIPLINE"|"EVENT_TYPE"|"WATERWAY"|"STATE"|"LOCATION"|"DATE"|"EVENT_OR_ORGANIZER";
export type SearchInterpretation={query:string;intent:SearchIntent[];location?:string;locationKind?:"city"|"state"|"zip"|"waterway"|"region";discipline?:string;dateRange?:{start:string;end:string};radius:RadiusMiles;freeText?:string;usedAI?:boolean};
export type SearchHit={event:RaceEvent;distanceMiles?:number;match:"exact"|"nearby"};
export type SearchResponse={interpretation:SearchInterpretation;exact:SearchHit[];nearby:SearchHit[];historical:SearchHit[];message?:string};

type Point={lat:number;lon:number};
type Place=Point&{name:string;kind:"city"|"state"|"zip"|"region";aliases?:string[]};

// Representative place coordinates follow U.S. Census Gazetteer conventions.
// They support proximity only; they never establish that a race is on a waterway.
const places:Place[]=[
 {name:"Louisville, Kentucky",kind:"city",lat:38.2527,lon:-85.7585,aliases:["louisville","40202"]},
 {name:"Evansville, Indiana",kind:"city",lat:37.9716,lon:-87.5711,aliases:["evansville","47708"]},
 {name:"Paducah, Kentucky",kind:"city",lat:37.0834,lon:-88.6000,aliases:["paducah","42001"]},
 {name:"St. Louis, Missouri",kind:"city",lat:38.6270,lon:-90.1994,aliases:["st louis","saint louis","63101"]},
 {name:"Owensboro, Kentucky",kind:"city",lat:37.7719,lon:-87.1112,aliases:["owensboro","42301"]},
 {name:"Henderson, Kentucky",kind:"city",lat:37.8362,lon:-87.5900,aliases:["henderson","42420"]},
 {name:"Cincinnati, Ohio",kind:"city",lat:39.1031,lon:-84.5120,aliases:["cincinnati","45202"]},
 {name:"Indianapolis, Indiana",kind:"city",lat:39.7684,lon:-86.1581,aliases:["indianapolis","46204"]},
 {name:"Minneapolis, Minnesota",kind:"city",lat:44.9778,lon:-93.2650,aliases:["minneapolis"]},
 {name:"St. Paul, Minnesota",kind:"city",lat:44.9537,lon:-93.0900,aliases:["st paul","saint paul"]},
 {name:"Dubuque, Iowa",kind:"city",lat:42.5006,lon:-90.6646,aliases:["dubuque"]},
 {name:"Quad Cities",kind:"region",lat:41.5236,lon:-90.5776,aliases:["quad cities"]},
 {name:"Memphis, Tennessee",kind:"city",lat:35.1495,lon:-90.0490,aliases:["memphis"]},
 {name:"Vicksburg, Mississippi",kind:"city",lat:32.3526,lon:-90.8779,aliases:["vicksburg"]},
 {name:"Baton Rouge, Louisiana",kind:"city",lat:30.4515,lon:-91.1871,aliases:["baton rouge"]},
 {name:"New Orleans, Louisiana",kind:"city",lat:29.9511,lon:-90.0715,aliases:["new orleans"]},
];

const states:Record<string,string>={alabama:"AL",alaska:"AK",arizona:"AZ",arkansas:"AR",california:"CA",colorado:"CO",connecticut:"CT",delaware:"DE",florida:"FL",georgia:"GA",idaho:"ID",illinois:"IL",indiana:"IN",iowa:"IA",kansas:"KS",kentucky:"KY",louisiana:"LA",maine:"ME",maryland:"MD",massachusetts:"MA",michigan:"MI",minnesota:"MN",mississippi:"MS",missouri:"MO",montana:"MT",nebraska:"NE",nevada:"NV","new hampshire":"NH","new jersey":"NJ","new mexico":"NM","new york":"NY","north carolina":"NC","north dakota":"ND",ohio:"OH",oklahoma:"OK",oregon:"OR",pennsylvania:"PA","rhode island":"RI","south carolina":"SC","south dakota":"SD",tennessee:"TN",texas:"TX",utah:"UT",vermont:"VT",virginia:"VA",washington:"WA","west virginia":"WV",wisconsin:"WI",wyoming:"WY"};
const waterways:Record<string,Point[]>={
 // Corridor reference points follow named river cities. Exact waterway results
 // still require the event's independently verified `waterway` field to match.
 "mississippi river":[{lat:44.9778,lon:-93.2650},{lat:44.9537,lon:-93.09},{lat:42.5006,lon:-90.6646},{lat:41.5236,lon:-90.5776},{lat:38.627,lon:-90.1994},{lat:35.1495,lon:-90.049},{lat:32.3526,lon:-90.8779},{lat:30.4515,lon:-91.1871},{lat:29.9511,lon:-90.0715}],
 "ohio river":[{lat:39.1031,lon:-84.512},{lat:38.7359,lon:-85.3799},{lat:38.2527,lon:-85.7585},{lat:37.9716,lon:-87.5711},{lat:37.0834,lon:-88.6}],
 "kentucky lake":[{lat:36.972,lon:-88.257}],"lake of the ozarks":[{lat:38.1986,lon:-92.6388}],"missouri river":[{lat:38.627,lon:-90.1994}],"long island sound":[{lat:40.9248,lon:-73.7518}],"oklahoma river":[{lat:35.4647,lon:-97.4991}]
 ,"hudson river":[{lat:42.6526,lon:-73.7562},{lat:41.7004,lon:-73.921},{lat:40.7128,lon:-74.006}],"lake michigan":[{lat:41.8781,lon:-87.6298},{lat:43.0389,lon:-87.9065}],"chesapeake bay":[{lat:38.9784,lon:-76.4922}]
};
const disciplines:[string,string[]][]=[
 ["Sailing",["sailing","sailboat","yacht"]],["Regatta",["regatta","regattas"]],["Rowing",["rowing","crew","sculling"]],
 ["Hydroplane racing",["hydroplane"]],["Powerboat racing",["powerboat","power boat","motorboat","motor boat","offshore","outboard","inboard"]],
 ["Paddling",["paddling","paddle racing"]],
 ["Kayak racing",["kayak","surfski"]],["Canoe racing",["canoe"]],["Dragon boat racing",["dragon boat"]],
 ["Stand-up paddleboard racing",["paddleboard","paddle board","sup"]],["Steamboat racing",["steamboat","riverboat"]]
];
const stateNames=Object.entries(states).sort((a,b)=>b[0].length-a[0].length);
const clean=(s:string)=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g," ").trim();
const sameState=(eventState:string,target:string)=>{const e=clean(eventState);const t=clean(target);return e===t||states[e]?.toLowerCase()===t||states[t]?.toLowerCase()===e||states[e]===states[t]};
const miles=(a:Point,b:Point)=>{const rad=Math.PI/180;const dLat=(b.lat-a.lat)*rad,dLon=(b.lon-a.lon)*rad;const x=Math.sin(dLat/2)**2+Math.cos(a.lat*rad)*Math.cos(b.lat*rad)*Math.sin(dLon/2)**2;return 3958.8*2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x))};
const cityKey=(city:string)=>clean(city).replace(/\bst\b/g,"saint");
function eventPoint(event:RaceEvent):Point|undefined{if(event.latitude!=null&&event.longitude!=null)return{lat:event.latitude,lon:event.longitude};const key=cityKey(event.city);const place=places.find(p=>(p.aliases||[]).some(a=>cityKey(a)===key));return place?{lat:place.lat,lon:place.lon}:undefined}
function weekend(now:Date){const day=now.getUTCDay();const untilSaturday=(6-day+7)%7;const sat=new Date(Date.UTC(now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate()+untilSaturday));const sun=new Date(sat);sun.setUTCDate(sat.getUTCDate()+1);return{start:sat.toISOString().slice(0,10),end:sun.toISOString().slice(0,10)}}
function thisMonth(now:Date){const start=new Date(Date.UTC(now.getUTCFullYear(),now.getUTCMonth(),1)),end=new Date(Date.UTC(now.getUTCFullYear(),now.getUTCMonth()+1,0));return{start:start.toISOString().slice(0,10),end:end.toISOString().slice(0,10)}}

export function interpretSearch(query:string,radius:RadiusMiles=100,now=new Date()):SearchInterpretation{
 const q=clean(query);const result:SearchInterpretation={query,radius,intent:[]};let matchedPlace:Place|undefined;
 const waterway=Object.keys(waterways).sort((a,b)=>b.length-a.length).find(w=>q.includes(clean(w)));
 if(waterway){result.location=waterway.replace(/\b\w/g,c=>c.toUpperCase());result.locationKind="waterway"}
 if(!waterway){matchedPlace=places.find(p=>(p.aliases||[]).some(a=>q.includes(clean(a))));if(matchedPlace){result.location=matchedPlace.name;result.locationKind=/^\d{5}$/.test(q)?"zip":matchedPlace.kind}}
 if(!result.location){const state=stateNames.find(([name,abbr])=>q.includes(name)||new RegExp(`(^| )${abbr.toLowerCase()}( |$)`).test(q));if(state){result.location=state[0].replace(/\b\w/g,c=>c.toUpperCase());result.locationKind="state"}}
 const discipline=disciplines.find(([,aliases])=>aliases.some(a=>q.includes(clean(a))));if(discipline)result.discipline=discipline[0];
 if(q.includes("this weekend"))result.dateRange=weekend(now);
 if(q.includes("this month"))result.dateRange=thisMonth(now);
 if(q.includes("next 7 days")||q.includes("next seven days")){const end=new Date(now);end.setUTCDate(end.getUTCDate()+7);result.dateRange={start:now.toISOString().slice(0,10),end:end.toISOString().slice(0,10)}}
 if(q.includes("next 30 days")||q.includes("next thirty days")){const end=new Date(now);end.setUTCDate(end.getUTCDate()+30);result.dateRange={start:now.toISOString().slice(0,10),end:end.toISOString().slice(0,10)}}
 const consumed=[...(result.location?[clean(result.location),...(waterway?[waterway]:[]),...((matchedPlace?.aliases)||[])]:[]),...(discipline?discipline[1]:[]),"near","on","in","around","race","races","racing","boat","boats","this","weekend","month","next","7","seven","30","thirty","days"];
 let free=` ${q} `;for(const word of consumed.sort((a,b)=>b.length-a.length))free=free.replaceAll(` ${clean(word)} `," ");free=free.trim();if(free)result.freeText=free;
 if(result.discipline)result.intent.push(result.discipline==="Regatta"?"EVENT_TYPE":"DISCIPLINE");
 if(result.locationKind==="waterway")result.intent.push("WATERWAY");else if(result.locationKind==="state")result.intent.push("STATE");else if(result.location)result.intent.push("LOCATION");
 if(result.dateRange)result.intent.push("DATE");if(result.freeText)result.intent.push("EVENT_OR_ORGANIZER");
 return result;
}

function sportMatches(event:RaceEvent,wanted?:string){if(!wanted)return true;if(wanted==="Regatta")return event.eventTypes?.includes("Regatta")===true;if(wanted==="Powerboat racing")return event.sports.some(s=>/powerboat|hydroplane|steamboat/i.test(s));if(wanted==="Paddling")return event.sports.some(s=>/kayak|canoe|paddleboard/i.test(s));return event.sports.includes(wanted)}
function chronological(a:SearchHit,b:SearchHit){const aPast=a.event.status==="Completed",bPast=b.event.status==="Completed";if(aPast!==bPast)return aPast?1:-1;if(!a.event.startDate)return 1;if(!b.event.startDate)return-1;return a.event.startDate.localeCompare(b.event.startDate)}
function locationPoint(i:SearchInterpretation){if(!i.location)return;const key=clean(i.location);if(i.locationKind==="waterway")return waterways[key];const place=places.find(p=>clean(p.name)===key||(p.aliases||[]).some(a=>key.includes(clean(a))));return place?[{lat:place.lat,lon:place.lon}]:undefined}
function eventDistance(event:RaceEvent,points:Point[]){const point=eventPoint(event);if(!point)return;return Math.min(...points.map(p=>miles(point,p)))}

export function searchRaces(all:RaceEvent[],interpretation:SearchInterpretation):SearchResponse{
 const exact:SearchHit[]=[],nearby:SearchHit[]=[],historical:SearchHit[]=[];const points=locationPoint(interpretation);
 for(const event of all){
  if(!sportMatches(event,interpretation.discipline))continue;
  if(interpretation.dateRange){const end=event.endDate||event.startDate;if(!event.startDate||!end||event.startDate>interpretation.dateRange.end||end<interpretation.dateRange.start)continue}
  if(interpretation.freeText){const hay=clean([event.name,event.organizer,event.city,event.state,event.county,event.region,event.waterway,event.venue,...event.sports,...(event.eventTypes||[]),...(event.boatClasses||[])].filter(Boolean).join(" "));if(!hay.includes(clean(interpretation.freeText)))continue}
  let isExact=true;
  if(interpretation.locationKind==="waterway")isExact=clean(event.waterway)===clean(interpretation.location||"");
  else if(interpretation.locationKind==="state")isExact=sameState(event.state,interpretation.location||"");
  else if(interpretation.location){const target=cityKey(interpretation.location.split(",")[0]);isExact=cityKey(event.city)===target||clean(event.county||"")===target||clean(event.region||"")===target}
  if(isExact){const hit:SearchHit={event,match:"exact"};if(event.status==="Completed")historical.push(hit);else exact.push(hit);continue}
  if(points&&interpretation.locationKind!=="state"){const distance=eventDistance(event,points);if(distance!=null&&distance<=interpretation.radius){const hit:SearchHit={event,match:"nearby",distanceMiles:Math.round(distance)};if(event.status==="Completed")historical.push(hit);else nearby.push(hit)}}
 }
 exact.sort(chronological);nearby.sort((a,b)=>(a.distanceMiles??9999)-(b.distanceMiles??9999)||chronological(a,b));historical.sort((a,b)=>(b.event.startDate||"").localeCompare(a.event.startDate||""));
 const message=interpretation.locationKind==="waterway"&&!exact.length?`No verified races are currently listed on the ${interpretation.location}. Nearby races are shown separately.`:undefined;
 return{interpretation,exact,nearby,historical,message};
}
