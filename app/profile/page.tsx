import { SiteFooter, SiteHeader } from "../components/SiteShell";

export default function ProfilePage() {
  return <><SiteHeader /><main className="inner-page"><p className="eyebrow"><span /> About AK Engineering</p><h1>Engineering that keeps production moving.</h1><p className="page-lead">AK Engineering designs and builds conveyors, special-purpose machines and custom automation solutions from Coimbatore.</p><div className="content-grid"><article><h2>Built for your process</h2><p>Every system is planned around material, capacity, hygiene, floor space and service access—not a one-size-fits-all catalogue model.</p></article><article><h2>Direct workshop support</h2><p>Discuss your requirement with the same practical engineering team responsible for fabrication and commissioning.</p></article><article><h2>Made in India</h2><p>Robust, serviceable systems built for continuous duty across food, packaging and industrial operations.</p></article></div></main><SiteFooter /></>;
}
