import ExternalLink from "@/components/ExternalLink";

export default function EsquifHeritageBanner({compact=false}:{compact?:boolean}){
 return <aside className={`esquif-heritage${compact?" compact":""}`} aria-label="Esquif heritage and river stewardship">
  <div className="heritage-mark" aria-hidden="true">E</div>
  <div>
   <p>T-FORMEX TOUGH · HÉRITAGE D’EAU VIVE</p>
   <h2>Whitewater heritage. River stewardship.</h2>
   <span>A RiverRacing tribute to Jacques Chassé and the Esquif Canoes team—Quebec-built canoe culture for whitewater and wilderness travel.</span>
   <small>Featured canoe resource · Free listing · No sponsorship or commercial partnership claimed.</small>
  </div>
  <ExternalLink linkId="brand-esquif-canoes" source={compact?"homepage-heritage":"league-heritage"} className="heritage-link">Explore Esquif</ExternalLink>
 </aside>
}
