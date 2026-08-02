import Link from "next/link";

const links = [
  ["Home", "/"], ["Profile", "/profile"], ["Products", "/products"],
  ["Industries we serve", "/industries"], ["Downloads", "/downloads"], ["Contact Us", "/contact"],
];

export function SiteHeader() {
  return <header className="site-header">
    <Link className="brand" href="/" aria-label="AK Engineering home"><img className="brand-logo" src="/ak-engineering-logo-cropped.jpeg" alt="AK Engineering" /></Link>
    <nav aria-label="Primary navigation">{links.map(([label, href]) => <Link className={label === "Contact Us" ? "nav-contact" : ""} href={href} key={href}>{label}</Link>)}</nav>
    <details className="mobile-menu"><summary aria-label="Open navigation menu">Menu</summary><div className="mobile-menu-links">{links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div></details>
  </header>;
}

export function SiteFooter() {
  return <footer><div className="brand footer-brand"><img className="brand-logo footer-logo" src="/ak-engineering-logo-cropped.jpeg" alt="AK Engineering" /></div><div><strong>Workshop</strong><p>Pattanam Road, Sulur<br />Coimbatore, Tamil Nadu 641016</p></div><div><strong>Connect</strong><p><a href="tel:+919952551805">+91 99525 51805</a><br /><a href="mailto:akengineeringscbe@gmail.com">akengineeringscbe@gmail.com</a></p></div><p className="copyright">© 2026 AK Engineering</p></footer>;
}
