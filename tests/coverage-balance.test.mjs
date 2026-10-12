import test from "node:test";
import assert from "node:assert/strict";
import {coverageBalanceEvents as added} from "../src/data/coverage-balance.ts";
import {sourceRegistry} from "../src/data/source-registry.ts";

test("coverage balance records remain source-backed and future-facing",()=>{
  assert.ok(added.length>=14);
  assert.ok(added.every(event=>event.officialUrl.startsWith("https://")));
  assert.ok(added.every(event=>event.status==="Date Pending"||!event.startDate||event.startDate>="2026-10-12"));
  assert.ok(added.every(event=>!/swim|fishing|boat show/i.test(`${event.name} ${event.sports.join(" ")}`)));
});

test("tentative APBA records are not represented as confirmed",()=>{
  const apba=added.filter(event=>event.organizer==="American Power Boat Association");
  assert.equal(apba.length,8);
  assert.ok(apba.every(event=>event.status==="Needs Review"));
});

test("Mississippi River additions use an exact verified waterway",()=>{
  const river=added.filter(event=>event.waterway==="Mississippi River");
  assert.deepEqual(river.map(event=>event.slug).sort(),["alton-midwest-nationals-2027","mr-145-2027"]);
  assert.ok(river.every(event=>event.waterwayVerified===true));
});

test("source registry records national and corridor discovery networks",()=>{
  for(const organization of ["American Power Boat Association","USA Surfski / ACA Ocean Racing Committee","USA Distance Paddle Racing","USA SUP","Two Paddles Canoe & Kayak Races"]){
    assert.ok(sourceRegistry.some(source=>source.organization===organization),organization);
  }
});
