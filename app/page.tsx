"use client";

import { useEffect, useState } from "react";
import { SiteFooter, SiteHeader } from "./components/SiteShell";
import { IndustryShowcase } from "./components/IndustryShowcase";
import { ContactForm } from "./components/ContactForm";

const products = [
  ["01", "Belt Conveyor", "PVC, PU or rubber belt. MS / SS frame, 300-1200 mm width, variable speed and up to 100 kg/m load capacity."],
  ["02", "Z-Type Conveyor", "PVC, PU or modular belt. MS / SS frame, 300-1000 mm belt width and up to 50 kg/m load capacity."],
  ["03", "Modular Conveyor", "Plastic modular belt with MS / SS frame. 300-1200 mm belt width, variable speed and up to 80 kg/m load capacity."],
  ["04", "Slat Conveyor", "Stainless-steel or plastic slat chain with SS frame. Custom length and 300-900 mm conveyor width."],
  ["05", "Loading Conveyor", "Telescopic, mobile or fixed options with PVC / PU belt, custom length and adjustable lifting height."],
  ["06", "Roller Conveyor", "Gravity or powered type, MS / SS rollers and frame, 50-76 mm roller diameter and custom length."],
  ["07", "Bucket Conveyor", "SS or food-grade plastic buckets with SS / plastic modular chain. Custom height and 150-600 mm bucket width."],
  ["08", "Screw Conveyor", "SS helical screw, SS / MS casing and custom conveyor length, diameter and width."],
  ["09", "Mobile Conveyor", "PVC, PU or rubber belt with MS / SS frame, hydraulic height adjustment and inclination up to 45 degrees."],
  ["10", "Spices Cleaning Machine", "For pepper, cardamom, cloves, cumin and coriander. 200-1500 kg/hr capacity with dust removal and impurity separation."],
  ["11", "Tamarind Processing Machine", "Separates tamarind pulp from seeds and fibre. 100-1000 kg/hr capacity, SS 304 and hygienic, easy-clean design."],
  ["12", "Cashew Kernel Grading Machine", "Multiple-grade cashew grading with 150-800 kg/hr capacity, 3/4/5 grading decks and adjustable grade sizes."],
  ["13", "Amla Seed Removing Machine", "For amla / Indian gooseberry seed removal. 200-1000 kg/hr capacity, SS 304 and low-loss operation."],
];

const productPhotos = [
  "/products/clean-belt-conveyor.png", "/products/clean-incline-conveyor.png", "/products/clean-modular-conveyor.png",
  "/products/clean-slat-conveyor.png", "/products/clean-loading-conveyor.png", "/products/clean-roller-conveyor.png",
  "/products/clean-bucket-conveyor.png", "/products/clean-screw-conveyor.png", "/products/clean-mobile-conveyor.png",
  "/products/clean-spices-machine.png", "/products/clean-tamarind-machine.png",
  "/products/clean-cashew-grading-machine.png", "/products/clean-amla-seed-machine.png",
];

