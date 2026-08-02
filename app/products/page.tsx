import { SiteFooter, SiteHeader } from "../components/SiteShell";

const items = [["Belt Conveyor", "/products/clean-belt-conveyor.png"], ["Z-Type Conveyor", "/products/clean-incline-conveyor.png"], ["Modular Conveyor", "/products/modular-conveyor.jpg"], ["Slat Conveyor", "/products/slat-conveyor.jpg"], ["Loading Conveyor", "/products/loading-conveyor.jpg"], ["Roller Conveyor", "/products/clean-roller-conveyor.png"], ["Bucket Conveyor", "/products/bucket-conveyor.jpg"], ["Screw Conveyor", "/products/screw-conveyor.jpg"], ["Tamarind Processing Machine", "/products/tamarind-processing-machine.jpg"], ["Spices Cleaning Machine", "/products/spices-cleaning-machine.jpg"]];

export default function ProductsPage() {
  return <><SiteHeader /><main className="inner-page"><p className="eyebrow"><span /> Product range</p><h1>Conveying, processing &amp; automation.</h1><p className="page-lead">Custom-built machinery for reliable material movement and food-processing workflows.</p><div className="catalogue-grid">{items.map(([name, photo]) => <article key={name}><img src={photo} alt={name} /><h2>{name}</h2><a href="/contact">Discuss this solution →</a></article>)}</div></main><SiteFooter /></>;
}
