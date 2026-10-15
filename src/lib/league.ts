import type {LeagueTeam,LeagueTerritory,VesselClass} from "../types/league-network";
export function poundsPerCrewMember(team:LeagueTeam){return team.crewSize>0?team.verifiedPoundsRemoved/team.crewSize:0}
export type LeagueView="pontoon"|"all"|"marina"|"constructors";
export function isFranchised(territory:LeagueTerritory|undefined){return Boolean(territory?.active&&territory.operatorName&&territory.homeMarinas.length)}
export function teamsForClass(teams:LeagueTeam[],vesselClass:VesselClass){return teams.filter(t=>t.vesselClass===vesselClass&&t.recordStatus==="verified").sort((a,b)=>b.seasonPoints-a.seasonPoints)}
export function allClassStandings(teams:LeagueTeam[]){return teams.filter(t=>t.recordStatus==="verified").sort((a,b)=>poundsPerCrewMember(b)-poundsPerCrewMember(a))}
