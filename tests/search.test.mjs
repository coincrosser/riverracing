import test from "node:test";import assert from "node:assert/strict";import fs from "node:fs";
const text=fs.readFileSync(new URL("../src/data/events.ts",import.meta.url),"utf8");
test("every record retains a source and verification date",()=>{const sources=(text.match(/officialUrl:/g)||[]).length;assert.ok(sources>=20);assert.equal((text.match(/verifiedAt:/g)||[]).length,sources)});
test("Ohio River and Oklahoma City records are represented",()=>{assert.match(text,/Ohio River/);assert.match(text,/Oklahoma City/)});
test("catalog is watercraft-only and sailing-forward",()=>{assert.doesNotMatch(text,/open-water swimming/i);assert.ok((text.match(/sports:\["Sailing"\]/g)||[]).length>=8);assert.match(text,/eventTypes:\["Regatta"/)});
test("submission endpoint fails closed without delivery configuration",()=>{const route=fs.readFileSync(new URL("../src/app/api/submissions/route.ts",import.meta.url),"utf8");assert.match(route,/SUBMISSIONS_ENABLED/);assert.match(route,/Delivery not configured/);assert.match(route,/RESEND_API_KEY/)});
