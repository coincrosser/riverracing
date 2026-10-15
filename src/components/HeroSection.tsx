import Link from "next/link";

type HeroSectionProps = {
  eventCount: number;
  loading: boolean;
  query: string;
  onQueryChange: (value: string) => void;
  onSearch: (event: React.FormEvent<HTMLFormElement>) => void;
};

const waves = <svg aria-hidden="true" viewBox="0 0 800 150" preserveAspectRatio="none"><path d="M0 78C150 10 250 145 400 78S650 10 800 78V150H0Z"/><path d="M0 105C180 50 260 165 430 100S650 55 800 110V150H0Z"/></svg>;

export default function HeroSection({eventCount,loading,query,onQueryChange,onSearch}:HeroSectionProps){
 return <section className="hero home-hero">
  <div className="hero-grid"/>
  <div className="hero-copy">
   <p className="kicker">THE INDEPENDENT WATER SPORTS INDEX</p>
   <h1>EVERY RIVER. <em>EVERY RACE.</em> EVERY CLEANUP.</h1>
   <p className="lead">The independent index for water sports, live USGS hydrology, and America&apos;s premier APA-style Pontoon &amp; Canoe Cleanup League.</p>
   <div className="hero-ctas">
    <Link className="hero-cta primary" href="/stewardship/league">JOIN THE CLEANUP LEAGUE <span>→</span></Link>
    <a className="hero-cta secondary" href="#live-index">FIND A RACE OR WATERWAY</a>
   </div>
   <aside className="operator-ribbon" aria-label="River League Operator opportunity">
    <span aria-hidden="true">🔥</span>
    <strong>Own Your Waterway:</strong>
    <span>Become a River League Operator &amp; Home Marina Partner.</span>
    <Link href="/territories/claim">Claim Your Territory →</Link>
   </aside>
   <form className="search hero-search" onSubmit={onSearch}>
    <label><span>SEARCH THE LIVE INDEX</span><input value={query} onChange={event=>onQueryChange(event.target.value)} placeholder="Try “Sailing near Louisville”..." aria-label="Search races and waterways"/></label>
    <button disabled={loading}>{loading?"SEARCHING…":"FIND RACES"} <b>→</b></button>
   </form>
  </div>
  <div className="current"><span>● LIVE INDEX</span><strong>{eventCount}</strong><small>VERIFIED RECORDS</small></div>
  <div className="waves">{waves}</div>
 </section>
}
