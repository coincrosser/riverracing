import type {RaceEvent} from "@/data/events";
import type {EventEnrichment} from "@/data/event-enrichment";

export type QualityIssue={slug:string;severity:"error"|"review";message:string};
export type OpportunityTier="A"|"B"|"C"|"D";
export type OpportunityScore={slug:string;score:number;tier:OpportunityTier;signals:string[]};

const key=(event:RaceEvent)=>[event.name.toLowerCase().trim(),event.startDate||"pending",event.city.toLowerCase().trim()].join("|");
export function auditEvents(events:RaceEvent[],today=new Date().toISOString().slice(0,10)){
 const issues:QualityIssue[]=[];const slugs=new Map<string,number>(),records=new Map<string,number>();
 for(const event of events){slugs.set(event.slug,(slugs.get(event.slug)||0)+1);records.set(key(event),(records.get(key(event))||0)+1);
  for(const [field,value] of [["event name",event.name],["city",event.city],["state",event.state],["waterway",event.waterway],["organizer",event.organizer],["official URL",event.officialUrl]] as const)if(!value)issues.push({slug:event.slug,severity:field==="waterway"?"review":"error",message:`Missing ${field}`});
  if(!event.sports.length)issues.push({slug:event.slug,severity:"error",message:"Missing discipline"});
  if(event.startDate&&event.endDate&&event.endDate<event.startDate)issues.push({slug:event.slug,severity:"error",message:"End date precedes start date"});
  if(event.status==="Completed"&&event.startDate&&event.startDate>=today)issues.push({slug:event.slug,severity:"review",message:"Future-dated event is marked completed"});
  if(event.status!=="Completed"&&event.startDate&&event.endDate&&event.endDate<today)issues.push({slug:event.slug,severity:"review",message:"Event has ended but is not marked completed"});
  if(event.status!=="Completed"&&event.startDate&&!event.endDate&&event.startDate<today)issues.push({slug:event.slug,severity:"review",message:"Past single-day event is not marked completed"});
  try{new URL(event.officialUrl)}catch{issues.push({slug:event.slug,severity:"error",message:"Malformed official URL"})}
  if(event.registrationUrl)try{new URL(event.registrationUrl)}catch{issues.push({slug:event.slug,severity:"error",message:"Malformed registration URL"})}
 }
 for(const [slug,count] of slugs)if(count>1)issues.push({slug,severity:"error",message:`Duplicate slug (${count} records)`});
 for(const [record,count] of records)if(count>1)issues.push({slug:record,severity:"review",message:`Possible duplicate event (${count} records)`});
 return issues;
}

export function scoreOpportunity(event:RaceEvent,enrichment?:EventEnrichment):OpportunityScore{
 let score=0;const signals:string[]=[];const add=(points:number,label:string)=>{score+=points;signals.push(label)};
 if(event.endDate&&event.startDate&&event.endDate>event.startDate)add(18,"multi-day");
 if(event.eventTypes?.some(t=>["Championship","Regatta","Distance race"].includes(t)))add(15,"destination format");
 if(event.audience.includes("Spectator"))add(10,"spectator potential");
 if(event.audience.includes("Participant"))add(8,"participant travel");
 if(event.sports.some(s=>/Sailing|Powerboat|Hydroplane|Steamboat/i.test(s)))add(14,"marine-commerce fit");
 if(event.sports.some(s=>/Canoe|Kayak|Paddleboard/i.test(s)))add(8,"paddling logistics");
 if(event.latitude!=null&&event.longitude!=null)add(5,"venue coordinates");
 if(event.registrationUrl)add(5,"registration source");
 if(event.status==="Confirmed")add(5,"confirmed");
 if(enrichment){add(12,"existing enrichment");add(Math.min(8,enrichment.resources.length*2),"verified resources")}
 const tier:OpportunityTier=score>=65?"A":score>=45?"B":score>=25?"C":"D";return{slug:event.slug,score,tier,signals};
}
