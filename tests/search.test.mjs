import test from "node:test";import assert from "node:assert/strict";import fs from "node:fs";
const text=fs.readFileSync(new URL("../src/data/events.ts",import.meta.url),"utf8");
test("seed records retain sources and verification dates",()=>{assert.equal((text.match(/officialUrl:/g)||[]).length,8);assert.equal((text.match(/verifiedAt:/g)||[]).length,8)});
test("launch markets are represented",()=>{assert.match(text,/Ohio River/);assert.match(text,/Oklahoma City/)});
