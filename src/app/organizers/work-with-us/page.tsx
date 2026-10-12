import Link from "next/link";import SiteBrand from "@/components/SiteBrand";
export const metadata={title:"Work With River Racing"};
export default function Page(){return <><header className="nav detail-nav"><SiteBrand/><Link href="/organizers">Organizer directory</Link></header><main className="legal"><p className="kicker navy">CLUBS & RACE ORGANIZERS</p><h1>Work with River Racing.</h1><p>Put your calendar, fleets, classes, registration links, venues, and results in front of racers.</p><p>Organizer inquiries are temporarily closed while our contact channel is configured.</p></main></>}
