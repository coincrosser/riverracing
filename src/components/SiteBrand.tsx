import Link from "next/link";
import Image from "next/image";
export default function SiteBrand(){return <Link href="/" className="brand logo-brand"><Image src="/brand/river-racing-logo.png" alt="River Racing compass logo" width={220} height={98} priority/><span>RIVER RACING<small>EVERY RIVER. EVERY RACE.</small></span></Link>}
