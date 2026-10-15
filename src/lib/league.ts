import type {LeagueTeam,LeagueTerritory,VesselClass} from "../types/league-network";
export function poundsPerCrewMember(team:LeagueTeam){return team.crewSize>0?team.verifiedPoundsRemoved/team.crewSize:0}
export type LeagueView="pontoon"|"all"|"marina"|"constructors"|"waterway";
export type LeagueAggregate={name:string;pounds:number;points:number;fleet:number;seed:boolean};
export function isFranchised(territory:LeagueTerritory|undefined){return Boolean(territory?.active&&territory.operatorName&&territory.homeMarinas.length)}
export function teamsForClass(teams:LeagueTeam[],vesselClass:VesselClass){return teams.filter(t=>t.vesselClass===vesselClass&&t.recordStatus==="verified").sort((a,b)=>b.seasonPoints-a.seasonPoints)}
export function allClassStandings(teams:LeagueTeam[]){return teams.filter(t=>t.recordStatus==="verified").sort((a,b)=>poundsPerCrewMember(b)-poundsPerCrewMember(a))}
function aggregate(teams:LeagueTeam[],label:(team:LeagueTeam)=>string|undefined,{includeSeeds=false}:{includeSeeds?:boolean}={}){return Object.values(teams.reduce<Record<string,LeagueAggregate>>((groups,team)=>{if(!includeSeeds&&team.recordStatus!=="verified")return groups;const name=label(team);if(!name)return groups;const row=groups[name]||{name,pounds:0,points:0,fleet:0,seed:true};row.pounds+=team.verifiedPoundsRemoved;row.points+=team.seasonPoints;row.fleet+=team.recordStatus==="verified"?1:0;row.seed=row.seed&&team.recordStatus==="seed";groups[name]=row;return groups},{})).sort((a,b)=>b.points-a.points||b.pounds-a.pounds||a.name.localeCompare(b.name))}
export const marinaStandings=(teams:LeagueTeam[])=>aggregate(teams,team=>team.homeMarina);
export const constructorStandings=(teams:LeagueTeam[])=>aggregate(teams,team=>team.boatBrand,{includeSeeds:true});
export const waterwayStandings=(teams:LeagueTeam[])=>aggregate(teams,team=>team.waterway&&team.county?`${team.waterway} · ${team.county} County`:team.waterway||team.county&&`${team.county} County`);
