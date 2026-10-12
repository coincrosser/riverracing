import {NextResponse} from "next/server";import {discoverMidwest} from "@/lib/discovery";
export const maxDuration=60;
export async function POST(request:Request){if(request.headers.get("authorization")!==`Bearer ${process.env.DISCOVERY_ADMIN_TOKEN}`||!process.env.DISCOVERY_ADMIN_TOKEN)return NextResponse.json({error:"Unauthorized"},{status:401});try{return NextResponse.json(await discoverMidwest())}catch(error){return NextResponse.json({error:error instanceof Error?error.message:"Discovery failed"},{status:500})}}
