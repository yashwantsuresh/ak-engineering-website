import { SiteFooter, SiteHeader } from "../components/SiteShell";
import { IndustryShowcase } from "../components/IndustryShowcase";

export default function IndustriesPage() {
  return <><SiteHeader /><main className="inner-page industries-page"><p className="eyebrow"><span /> Industries served</p><h1>Ready for the real world.</h1><p className="page-lead">Solutions designed for production environments where hygiene, precision, durability and uptime matter.</p><IndustryShowcase /></main><SiteFooter /></>;
}
