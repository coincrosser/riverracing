import Link from "next/link";
import TerritoryClaimForm from "@/components/TerritoryClaimForm";

export default function TerritoryClaimPage(){return <main><article className="directory"><p className="kicker navy">OWN YOUR WATERWAY</p><h1>Claim your territory.</h1><p className="directory-lead">Apply to become a River League Operator. Applications are reviewed before any territory or business is listed.</p><TerritoryClaimForm/><p className="operator-next">Already operating locally? <Link href="/operator/dashboard">Register a Home Marina or submit a verified weigh-in →</Link></p></article></main>}
