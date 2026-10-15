import {NextResponse} from "next/server";

const clean=(value:unknown,max=500)=>String(value||"").trim().slice(0,max);

export async function POST(request:Request){
 let body:Record<string,unknown>;
 try{body=await request.json()}catch{return NextResponse.json({error:"Invalid request"},{status:400})}
 if(body.website)return NextResponse.json({ok:true});
 const applicationType=body.applicationType==="marina"?"marina":"territory";
 const required=["name","email","organization","waterwaySlug",...(applicationType==="marina"?["city","state","marinaUrl"]:[])];
 if(required.some(field=>!clean(body[field])))return NextResponse.json({error:"Missing required fields"},{status:400});
 if(applicationType==="marina"){try{const url=new URL(clean(body.marinaUrl));if(!["http:","https:"].includes(url.protocol))throw new Error()}catch{return NextResponse.json({error:"Invalid marina URL"},{status:400})}}
 const key=process.env.RESEND_API_KEY,to=process.env.SUBMISSIONS_TO_EMAIL,from=process.env.SUBMISSIONS_FROM_EMAIL;
 if(!key||!to||!from)return NextResponse.json({error:"Delivery not configured"},{status:503});
 const fields=["name","email","organization","waterwaySlug","city","state","marinaUrl","notes"].filter(field=>clean(body[field])).map(field=>`${field}: ${clean(body[field],1200)}`).join("\n");
 const label=applicationType==="marina"?"Home Marina registration":"River League territory claim";
 const response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{authorization:`Bearer ${key}`,"content-type":"application/json"},body:JSON.stringify({from,to:[to],reply_to:clean(body.email),subject:`${label}: ${clean(body.organization,100)}`,text:`UNVERIFIED — requires human approval before publication.\n\nApplication type: ${applicationType}\n${fields}`})});
 return response.ok?NextResponse.json({ok:true}):NextResponse.json({error:"Delivery failed"},{status:502});
}
