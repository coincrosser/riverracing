import type {AudienceIntent} from "@/data/event-enrichment";

export default function ExternalLink({linkId,source,audience,eventSlug,className,children}:{linkId:string;source:string;audience?:AudienceIntent;eventSlug?:string;className?:string;children:React.ReactNode}){
 const query=new URLSearchParams({source,...(audience?{audience}:{}),...(eventSlug?{event:eventSlug}:{})});
 return <a className={className} href={`/out/${encodeURIComponent(linkId)}?${query}`} target="_blank" rel="noopener noreferrer">{children} <span aria-hidden="true">↗</span><span className="sr-only"> (opens an external site in a new tab)</span></a>
}
