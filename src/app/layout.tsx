import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={metadataBase:new URL("https://riverracing.org"),title:{default:"River Racing — Every River. Every Race.",template:"%s | River Racing"},description:"Discover verified sailing, rowing, paddling, powerboat, and other competitive watercraft races.",openGraph:{title:"River Racing",description:"Every River. Every Race.",url:"https://riverracing.org",siteName:"River Racing",images:[{url:"/brand/river-racing-logo.png",alt:"River Racing compass logo"}],type:"website"},twitter:{card:"summary_large_image",images:["/brand/river-racing-logo.png"]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
