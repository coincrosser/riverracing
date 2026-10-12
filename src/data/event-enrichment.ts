export type AudienceIntent="participant"|"spectator";
export type OfficialLinkType="registration"|"notice_of_race"|"sailing_instructions"|"schedule"|"results"|"rules"|"official_event";
export type ResourceType="hotel"|"campground"|"rv"|"marina"|"launch"|"trailer_storage"|"dry_storage"|"mooring"|"hoist"|"fuel"|"marine_service"|"restaurant"|"transportation"|"parking"|"spectator_location"|"marine_supply";
export type Relationship="free"|"affiliate"|"direct_referral"|"cpc"|"cpa"|"commission"|"sponsor";

export type OfficialLink={id:string;type:OfficialLinkType;label:string;url:string;sourceUrl:string;verifiedAt:string};
export type EventResource={id:string;eventSlug:string;name:string;type:ResourceType;description:string;address?:string;latitude?:number;longitude?:number;websiteUrl:string;bookingUrl?:string;phone?:string;amenities?:string[];sourceUrl:string;verifiedAt:string;relationship:Relationship;disclosureRequired:boolean;usefulFor:AudienceIntent[];applicableDisciplines?:string[]};
export type EventEnrichment={eventSlug:string;venue:{name:string;address:string;waterway:string;latitude:number;longitude:number;sourceUrl:string};hero:{shortDescription:string;countdownEnabled:boolean};officialLinks:OfficialLink[];resources:EventResource[];spectatorNotes:string[];participantNotes:string[];transportationNotes:string[];lastReviewedAt:string};

const eventSlug="helly-hansen-sailing-world-regatta-series-st-petersburg-2027-st-petersburg";
const verifiedAt="2026-10-12";

const louisvilleVenue={name:"Louisville Sailing Club",address:"7300 Beechland Beach Road, Prospect, KY 40059",waterway:"Ohio River",latitude:38.3957,longitude:-85.6261,sourceUrl:"https://louisvillesailingclub.com/events"};
const localResource=(eventSlug:string,kind:"unbridled"|"juniper"):EventResource=>kind==="unbridled"?{
 id:`${eventSlug}-unbridled-sailing`,eventSlug,name:"Unbridled Sailing",type:"marine_service",description:"Louisville sailing expertise for sails, standing and running rigging, sailing instruction, rig tuning and racing support.",address:"Louisville, Kentucky",latitude:38.2527,longitude:-85.7585,websiteUrl:"https://unbridledsailing.com/",phone:"502-718-2969",amenities:["Sails","Rigging","Sailing instruction","Racing support"],sourceUrl:"https://unbridledsailing.com/history.html",verifiedAt,relationship:"free",disclosureRequired:false,usefulFor:["participant"],applicableDisciplines:["Sailing"]
}:{
 id:`${eventSlug}-juniper-beach-marina`,eventSlug,name:"Juniper Beach Marina",type:"marina",description:"Prospect marina with a protected launch ramp, dry storage, creek slips and a year-round card-operated fuel dock. Contact the marina directly about current access and availability.",address:"5301 Juniper Beach Road, Prospect, KY 40059",latitude:38.3167,longitude:-85.6503,websiteUrl:"https://www.juniperbeachmarina.com/",phone:"502-586-2628",amenities:["Protected launch ramp","Dry storage","Creek slips","Fuel dock"],sourceUrl:"https://www.juniperbeachmarina.com/",verifiedAt,relationship:"free",disclosureRequired:false,usefulFor:["participant"],applicableDisciplines:["Sailing"]
};
const lscEnrichment=(eventSlug:string,description:string,officialLabel="Official event page"):EventEnrichment=>({
 eventSlug,venue:louisvilleVenue,hero:{shortDescription:description,countdownEnabled:true},
 officialLinks:[{id:`${eventSlug}-official`,type:"official_event",label:officialLabel,url:"https://louisvillesailingclub.com/events",sourceUrl:"https://louisvillesailingclub.com/events",verifiedAt}],
 resources:[localResource(eventSlug,"unbridled"),localResource(eventSlug,"juniper")],
 participantNotes:["Louisville Sailing Club controls race entry, launching, boat storage and site access. Confirm arrangements with the club before arrival.","Juniper Beach Marina is an independent free listing, not an official event marina or sponsor; availability is not implied."],
 spectatorNotes:[],transportationNotes:["The organizer has not published general public spectator access or parking instructions. Do not enter club property without organizer permission."],lastReviewedAt:verifiedAt
});

