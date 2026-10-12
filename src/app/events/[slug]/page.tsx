import {events} from "@/data/events";
import Link from "next/link";
import {notFound} from "next/navigation";
import type {Metadata} from "next";
import SiteBrand from "@/components/SiteBrand";

export function generateStaticParams(){return events.map(e=>({slug:e.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const e=events.find(x=>x.slug===slug);return e?{title:e.name,description:e.summary}:{} }

export default async function EventPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const e=events.find(x=>x.slug===slug);if(!e)notFound();
 const format=(value:string)=>new Date(value+"T12:00:00").toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});
 const date=e.startDate?format(e.startDate):"Next date not announced";
 return <main><header className="nav detail-nav"><SiteBrand/><Link href="/">← Back to race index</Link></header><article className="detail">
  <p className="kicker navy">{[...(e.eventTypes||[]),...e.sports].join(" · ")}</p><h1>{e.name}</h1>
  <div className="detail-status"><span className={`status ${e.status.replace(" ","").toLowerCase()}`}>{e.status}</span><span>Last verified {e.verifiedAt}</span></div><p className="detail-lead">{e.summary}</p>
  <div className="facts"><section><small>DATE</small><strong>{date}{e.endDate?` – ${format(e.endDate)}`:""}</strong></section><section><small>LOCATION</small><strong>{e.venue}<br/>{e.city}, {e.state}</strong></section><section><small>WATERWAY</small><strong>{e.waterway}</strong></section><section><small>ORGANIZER</small><strong>{e.organizerSlug?<Link href={`/organizers/${e.organizerSlug}`}>{e.organizer}</Link>:e.organizer}</strong></section><section><small>FOR</small><strong>{e.audience.join(" & ")}</strong></section>{e.recurrence&&<section><small>FORMAT</small><strong>{e.recurrence}</strong></section>}{e.registrationStatus&&<section><small>REGISTRATION</small><strong>{e.registrationStatus}</strong></section>}{e.fee&&<section><small>VERIFIED FEE</small><strong>{e.fee}</strong></section>}</div>
  <div className="source-box"><div><p className="kicker navy">OFFICIAL SOURCE</p><h2>Race information.</h2><p>Schedules, conditions, and registration can change. Confirm current details with the organizer.</p></div><a className="button dark" href={e.officialUrl} target="_blank" rel="noreferrer">OFFICIAL EVENT PAGE ↗</a>{e.registrationUrl&&<a className="button outline" href={e.registrationUrl} target="_blank" rel="noreferrer">REGISTRATION SOURCE ↗</a>}</div>
 </article></main>
}
