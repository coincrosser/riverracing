import {events} from "@/data/events";
import Link from "next/link";
import {notFound} from "next/navigation";
import type {Metadata} from "next";
import SiteBrand from "@/components/SiteBrand";
import EventWeekendGuide from "@/components/EventWeekendGuide";
import {getEventEnrichment} from "@/data/event-enrichment";
import DisciplineResources from "@/components/DisciplineResources";
import WaterTelemetry from "@/components/WaterTelemetry";
import {getWaterwayForName,slugifyWaterway} from "@/data/waterways";
import {getUsgsTelemetry} from "@/lib/hydrology/usgs";
import {getCompanionSweep} from "@/data/companion-sweeps";
import CompanionSweepCard from "@/components/CompanionSweepCard";

export function generateStaticParams(){return events.map(e=>({slug:e.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const e=events.find(x=>x.slug===slug),enrichment=getEventEnrichment(slug);return e?{title:e.name,description:enrichment?.hero.shortDescription||e.summary,alternates:{canonical:`https://riverracing.org/events/${e.slug}`},openGraph:{title:e.name,description:enrichment?.hero.shortDescription||e.summary,url:`https://riverracing.org/events/${e.slug}`,type:"website"}}:{} }

export default async function EventPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const e=events.find(x=>x.slug===slug);if(!e)notFound();
 const enrichment=getEventEnrichment(slug);
 const companionSweep=getCompanionSweep(e.preRaceSweepSlug);
 const waterway=getWaterwayForName(e.waterway);const telemetry=waterway?.usgsSiteId?await getUsgsTelemetry(waterway.usgsSiteId):null;
 const format=(value:string)=>new Date(value+"T12:00:00").toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});
 const date=e.startDate?format(e.startDate):"Next date not announced";
 const venue=enrichment?.venue;
 const coordinates=venue?{latitude:venue.latitude,longitude:venue.longitude}:e.latitude!=null&&e.longitude!=null?{latitude:e.latitude,longitude:e.longitude}:undefined;
 const jsonLd={"@context":"https://schema.org","@type":"SportsEvent",name:e.name,...(e.startDate?{startDate:e.startDate,endDate:e.endDate||e.startDate}:{}),eventStatus:e.status==="Completed"?"https://schema.org/EventCompleted":"https://schema.org/EventScheduled",sport:e.sports.join(", "),location:{"@type":"Place",name:venue?.name||e.venue||[e.city,e.state].filter(Boolean).join(", "),address:{"@type":"PostalAddress",...(venue?.address?{streetAddress:venue.address.split(",")[0]}:{}),addressLocality:e.city,addressRegion:e.state,addressCountry:e.country||"United States"},...(coordinates?{geo:{"@type":"GeoCoordinates",...coordinates}}:{})},organizer:{"@type":"Organization",name:e.organizer,url:enrichment?.officialLinks[0]?.url||e.officialUrl},url:`https://riverracing.org/events/${e.slug}`};
 const schema=<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,"\\u003c")}}/>;
 if(enrichment)return <main><header className="nav detail-nav"><SiteBrand/><Link href="/">← Back to race index</Link></header>{schema}<DisciplineResources event={e}/>{telemetry&&<div className="telemetry-wrap"><WaterTelemetry telemetry={telemetry} siteName={waterway?.usgsSiteName}/></div>}{companionSweep&&<div className="telemetry-wrap"><CompanionSweepCard sweep={companionSweep}/></div>}<EventWeekendGuide event={e} enrichment={enrichment}/></main>
 return <main><header className="nav detail-nav"><SiteBrand/><Link href="/">← Back to race index</Link></header>{schema}<DisciplineResources event={e}/><article className="detail">
  <p className="kicker navy">{[...(e.eventTypes||[]),...e.sports].join(" · ")}</p><h1>{e.name}</h1>
  <div className="detail-status"><span className={`status ${e.status.replace(" ","").toLowerCase()}`}>{e.status}</span><span>Last verified {e.verifiedAt}</span></div><p className="detail-lead">{e.summary}</p>
  <div className="facts"><section><small>DATE</small><strong>{date}{e.endDate&&e.endDate!==e.startDate?` – ${format(e.endDate)}`:""}</strong></section><section><small>LOCATION</small><strong>{e.venue&&<>{e.venue}<br/></>}{e.city}, {e.state}</strong></section>{e.waterway&&<section><small>WATER</small><strong><Link href={`/waterways/${slugifyWaterway(e.waterway)}`}>{e.waterway} →</Link></strong></section>}<section><small>ORGANIZER</small><strong>{e.organizerSlug?<Link href={`/organizers/${e.organizerSlug}`}>{e.organizer}</Link>:e.organizer}</strong></section><section><small>FOR</small><strong>{e.audience.join(" & ")}</strong></section>{e.recurrence&&<section><small>FORMAT</small><strong>{e.recurrence}</strong></section>}{e.registrationStatus&&<section><small>REGISTRATION</small><strong>{e.registrationStatus}</strong></section>}{e.fee&&<section><small>VERIFIED FEE</small><strong>{e.fee}</strong></section>}</div>
  {telemetry&&<WaterTelemetry telemetry={telemetry} siteName={waterway?.usgsSiteName}/>}
  {companionSweep&&<CompanionSweepCard sweep={companionSweep}/>}<div className="source-box"><div><p className="kicker navy">OFFICIAL SOURCE</p><h2>Race information.</h2><p>Schedules, conditions, and registration can change. Confirm current details with the organizer.</p></div><a className="button dark" href={e.officialUrl} target="_blank" rel="noopener noreferrer">OFFICIAL EVENT PAGE ↗</a>{e.registrationUrl&&<a className="button outline" href={e.registrationUrl} target="_blank" rel="noopener noreferrer">REGISTRATION SOURCE ↗</a>}</div>
 </article></main>
}