export const eventEnrichments:EventEnrichment[]=[{
 eventSlug,
 venue:{name:"St. Petersburg Sailing Center",address:"250 2nd Avenue SE, St. Petersburg, FL 33701",waterway:"Tampa Bay",latitude:27.7694828,longitude:-82.6314411,sourceUrl:"https://www.spyc.org/Waterfront"},
 hero:{shortDescription:"Three days of one-design, handicap and offshore sailing hosted on the downtown St. Petersburg waterfront.",countdownEnabled:true},
 officialLinks:[
  {id:"swrs-st-pete-official",type:"official_event",label:"Official event page",url:"https://www.sailingworld.com/helly-hansen-regatta-series-st-petersburg-2027/",sourceUrl:"https://www.sailingworld.com/helly-hansen-regatta-series-st-petersburg-2027/",verifiedAt}
 ],
 participantNotes:["The organizer has not yet published 2027 launching, dockage or trailer instructions. Confirm assignments with the official event page before arrival.","St. Petersburg Yacht Club operates the downtown marina and Sailing Center; event-specific access is controlled by the organizer."],
 spectatorNotes:[],
 transportationNotes:["Downtown parking and transit conditions can change during waterfront events. Confirm current restrictions before leaving for the venue."],
 resources:[
  {id:"swrs-ac-hotel",eventSlug,name:"AC Hotel St. Petersburg Downtown",type:"hotel",description:"The hotel linked by the 2027 organizer page, in downtown St. Petersburg.",address:"110 2nd Street North, St. Petersburg, FL 33701",latitude:27.772288,longitude:-82.6356211,websiteUrl:"https://www.marriott.com/en-us/hotels/tpapa-ac-hotel-st-petersburg-downtown/overview/",bookingUrl:"https://www.marriott.com/en-us/hotels/tpapa-ac-hotel-st-petersburg-downtown/overview/",phone:"727-864-0001",sourceUrl:"https://www.sailingworld.com/helly-hansen-regatta-series-st-petersburg-2027/",verifiedAt,relationship:"free",disclosureRequired:false,usefulFor:["participant","spectator"]},
  {id:"swrs-spyc-waterfront",eventSlug,name:"St. Petersburg Yacht Club Waterfront",type:"marina",description:"Host-club waterfront information for the Downtown Marina and Sailing Center. Contact the club for event-specific access.",address:"50 Bayshore Drive, St. Petersburg, FL 33701",websiteUrl:"https://www.spyc.org/Waterfront",phone:"727-822-3227",amenities:["Downtown marina","Sailing Center","Marina office"],sourceUrl:"https://www.spyc.org/Waterfront",verifiedAt,relationship:"free",disclosureRequired:false,usefulFor:["participant"],applicableDisciplines:["Sailing"]},
  {id:"swrs-harborage",eventSlug,name:"Harborage Marina",type:"marina",description:"Full-service marina south of downtown with transient dockage, wet slips, dry storage and fuel. Availability is not implied; contact the marina directly.",address:"1110 3rd Street S, St. Petersburg, FL 33701",latitude:27.7591987,longitude:-82.6362556,websiteUrl:"https://waterviewmarinas.com/harborage-marina-florida",phone:"727-821-6347",amenities:["Transient dockage","Fuel dock","Wet slips","Dry storage","Trailer storage","Pumpout"],sourceUrl:"https://waterviewmarinas.com/harborage-marina-florida",verifiedAt,relationship:"free",disclosureRequired:false,usefulFor:["participant"],applicableDisciplines:["Sailing"]},
  {id:"swrs-embree",eventSlug,name:"Embree Marine Service",type:"marine_service",description:"Local boatyard listing sailboat rigging, diesel, electrical, fiberglass and haul-out services.",address:"201 16th Avenue S, St. Petersburg, FL 33701",latitude:27.754368,longitude:-82.635509,websiteUrl:"https://www.embreemarine.com/services",phone:"727-896-0671",amenities:["Sailboat rigging","Diesel mechanics","Electrical repair","Fiberglass repair","Haul-out"],sourceUrl:"https://www.embreemarine.com/services",verifiedAt,relationship:"free",disclosureRequired:false,usefulFor:["participant"],applicableDisciplines:["Sailing"]},
  {id:"swrs-west-marine",eventSlug,name:"West Marine St. Petersburg",type:"marine_supply",description:"Marine-supply store carrying sailing hardware, line, safety equipment and boat-maintenance supplies.",address:"2010 Tyrone Boulevard N, St. Petersburg, FL 33710",latitude:27.7898239,longitude:-82.7250741,websiteUrl:"https://www.westmarine.com/stores/st-petersburg-fl-1289/",phone:"727-342-8001",amenities:["Rigging hardware","Line","Safety equipment","Marine electronics"],sourceUrl:"https://www.westmarine.com/stores/st-petersburg-fl-1289/",verifiedAt,relationship:"free",disclosureRequired:false,usefulFor:["participant"],applicableDisciplines:["Sailing"]},
  {id:"swrs-sunrunner",eventSlug,name:"PSTA SunRunner",type:"transportation",description:"Frequent public transit connecting downtown St. Petersburg, Central Avenue and St. Pete Beach.",websiteUrl:"https://psta.net/services/sunrunner/",amenities:["Accessible stations","Downtown service","Beach service"],sourceUrl:"https://psta.net/services/sunrunner/",verifiedAt,relationship:"free",disclosureRequired:false,usefulFor:["participant","spectator"]}
 ],lastReviewedAt:verifiedAt
},
 lscEnrichment("pumpkin-regatta-2026","A two-day Sunfish regatta on the Ohio River, with official registration and race documents controlled by Louisville Sailing Club.","Registration & official page"),
 lscEnrichment("lsc-fall-long-distance-race-2026","A season-ending Ohio River distance race and poker run, followed by awards and dinner at Louisville Sailing Club."),
 lscEnrichment("lsc-sunfish-fleet-racing-2026","The final scheduled sessions of Louisville Sailing Club’s 2026 one-design Sunfish racing series on the Ohio River."),
 lscEnrichment("lsc-handicap-fleet-racing-2026","The final scheduled session of Louisville Sailing Club’s 2026 handicap fleet racing series on the Ohio River."),
 {
  eventSlug:"great-steamboat-race-2027",venue:{name:"Louisville Wharf at Waterfront Park",address:"401 West River Road, Louisville, KY 40202",waterway:"Ohio River",latitude:38.2598,longitude:-85.7426,sourceUrl:"https://discover.kdf.org/great-steamboat-race/"},
  hero:{shortDescription:"Louisville’s historic two-hour Ohio River steamboat competition returns during Kentucky Derby Festival week.",countdownEnabled:true},
  officialLinks:[{id:"great-steamboat-race-2027-official",type:"official_event",label:"Official event page",url:"https://discover.kdf.org/great-steamboat-race/",sourceUrl:"https://discover.kdf.org/great-steamboat-race/",verifiedAt}],
  resources:[],participantNotes:[],spectatorNotes:["The official event page lists boarding from 4:30–5:30 p.m., departure at 5:45 p.m. and the race start at 6 p.m. Tickets are not yet on sale."],transportationNotes:["Use the official event page for ticketing and race-day access updates. RiverRacing does not infer viewing or parking locations."],lastReviewedAt:verifiedAt
 }
];

export function getEventEnrichment(slug:string){return eventEnrichments.find(item=>item.eventSlug===slug)}
export function getOutboundLink(id:string){for(const enrichment of eventEnrichments){const official=enrichment.officialLinks.find(link=>link.id===id);if(official)return{eventSlug:enrichment.eventSlug,type:official.type,url:official.url};const resource=enrichment.resources.find(item=>item.id===id);if(resource)return{eventSlug:enrichment.eventSlug,type:resource.type,url:resource.bookingUrl||resource.websiteUrl}}}
