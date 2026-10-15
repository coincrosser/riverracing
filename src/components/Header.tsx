import Link from "next/link";
import SiteBrand from "@/components/SiteBrand";

const links = [
 {href:"/#events",label:"Races"},
 {href:"/waterways",label:"Waterways"},
 {href:"/organizers",label:"Organizers"},
 {href:"/stewardship/league",label:"Cleanup League 🏆"},
 {href:"/territories/claim",label:"Operator Franchise ⚡",priority:true},
];

export default function Header(){return <header className="nav global-header"><SiteBrand/><nav aria-label="Primary navigation">{links.map(link=><Link className={link.priority?"nav-priority":undefined} href={link.href} key={link.href}>{link.label}</Link>)}</nav></header>}
