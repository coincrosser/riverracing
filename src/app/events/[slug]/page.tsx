import {events} from "@/data/events";
import Link from "next/link";
import {notFound} from "next/navigation";
import type {Metadata} from "next";
import SiteBrand from "@/components/SiteBrand";
import EventWeekendGuide from "@/components/EventWeekendGuide";
import {getEventEnrichment} from "@/data/event-enrichment";
import DisciplineResources from "@/components/DisciplineResources";
import WaterTelemetry from "@/components/WaterTelemetry";
import {getWaterwayForName} from "@/data/waterways";
import {getUsgsTelemetry} from "@/lib/hydrology/usgs";
import {getCompanionSweep} from "@/data/companion-sweeps";
import CompanionSweepCard from "@/components/CompanionSweepCard";

export function generateStaticParams(){return events.map(e=>({slug:e.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const e=events.find(x=>x.slug===slug),enrichment=getEventEnrichment(slug);return e?{title:e.name,description:enrichment?.hero.shortDescription||e.summary,alternates:{canonical:`https://riverracing.org/events/${e.slug}`},openGraph:{title:e.name,description:enrichment?.hero.shortDescription||e.summary,url:`https://riverracing.org/events/${e.slug}`,type:"website"}}:{} }

export default async function EventPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const e=events.find(x=>x.slug===slug);if(!e)notFound();
 const asOfDate=new Date().toISOString();
 const enrichment=getEventEnrichment(slug);
 const companionSweep=getCompanionSweep(e.preRaceSweepSlug);
 const waterway=getWaterwayForName(e.waterway);const telemetry=waterway?.usgsSiteId?await getUsgsTelemetry(waterway.usgsSiteId):null;
 const venue=enrichment?.venue;
 const coordinates=venue?.latitude!=null&&venue.longitude!=null?{latitude:venue.latitude,longitude:venue.longitude}:e.latitude!=null&&e.longitude!=null?{latitude:e.latitude,longitude:e.longitude}:undefined;
 const jsonLd={"@context":"https://schema.org","@type":"SportsEvent",name:e.name,...(e.startDate?{startDate:e.startDate,endDate:e.endDate||e.startDate}:{}),eventStatus:e.status==="Completed"?"https://schema.org/EventCompleted":"https://schema.org/EventScheduled",sport:e.sports.join(", "),location:{"@type":"Place",name:venue?.name||e.venue||[e.city,e.state].filter(Boolean).join(", "),address:{"@type":"PostalAddress",...(venue?.address?{streetAddress:venue.address.split(",")[0]}:{}),addressLocality:e.city,addressRegion:e.state,addressCountry:e.country||"United States"},...(coordinates?{geo:{"@type":"GeoCoordinates",...coordinates}}:{})},organizer:{"@type":"Organization",name:e.organizer,url:enrichment?.officialLinks[0]?.url||e.officialUrl},url:`https://riverracing.org/events/${e.slug}`};
 const schema=<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,"\\u003c")}}/>;
 return <main><header className="nav detail-nav"><SiteBrand/><Link href="/">← Back to race index</Link></header>{schema}<DisciplineResources event={e}/>{telemetry&&<div className="telemetry-wrap"><WaterTelemetry telemetry={telemetry} siteName={waterway?.usgsSiteName}/></div>}{companionSweep&&<div className="telemetry-wrap"><CompanionSweepCard sweep={companionSweep} asOfDate={asOfDate}/></div>}<EventWeekendGuide event={e} enrichment={enrichment!} asOfDate={asOfDate}/></main>
}
