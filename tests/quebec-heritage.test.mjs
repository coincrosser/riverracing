import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const read=path=>fs.readFileSync(new URL(path,import.meta.url),"utf8");
const events=read("../src/data/quebec-whitewater.ts");
const ingest=read("../scripts/ingest-quebec-whitewater.ts");
const home=read("../src/components/HomeClient.tsx");
const heritage=read("../src/components/EsquifHeritageBanner.tsx");
const leagueTypes=read("../src/types/league-network.ts");
const sweep=read("../src/components/CompanionSweepCard.tsx");

test("Quebec records retain authoritative URLs and bilingual metadata",()=>{
 assert.match(events,/Classique internationale de canots de la Mauricie/);
 assert.match(events,/localized:\{en:/);
 assert.match(events,/fr:\{title:/);
 assert.match(events,/waterwayVerified:true/);
 assert.doesNotMatch(events,/Swimming|swimming/);
});

test("Quebec ingestion rejects unsupported festival claims",()=>{
 assert.match(ingest,/validateQuebecEvent/);
 assert.match(ingest,/reviewQueue/);
 assert.match(ingest,/no race is documented/i);
 assert.match(ingest,/official source URL is required/);
});

test("regional and bilingual controls are deterministic",()=>{
 for(const label of ["All Regions","Ohio & Heartland","Quebec & Eastern Rivers"])assert.match(home,new RegExp(label.replace("&","&")));
 assert.match(home,/locale===\"en\"/);
 assert.match(home,/locale===\"fr\"/);
 assert.match(home,/inRegion/);
});

test("heritage treatment does not invent a partnership",()=>{
 assert.match(heritage,/T-FORMEX TOUGH/);
 assert.match(heritage,/Jacques Chassé/);
 assert.match(heritage,/No sponsorship or commercial partnership claimed/);
 assert.doesNotMatch(heritage,/Founding Industry Partner/);
});

test("whitewater vessel classes and conditional wilderness badge are supported",()=>{
 for(const vessel of ["whitewater_open_canoe","downriver_racing_canoe","wilderness_tripping_canoe"])assert.match(leagueTypes,new RegExp(vessel));
 assert.match(sweep,/WHITEWATER EXPEDITION &amp; WILDERNESS SWEEP/);
 assert.match(sweep,/sweep\.sweepType===\"whitewater_wilderness\"/);
});
