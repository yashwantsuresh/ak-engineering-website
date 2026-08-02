import { SiteFooter, SiteHeader } from "../components/SiteShell";

const industries = ["Food & Beverage", "Packaging", "Automotive", "Pharmaceutical", "Warehousing", "General Engineering"];
export default function IndustriesPage() {
  return <><SiteHeader /><main className="inner-page"><p className="eyebrow"><span /> Industries served</p><h1>Ready for the real world.</h1><p className="page-lead">Solutions designed for production environments where hygiene, precision, durability and uptime matter.</p><div className="industry-page-list">{industries.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong><i>↗</i></div>)}</div></main><SiteFooter /></>;
}