const homeSlides = [
  { eyebrow: "Conveyors", title: "Reliable Conveyors. Built for Production.", description: "AK Engineering delivers reliable conveyor solutions with precision and innovation.", image: "/hero/conveyor-line.png", imageAlt: "Automated industrial conveyor line" },
  { eyebrow: "SPMs & Custom Machinery", title: "Practical Automation. Efficient Results.", description: "We turn industrial requirements into practical, efficient custom machinery solutions.", image: "/hero/custom-spm.png", imageAlt: "Custom special purpose machine and conveyor cell" },
  { eyebrow: "Conveyor Components", title: "Precision Components. Dependable Movement.", description: "Quality, precision, and customer requirements guide every solution we deliver.", image: "/hero/conveyor-components.png", imageAlt: "Industrial conveyor components in a honeycomb display" },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % homeSlides.length), 5200);
    return () => window.clearInterval(timer);
  }, []);

  const slide = homeSlides[activeSlide];
  const showSlide = (index: number) => setActiveSlide((index + homeSlides.length) % homeSlides.length);

  return (
    <main>
      <SiteHeader />

      <section className="client-hero" id="top" aria-roledescription="carousel" aria-label="AK Engineering solutions">
        <div className={`client-hero-track ${activeSlide === 2 ? "components-slide" : ""}`} key={activeSlide}>
          <div className="client-hero-copy">
            <p className="eyebrow"><span /> {slide.eyebrow}</p>
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <a className="hero-view-button" href="#products">View solutions <span>↗</span></a>
          </div>
          <div className="client-hero-wedge" aria-hidden="true"><i /><b /></div>
          <div className="client-hero-visual"><img src={slide.image} alt={slide.imageAlt} /></div>
        </div>
        <button className="hero-arrow hero-arrow-left" onClick={() => showSlide(activeSlide - 1)} aria-label="Previous slide">‹</button>
        <button className="hero-arrow hero-arrow-right" onClick={() => showSlide(activeSlide + 1)} aria-label="Next slide">›</button>
        <div className="hero-pagination" aria-label="Choose a homepage slide">{homeSlides.map((item, index) => <button key={item.title} onClick={() => showSlide(index)} className={index === activeSlide ? "active" : ""} aria-label={`Show slide ${index + 1}`} />)}</div>
      </section>

      <section className="ticker" aria-label="Core services"><span>TAMARIND PROCESSING</span><i>◆</i><span>PEPPER CONVEYING</span><i>◆</i><span>BOTTLING CONVEYORS</span><i>◆</i><span>CHAPATI MACHINES</span><i>◆</i><span>COMMERCIAL BURNERS</span></section>

      <section className="section products" id="products">
        <div className="section-heading"><div><p className="eyebrow"><span /> What we build</p><h2>One line.<br /><em>Every solution.</em></h2></div><p>From the moving surface to the supporting component, we engineer around the product you handle, the speed you need and the realities of your shop floor.</p></div>
        <div className="product-grid">
          {products.map(([number, title, description], index) => <article className="product-card" key={number}><span className="number">{number}</span><div className="product-photo"><img src={productPhotos[index]} alt={title} /></div><h3>{title}</h3><p>{description}</p><a href="#contact">Discuss this solution <span>↗</span></a></article>)}
        </div>
      </section>

      <section className="capabilities" id="capabilities">
        <div className="cap-copy"><p className="eyebrow light"><span /> Why AK Engineering</p><h2>Built around<br />your line—not<br />a catalogue.</h2><p>Every project begins with the application: material, throughput, duty cycle, space and service access. The result is practical engineering that earns its place on the floor.</p><a className="button white" href="#contact">Talk to an engineer <span>↗</span></a></div>
        <div className="cap-list">
          <article><span>01</span><div><h3>Application-first design</h3><p>Geometry, transfer height and layouts planned around your actual process.</p></div></article>
          <article><span>02</span><div><h3>Continuous-duty thinking</h3><p>Robust frames and serviceable components selected for dependable uptime.</p></div></article>
          <article><span>03</span><div><h3>Sustainable efficiency</h3><p>Long service life, maintainable systems and smarter product movement.</p></div></article>
          <article><span>04</span><div><h3>Workshop-direct support</h3><p>Discuss the project with the same team responsible for the build.</p></div></article>
        </div>
      </section>

      <section className="section downloads" id="downloads">
        <div><p className="eyebrow"><span /> Product catalogue</p><h2>See the full<br /><em>AK range.</em></h2><p>Download the AK Engineering catalogue for conveyor systems, food-processing machines and custom automation solutions.</p><a className="button" href="/AK-Engineering-Catalogue.pdf" download>Download catalogue <span>↓</span></a></div>
        <div className="download-card"><span>PDF / 2026</span><strong>AK Engineering<br />Product Catalogue</strong><p>Conveyors · Processing machines · Custom automation</p></div>
      </section>

      <section className="section industries" id="industries"><div className="section-heading compact"><div><p className="eyebrow"><span /> Industries served</p><h2>Ready for the<br /><em>real world.</em></h2></div><p>Versatile solutions for production environments where hygiene, precision, durability and uptime matter.</p></div><IndustryShowcase /></section>

      <section className="about" id="about"><div className="about-visual"><div className="about-logo-panel"><img src="/ak-engineering-logo-cropped.jpeg" alt="AK Engineering logo" /></div><p>COIMBATORE · TAMIL NADU · INDIA</p></div><div className="about-copy"><p className="eyebrow"><span /> About the workshop</p><h2>Engineering that starts on the floor.</h2><p>AK Engineering designs and builds conveyors, special purpose machines and automation solutions for production teams that cannot afford avoidable downtime.</p><p>By combining custom fabrication with a complete range of conveyor technologies and components, we make it easier to specify, build, maintain and expand a dependable line.</p><div className="about-points"><div><strong>Process-first</strong><span>Built for the application</span></div><div><strong>Made in India</strong><span>Direct workshop oversight</span></div></div></div></section>

      <section className="contact" id="contact"><div><p className="eyebrow light"><span /> Project enquiries</p><h2>Let’s build the line<br />that moves your business.</h2><p>Share your product type, target capacity and available footprint. We’ll help define the right conveyor or custom machine approach.</p><div className="contact-direct"><a href="tel:+919952551805">Call: +91 99525 51805</a><a href="https://mail.google.com/mail/?view=cm&fs=1&to=akengineeringscbe@gmail.com&su=AK%20Engineering%20Enquiry" target="_blank" rel="noreferrer">akengineeringscbe@gmail.com</a></div></div><ContactForm compact /></section>

      <SiteFooter />
    </main>
  );
}
