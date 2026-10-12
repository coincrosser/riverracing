import test from "node:test";
import assert from "node:assert/strict";
import {interpretSearch,searchRaces} from "../src/lib/race-search.ts";

const base={venue:"",organizer:"Test Organizer",audience:["Participant"],officialUrl:"https://example.com",status:"Confirmed",verifiedAt:"2026-10-11",summary:"Verified fixture",market:"National"};
const fixtures=[
 {...base,slug:"sail-ohio",name:"Ohio Sail Regatta",sports:["Sailing"],eventTypes:["Regatta"],startDate:"2026-10-18",city:"Louisville",state:"Kentucky",waterway:"Ohio River",latitude:38.2527,longitude:-85.7585},
 {...base,slug:"row-ny",name:"Hudson Head Race",sports:["Rowing"],eventTypes:["Regatta"],startDate:"2026-11-02",city:"Albany",state:"New York",waterway:"Hudson River",latitude:42.6526,longitude:-73.7562},
 {...base,slug:"hydro-in",name:"Indiana Hydroplane Challenge",sports:["Hydroplane racing","Powerboat racing"],eventTypes:["Powerboat race"],startDate:"2027-05-01",city:"Evansville",state:"Indiana",waterway:"Ohio River",latitude:37.9716,longitude:-87.5711},
 {...base,slug:"dragon-memphis",name:"Memphis Dragon Boat Classic",sports:["Dragon boat racing"],eventTypes:["Regatta"],startDate:"2027-06-01",city:"Memphis",state:"Tennessee",waterway:"Wolf River",latitude:35.1495,longitude:-90.049},
 {...base,slug:"old-sail",name:"Past Sailing Race",sports:["Sailing"],eventTypes:["Regatta"],startDate:"2026-01-01",city:"Louisville",state:"Kentucky",waterway:"Ohio River",latitude:38.2527,longitude:-85.7585,status:"Completed"}
];
const run=(q,r=100,now=new Date("2026-10-11T12:00:00Z"))=>{const i=interpretSearch(q,r,now);return{i,result:searchRaces(fixtures,i)}};

test("discipline-only is national, upcoming, and has no location intent",()=>{const {i,result}=run("Sailing",250);assert.deepEqual(i.intent,["DISCIPLINE"]);assert.equal(i.location,undefined);assert.deepEqual(result.exact.map(x=>x.event.slug),["sail-ohio"]);assert.equal(result.historical.length,1)});
test("waterway keeps exact and nearby separate",()=>{const {result}=run("Ohio River");assert.ok(result.exact.every(x=>x.event.waterway==="Ohio River"));assert.ok(result.nearby.every(x=>x.event.waterway!=="Ohio River"))});
test("state applies without radius intent",()=>{const {i,result}=run("Indiana");assert.deepEqual(i.intent,["STATE"]);assert.deepEqual(result.exact.map(x=>x.event.slug),["hydro-in"])});
test("city enables proximity",()=>{const {i}=run("Louisville");assert.deepEqual(i.intent,["LOCATION"]);assert.equal(i.locationKind,"city")});
test("discipline plus city combines constraints",()=>{const {i,result}=run("Sailing near Louisville");assert.deepEqual(i.intent,["DISCIPLINE","LOCATION"]);assert.equal(result.exact.length+result.nearby.length,1)});
test("discipline plus state combines constraints",()=>{const {i,result}=run("Hydroplane races in Indiana");assert.deepEqual(i.intent,["DISCIPLINE","STATE"]);assert.equal(i.discipline,"Hydroplane racing");assert.deepEqual(result.exact.map(x=>x.event.slug),["hydro-in"])});
test("date query restricts range",()=>{const {i,result}=run("Regattas this weekend");assert.deepEqual(i.intent,["EVENT_TYPE","DATE"]);assert.equal(i.dateRange.start,"2026-10-17");assert.deepEqual(result.exact.map(x=>x.event.slug),["sail-ohio"])});
test("synonyms resolve deterministically",()=>{assert.equal(run("crew").i.discipline,"Rowing");assert.equal(run("motorboat").i.discipline,"Powerboat racing");assert.equal(run("SUP").i.discipline,"Stand-up paddleboard racing")});
test("zero result stays empty",()=>{const {result}=run("Kayak races in Wyoming");assert.equal(result.exact.length+result.nearby.length,0)});
test("dragon boat near Memphis has anchor and radius",()=>{const {i,result}=run("Dragon boat races near Memphis");assert.deepEqual(i.intent,["DISCIPLINE","LOCATION"]);assert.equal(i.radius,100);assert.equal(result.exact.length,1)});

