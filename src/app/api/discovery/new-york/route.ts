import {NextResponse} from "next/server";import {discoverNewYork} from "@/lib/discovery";
export const dynamic="force-dynamic";export const maxDuration=60;
export async function POST(request:Request){if(request.headers.get("authorization")!==`Bearer ${process.env.DISCOVERY_ADMIN_TOKEN}`||!process.env.DISCOVERY_ADMIN_TOKEN)return NextResponse.json({error:"Unauthorized"},{status:401});try{return NextResponse.json(await discoverNewYork())}catch(error){return NextResponse.json({error:error instanceof Error?error.message:"Discovery failed"},{status:500})}}
