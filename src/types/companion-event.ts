export type CompanionSweep={slug:string;name:string;eventDate:string;officialUrl:string;entryFee?:number;cleanCourseVerified:boolean;verifiedAt:string};
export const prizeShares={firstPlace:.4,hullSaverBounty:.25,mothershipDuo:.2,pokerHand:.15} as const;
export function prizeBreakdown(entryFee:number,entries:number){const purse=entryFee*entries;return{purse,firstPlace:purse*prizeShares.firstPlace,hullSaverBounty:purse*prizeShares.hullSaverBounty,mothershipDuo:purse*prizeShares.mothershipDuo,pokerHand:purse*prizeShares.pokerHand}}
