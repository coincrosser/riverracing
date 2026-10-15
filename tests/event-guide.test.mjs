import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const enrichment=fs.readFileSync(new URL("../src/data/event-enrichment.ts",import.meta.url),"utf8");
const guide=fs.readFileSync(new URL("../src/components/EventWeekendGuide.tsx",import.meta.url),"utf8");
const outbound=fs.readFileSync(new URL("../src/app/out/[linkId]/route.ts",import.meta.url),"utf8");
const eventPage=fs.readFileSync(new URL("../src/app/events/[slug]/page.tsx",import.meta.url),"utf8");
const disciplineResources=fs.readFileSync(new URL("../src/data/discipline-resources.ts",import.meta.url),"utf8");
const leaderboard=fs.readFileSync(new URL("../src/components/LeagueLeaderboard.tsx",import.meta.url),"utf8");

test("prototype uses additive enrichment and ordinary free relationships",()=>{
 assert.match(enrichment,/EventEnrichment/);
 assert.match(enrichment,/OfficialLink/);
 assert.match(enrichment,/EventResource/);
 assert.doesNotMatch(enrichment,/relationship:"(?:affiliate|direct_referral|cpc|cpa|commission|sponsor)"/);
});

test("audience mode prioritizes participant and spectator experiences",()=>{
 assert.match(guide,/I’M RACING/);
 assert.match(guide,/I’M WATCHING/);
 assert.match(guide,/audience==="participant"/);
 assert.match(guide,/if\(!p\.items\.length/);
});

test("every event receives the reusable three-mode guide shell",()=>{
 assert.match(enrichment,/buildBaseEventEnrichment/);
 assert.match(enrichment,/event\.registrationUrl/);
 assert.match(eventPage,/EventWeekendGuide event=\{e\} enrichment=\{enrichment!\} asOfDate=\{asOfDate\}/);
 assert.doesNotMatch(eventPage,/if\(enrichment\)return/);
 assert.match(guide,/CLEANUP LEAGUE/);
 assert.match(leaderboard,/Waterway \/ County/);
});

test("outbound links are allowlisted, classified, and analytics-ready",()=>{
 assert.match(outbound,/getOutboundLink\(linkId\)/);
 assert.match(outbound,/OUTBOUND_CLICK_WEBHOOK/);
 for(const field of ["event","linkId","type","timestamp","source","placement","referrerPath","audience"])assert.match(outbound,new RegExp(field));
 assert.match(outbound,/durable:false/);
 assert.doesNotMatch(outbound,/searchParams\.get\("url"\)/);
});

test("prototype publishes verified structured SportsEvent metadata",()=>{
 assert.match(eventPage,/schema\.org/);
 assert.match(eventPage,/SportsEvent/);
 assert.match(eventPage,/GeoCoordinates/);
});

test("Louisville guides use verified reusable free local resources",()=>{
 assert.match(enrichment,/localResource=.*"unbridled"\|"juniper"/);
 assert.match(enrichment,/Unbridled Sailing/);
 assert.match(enrichment,/Juniper Beach Marina/);
 assert.match(guide,/LOCAL SAILING EXPERTISE/);
 for(const slug of ["pumpkin-regatta-2026","lsc-fall-long-distance-race-2026","lsc-sunfish-fleet-racing-2026","lsc-handicap-fleet-racing-2026","great-steamboat-race-2027"])assert.match(enrichment,new RegExp(slug));
});

test("Esquif is a reusable canoe-only free discipline resource",()=>{
 assert.match(disciplineResources,/brand-esquif-canoes/);
 assert.match(disciplineResources,/applicableDisciplines:\["Canoe racing"\]/);
 assert.match(disciplineResources,/relationship:"free"/);
 assert.match(disciplineResources,/active:true/);
 assert.match(eventPage,/DisciplineResources event=\{e\}/);
 assert.match(outbound,/getDisciplineResource/);
});
