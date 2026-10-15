import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const read=path=>fs.readFileSync(new URL(path,import.meta.url),"utf8");
const hero=read("../src/components/HeroSection.tsx");
const header=read("../src/components/Header.tsx");
const guide=read("../src/components/EventWeekendGuide.tsx");
const telemetry=read("../src/components/WaterTelemetry.tsx");
const operator=read("../src/components/OperatorPortal.tsx");

test("homepage flagship CTAs route to league, live index, and territory claim",()=>{
 assert.match(hero,/EVERY RIVER\. <em>EVERY RACE\.<\/em> EVERY CLEANUP\./);
 assert.match(hero,/href="\/stewardship\/league"/);
 assert.match(hero,/href="#live-index"/);
 assert.match(hero,/href="\/territories\/claim"/);
});

test("global navigation exposes every primary product route",()=>{
 for(const href of ["/#events","/waterways","/organizers","/stewardship/league","/territories/claim"])assert.match(header,new RegExp(`href:\"${href.replace("/","\\/")}\"`));
});

test("event guides expose all three audience modes",()=>{
 for(const label of ["I’M RACING","I’M WATCHING","CLEANUP LEAGUE"])assert.match(guide,new RegExp(label));
 for(const mode of ["participant","spectator","stewardship"])assert.match(guide,new RegExp(`onChange\\(\"${mode}\"\\)`));
});

test("USGS UI fails closed with an explicit unavailable state",()=>{
 assert.match(telemetry,/WATER TELEMETRY UNAVAILABLE/);
 assert.match(telemetry,/telemetry\.status==="live"/);
});

test("operator portal separates applications, marinas, and weigh-ins",()=>{
 for(const label of ["Territory Application","Home Marina Registration","Weigh-In Log"])assert.match(operator,new RegExp(label));
 assert.match(operator,/does not change public standings automatically/);
});
