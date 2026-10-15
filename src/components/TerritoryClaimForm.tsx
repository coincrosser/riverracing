"use client";
import {useState} from "react";

type ApplicationType="territory"|"marina";

export default function TerritoryClaimForm({waterwaySlug,applicationType="territory"}:{waterwaySlug?:string;applicationType?:ApplicationType}){
 const [state,setState]=useState<"idle"|"sending"|"sent"|"error">("idle");
 async function submit(event:React.FormEvent<HTMLFormElement>){event.preventDefault();setState("sending");const form=new FormData(event.currentTarget);const body=Object.fromEntries(form);const response=await fetch("/api/stewardship/claim",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({...body,applicationType,waterwaySlug:waterwaySlug||body.waterwaySlug})});setState(response.ok?"sent":"error")}
 const marina=applicationType==="marina";
 return <form className="claim-form" onSubmit={submit}>
  <input name="website" className="honeypot" tabIndex={-1} autoComplete="off"/>
  <label>Name<input name="name" required/></label>
  <label>Email<input name="email" type="email" required/></label>
  <label>{marina?"Marina name":"Organization or marina"}<input name="organization" required/></label>
  {!waterwaySlug&&<label>Waterway or territory<input name="waterwaySlug" required placeholder="Ohio River — Louisville"/></label>}
  {marina&&<><label>City<input name="city" required/></label><label>State<input name="state" required/></label><label className="wide">Official marina website<input name="marinaUrl" type="url" required placeholder="https://"/></label></>}
  <label className="wide">Notes<textarea name="notes" rows={4} placeholder={marina?"Dock verification contact, launch access, or league facilities":"Communities, waterways, and marinas you plan to serve"}/></label>
  <button className="button dark" disabled={state==="sending"}>{state==="sending"?"SENDING…":marina?"REGISTER HOME MARINA →":"CLAIM THIS TERRITORY →"}</button>
  {state==="sent"&&<p className="form-success">{marina?"Marina registration":"Territory application"} delivered for review. Nothing is public until verified.</p>}
  {state==="error"&&<p className="form-error">Delivery is unavailable. Nothing was submitted.</p>}
 </form>
}
