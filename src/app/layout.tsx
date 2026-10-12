import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={metadataBase:new URL("https://riverracing.org"),title:{default:"River Racing — Every River. Every Race.",template:"%s | River Racing"},description:"Discover verified water sports races, regattas, and competitions across America's rivers, lakes, and oceans.",openGraph:{title:"River Racing",description:"Every River. Every Race.",url:"https://riverracing.org",siteName:"River Racing",type:"website"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
