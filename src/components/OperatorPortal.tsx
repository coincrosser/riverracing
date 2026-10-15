"use client";
import {useState} from "react";
import TerritoryClaimForm from "@/components/TerritoryClaimForm";
import WeighInForm from "@/components/WeighInForm";

type View="territory"|"marina"|"weigh-in";
const options:[View,string][]=[["territory","Territory Application"],["marina","Home Marina Registration"],["weigh-in","Weigh-In Log"]];

export default function OperatorPortal(){const [view,setView]=useState<View>("territory");return <section className="operator-portal"><div className="operator-tabs" role="tablist" aria-label="Operator tools">{options.map(([id,label])=><button role="tab" aria-selected={view===id} className={view===id?"active":""} onClick={()=>setView(id)} key={id}>{label}</button>)}</div><div className="operator-panel" role="tabpanel">{view==="territory"?<><h2>Apply for a territory.</h2><p>Tell us which waterway and communities you can serve. Approval is manual.</p><TerritoryClaimForm/></>:view==="marina"?<><h2>Register a Home Marina.</h2><p>Submit an official marina location for verification before it appears publicly.</p><TerritoryClaimForm applicationType="marina"/></>:<><h2>Log a verified cleanup weigh-in.</h2><p>This sends a record for dock verification. It does not change public standings automatically.</p><WeighInForm/></>}</div></section>}
