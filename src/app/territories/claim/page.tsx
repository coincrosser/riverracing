import Link from "next/link";
import SiteBrand from "@/components/SiteBrand";
import TerritoryClaimForm from "@/components/TerritoryClaimForm";

export default function TerritoryClaimPage(){return <main><header className="nav detail-nav"><SiteBrand/><Link href="/territories">← Territories</Link></header><article className="directory"><p className="kicker navy">OWN YOUR WATERWAY</p><h1>Claim your territory.</h1><p className="directory-lead">Apply to become a River League Operator or Home Marina Partner. Applications are reviewed before any territory or business is listed.</p><TerritoryClaimForm waterwaySlug="territory-application"/></article></main>}
