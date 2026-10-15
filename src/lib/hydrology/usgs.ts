export type UsgsReading={parameterCode:"00065"|"00060"|"00010";label:string;value:number;unit:string;observedAt:string};
export type UsgsTelemetry={status:"live"|"unavailable";siteId:string;siteName?:string;readings:UsgsReading[];checkedAt:string};
const labels:Record<string,string>={"00065":"Gauge height","00060":"Discharge","00010":"Water temperature"};

export async function getUsgsTelemetry(siteId:string,fetcher:typeof fetch=fetch):Promise<UsgsTelemetry>{
 const checkedAt=new Date().toISOString();
 try{const url=new URL("https://waterservices.usgs.gov/nwis/iv/");url.searchParams.set("format","json");url.searchParams.set("sites",siteId);url.searchParams.set("parameterCd","00065,00060,00010");url.searchParams.set("siteStatus","all");const response=await fetcher(url,{next:{revalidate:1800}} as RequestInit);if(!response.ok)throw new Error(`USGS ${response.status}`);const json=await response.json();const series=Array.isArray(json?.value?.timeSeries)?json.value.timeSeries:[];const readings:UsgsReading[]=series.flatMap((item:any)=>{const code=item?.variable?.variableCode?.[0]?.value;const sample=item?.values?.[0]?.value?.at(-1);const value=Number(sample?.value);if(!labels[code]||!Number.isFinite(value)||!sample?.dateTime)return[];return[{parameterCode:code,label:labels[code],value,unit:item?.variable?.unit?.unitCode||"",observedAt:sample.dateTime}]});return{status:readings.length?"live":"unavailable",siteId,siteName:series[0]?.sourceInfo?.siteName,readings,checkedAt};}catch{return{status:"unavailable",siteId,readings:[],checkedAt}}
}
