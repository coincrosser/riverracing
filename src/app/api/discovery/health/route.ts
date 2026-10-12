import {NextResponse} from "next/server";import {geminiHealth} from "@/lib/discovery";
export const dynamic="force-dynamic";
export async function GET(request:Request){if(request.headers.get("authorization")!==`Bearer ${process.env.DISCOVERY_ADMIN_TOKEN}`||!process.env.DISCOVERY_ADMIN_TOKEN)return NextResponse.json({error:"Unauthorized"},{status:401});try{return NextResponse.json(await geminiHealth())}catch(error){return NextResponse.json({ok:false,error:error instanceof Error?error.message:"Health check failed"},{status:503})}}
