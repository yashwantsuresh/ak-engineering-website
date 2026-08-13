import { SiteFooter, SiteHeader } from "../components/SiteShell";
import { CountUp } from "../components/CountUp";
import { ClientCarousel } from "../components/ClientCarousel";

export default function ProfilePage() {
  return <>
    <SiteHeader />
    <main className="inner-page profile-page">
      <p className="eyebrow"><span /> About AK Engineering</p>
      <h1>Engineered to Perform.<br />Built to Last.</h1>
      <div className="profile-intro">
        <p>AK Engineering delivers reliable conveyors, SPMs, and custom machinery with precision and innovation.</p>
        <p>We turn industrial requirements into practical, efficient solutions.</p>
      </div>

      <section className="profile-stats" aria-label="AK Engineering company highlights">
        <article><CountUp target={10} /><span>Employees</span></article>
        <article><CountUp target={50} /><span>Applications</span></article>
        <article><CountUp target={50} /><span>Satisfied Customers</span></article>
        <article><strong>PS/MS</strong><span>&amp; R&amp;D Centre</span></article>
      </section>

      <section className="why-profile">
        <p className="eyebrow"><span /> Why AK Engineering?</p>
        <h2>Designed smart. Built strong. Delivered right.</h2>
        <p>At AK Engineering, we deliver practical, reliable, and cost-effective engineering solutions. From custom conveyors to SPMs, we focus on quality, precision, and customer requirements—designed smart, built strong, delivered right.</p>
      </section>

      <div className="profile-values">
        <article>
          <span>01 / Vision</span>
          <h2>To become a trusted engineering partner for industry.</h2>
          <p>Our vision is to be recognised for dependable, innovative, and value-driven conveyor, SPM, and custom machinery solutions that help businesses improve productivity and grow with confidence.</p>
        </article>
        <article>
          <span>02 / Mission</span>
          <h2>Turn every requirement into a practical solution.</h2>
          <p>Our mission is to understand each customer’s process, engineer precise and efficient systems, maintain uncompromising build quality, and provide responsive support from concept through commissioning.</p>
        </article>
      </div>

      <div className="content-grid profile-strengths">
        <article><h2>Customer-first design</h2><p>Every system is planned around your product, capacity, floor space, safety, and service needs.</p></article>
        <article><h2>Reliable execution</h2><p>Practical engineering, robust fabrication, and close attention to performance at every stage.</p></article>
        <article><h2>Cost-effective value</h2><p>Smart, maintainable solutions designed for long service life and a strong return on investment.</p></article>
      </div>
      <section className="profile-clients"><div className="clients-heading"><div><p className="eyebrow"><span /> Our clientele</p><h2>Our Clients</h2></div><p>Trusted partnerships built through practical engineering, dependable execution and responsive support.</p></div><ClientCarousel /></section>
    </main>
    <SiteFooter />
  </>;
}
