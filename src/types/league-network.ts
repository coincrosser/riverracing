export type VesselClass="pontoon"|"jon_fishing"|"canoe"|"kayak"|"human_solo"|"human_team"|"whitewater_open_canoe"|"downriver_racing_canoe"|"wilderness_tripping_canoe";
export type HomeMarina={name:string;city:string;state:string;url:string;verifiedAt:string};
export type LeagueTerritory={slug:string;name:string;operatorName:string;operatorContact?:string;waterwaySlug:string;active:boolean;homeMarinas:HomeMarina[]};
export type LeagueTeam={slug:string;teamName:string;territorySlug?:string;homeMarina?:string;waterway?:string;county?:string;vesselClass:VesselClass;boatBrand?:string;seasonPoints:number;verifiedPoundsRemoved:number;crewSize:number;safetyPledgeStatus:"signed"|"pending";recordStatus:"verified"|"seed"};

export function poundsPerCrewMember(team:LeagueTeam){return team.crewSize>0?team.verifiedPoundsRemoved/team.crewSize:0}
