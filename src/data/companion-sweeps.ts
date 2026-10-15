import type {CompanionSweep} from "@/types/companion-event";
// Published only after a sanctioned sweep has an authoritative source.
export const companionSweeps:CompanionSweep[]=[];
export const getCompanionSweep=(slug?:string)=>slug?companionSweeps.find(s=>s.slug===slug):undefined;
