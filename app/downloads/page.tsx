import { SiteFooter, SiteHeader } from "../components/SiteShell";

export default function DownloadsPage() {
  return <><SiteHeader /><main className="inner-page"><p className="eyebrow"><span /> Downloads</p><h1>AK Engineering catalogue.</h1><p className="page-lead">Explore conveyors, processing machines and custom automation options in the complete catalogue.</p><a className="button" href="/AK-Engineering-Catalogue.pdf" download>Download PDF catalogue <span>↓</span></a></main><SiteFooter /></>;
}
