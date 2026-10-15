import Link from "next/link";
import type {SearchHit} from "@/lib/race-search";
import {eventDateLabel} from "@/lib/date-format";
import {getWaterwayForName} from "@/data/waterways";
import {getCompanionSweep} from "@/data/companion-sweeps";

export default function EventCard({hit,locale="en"}:{hit:SearchHit;locale?:"en"|"fr"}){
 const event=hit.event;
 const localized=event.localized?.[locale];
 const telemetryAvailable=Boolean(getWaterwayForName(event.waterway)?.usgsSiteId);
 const sweep=getCompanionSweep(event.preRaceSweepSlug);
 const cleanCourseVerified=Boolean(sweep?.cleanCourseVerified);
 return <article className="event-card">
  <div className="card-top"><span className={`status ${event.status.replace(" ","").toLowerCase()}`}>{event.status}</span><span className="date">{eventDateLabel(event.startDate,event.endDate)}</span></div>
  {(telemetryAvailable||cleanCourseVerified||sweep?.sweepType==="whitewater_wilderness")&&<div className="event-signals" aria-label="Verified event signals">{telemetryAvailable&&<span className="signal telemetry-signal">◉ Live telemetry available</span>}{cleanCourseVerified&&<span className="signal clean-signal">◆ Clean course verified</span>}{sweep?.sweepType==="whitewater_wilderness"&&<span className="signal wilderness-signal">◆ Whitewater expedition &amp; wilderness sweep</span>}</div>}
  <p className="eyebrow">{event.sports.slice(0,2).join(" · ")}</p>
  <h3>{localized?.title||event.name}</h3>
  <p className="location">⌖ {event.city}, {event.state}{event.waterway&&<span> — {event.waterway}</span>}</p>
  {hit.distanceMiles!=null&&<p className="distance">{hit.distanceMiles<1?"Within 1 mile":`${hit.distanceMiles} miles away`}</p>}
  <p className="summary">{localized?.summary||event.summary}</p>
  <div className="card-actions"><Link className="button dark small" href={`/events/${event.slug}`}>Event details <span>→</span></Link><a className="source" href={event.officialUrl} target="_blank" rel="noopener noreferrer">Official event ↗</a>{event.registrationUrl&&<a className="source" href={event.registrationUrl} target="_blank" rel="noopener noreferrer">Register ↗</a>}</div>
 </article>
}
