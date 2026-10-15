import OperatorPortal from "@/components/OperatorPortal";

export const metadata={title:"River League Operator Dashboard",description:"Apply for a River League territory, register a Home Marina, or submit a cleanup weigh-in for verification."};

export default function OperatorDashboardPage(){return <main className="directory operator-page"><p className="kicker navy">RIVER LEAGUE OPERATIONS</p><h1>Operator dashboard.</h1><p className="directory-lead">Territory, marina, and weigh-in submissions are delivered for human review. This portal never publishes unverified records automatically.</p><OperatorPortal/></main>}
