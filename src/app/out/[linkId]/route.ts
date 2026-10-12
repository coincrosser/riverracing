import {getOutboundLink} from "@/data/event-enrichment";
import {NextResponse} from "next/server";

const allowedAudience=new Set(["participant","spectator"]);
async function recordOutboundClick(payload:Record<string,string>){
 const webhook=process.env.OUTBOUND_CLICK_WEBHOOK;
 if(!webhook){console.info("outbound_click",{...payload,durable:false});return}
 try{await fetch(webhook,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(payload),signal:AbortSignal.timeout(1500)})}catch(error){console.error("outbound_click_delivery_failed",error)}
}
export async function GET(request:Request,{params}:{params:Promise<{linkId:string}>}){const {linkId}=await params;const link=getOutboundLink(linkId);if(!link)return NextResponse.redirect(new URL("/",request.url));const url=new URL(request.url),audience=url.searchParams.get("audience")||"unknown";await recordOutboundClick({event:link.eventSlug,linkId,type:link.type,timestamp:new Date().toISOString(),source:(url.searchParams.get("source")||"unknown").slice(0,80),audience:allowedAudience.has(audience)?audience:"unknown"});return NextResponse.redirect(link.url,307)}
