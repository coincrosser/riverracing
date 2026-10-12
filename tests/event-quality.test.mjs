import test from "node:test";
import assert from "node:assert/strict";
import {auditEvents,scoreOpportunity} from "../src/lib/event-quality.ts";

const base={slug:"race",name:"Race",sports:["Sailing"],eventTypes:["Regatta"],startDate:"2027-05-01",endDate:"2027-05-03",city:"Louisville",state:"Kentucky",waterway:"Ohio River",venue:"Waterfront",organizer:"Club",audience:["Participant","Spectator"],officialUrl:"https://example.com",registrationUrl:"https://example.com/register",status:"Confirmed",verifiedAt:"2026-10-12",summary:"Fixture",market:"National",latitude:38.2,longitude:-85.7};
test("quality audit finds date contradictions and duplicates",()=>{const issues=auditEvents([base,{...base}],"2026-10-12");assert.ok(issues.some(x=>x.message.includes("Duplicate slug")));assert.ok(issues.some(x=>x.message.includes("Possible duplicate")));assert.ok(auditEvents([{...base,endDate:"2027-04-01"}],"2026-10-12").some(x=>x.message.includes("End date")))});
test("opportunity score is editorial and tiered",()=>{const result=scoreOpportunity(base,{resources:[{},{}]});assert.equal(result.tier,"A");assert.ok(result.signals.includes("multi-day"));assert.ok(result.signals.includes("existing enrichment"))});
