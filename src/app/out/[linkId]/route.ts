import {getOutboundLink} from "@/data/event-enrichment";
import {getDisciplineResource} from "@/data/discipline-resources";
import {NextResponse} from "next/server";

const allowedAudience=new Set(["participant","spectator"]);
async function recordOutboundClick(payload:Record<string,string>){
 const webhook=process.env.OUTBOUND_CLICK_WEBHOOK;
 if(!webhook){console.info("outbound_click",{...payload,durable:false});return}
 try{await fetch(webhook,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(payload),signal:AbortSignal.timeout(1500)})}catch(error){console.error("outbound_click_delivery_failed",error)}
}
export async function GET(request:Request,{params}:{params:Promise<{linkId:string}>}){const {linkId}=await params,brand=getDisciplineResource(linkId),link=getOutboundLink(linkId)||(brand?{eventSlug:"",type:"discipline_resource",url:brand.destinationUrl}:undefined);if(!link)return NextResponse.redirect(new URL("/",request.url));const url=new URL(request.url),audience=url.searchParams.get("audience")||"unknown",event=(link.eventSlug||url.searchParams.get("event")||"unknown").slice(0,160),placement=(url.searchParams.get("source")||"unknown").slice(0,80);let referrerPath="unknown";try{const referrer=request.headers.get("referer");if(referrer)referrerPath=new URL(referrer).pathname.slice(0,200)}catch{}await recordOutboundClick({event,linkId,type:link.type,timestamp:new Date().toISOString(),source:placement,placement,referrerPath,audience:allowedAudience.has(audience)?audience:"unknown"});return NextResponse.redirect(link.url,307)}
