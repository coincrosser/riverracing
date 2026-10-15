import type {LeagueTeam,LeagueTerritory} from "@/types/league-network";

// No territory is represented as franchised until a signed operator record exists.
export const leagueTerritories:LeagueTerritory[]=[];

// A non-scoring seed keeps the constructors view ready without claiming cleanup results.
export const leagueTeams:LeagueTeam[]=[{slug:"esquif-expedition-seed",teamName:"Ohio River Expedition Seed",vesselClass:"canoe",boatBrand:"Esquif Canoes",seasonPoints:0,verifiedPoundsRemoved:0,crewSize:1,safetyPledgeStatus:"pending",recordStatus:"seed"}];

export function territoryForWaterway(waterwaySlug:string){return leagueTerritories.find(t=>t.active&&t.waterwaySlug===waterwaySlug)}
