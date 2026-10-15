import {events} from "./events";

export type Waterway={slug:string;name:string;region:string;description:string;usgsSiteId?:string;usgsSiteName?:string};
export const slugifyWaterway=(value:string)=>value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const gauges:Record<string,Pick<Waterway,"usgsSiteId"|"usgsSiteName">>={
 "ohio-river":{usgsSiteId:"03294500",usgsSiteName:"Ohio River at Louisville, Kentucky"},
 "mississippi-river":{usgsSiteId:"07032000",usgsSiteName:"Mississippi River at Memphis, Tennessee"}
};
const descriptions:Record<string,string>={"ohio-river":"Verified racing on the Ohio River corridor.","mississippi-river":"Verified racing occurring on the Mississippi River, kept separate from nearby regional events."};
export const waterways:Waterway[]=Array.from(new Set(events.map(e=>e.waterway).filter(Boolean))).map(name=>{const slug=slugifyWaterway(name);return{slug,name,region:"United States",description:descriptions[slug]||`Verified competitive watercraft events on ${name}.`,...gauges[slug]}}).sort((a,b)=>a.name.localeCompare(b.name));
export const getWaterway=(slug:string)=>waterways.find(w=>w.slug===slug);
export const getWaterwayForName=(name:string)=>getWaterway(slugifyWaterway(name));
