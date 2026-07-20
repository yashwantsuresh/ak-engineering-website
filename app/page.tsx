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
  "/products/belt-conveyor.jpg", "/products/z-type-conveyor.jpg", "/products/modular-conveyor.jpg",
  "/products/slat-conveyor.jpg", "/products/loading-conveyor.jpg", "/products/roller-conveyor.jpg",
  "/products/bucket-conveyor.jpg", "/products/screw-conveyor.jpg", "/products/mobile-conveyor.jpg",
  "/products/spices-cleaning-machine.jpg", "/products/tamarind-processing-machine.jpg",
  "/products/cashew-kernel-grading-machine.jpg", "/products/amla-seed-removing-machine.jpg",
];

const industries = ["Food & Beverage", "Packaging", "Automotive", "Pharmaceutical", "Warehousing", "General Engineering"];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AK Engineering home">
          <img className="brand-logo" src="/ak-engineering-logo-cropped.jpeg" alt="AK Engineering — Conveyors and Special Purpose Machines" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#top">Home</a>
          <a href="#about">Profile</a>
          <a href="#products">Products</a>
          <a href="#industries">Industries we serve</a>
          <a href="#capabilities">News &amp; Events</a>
          <a href="#products">Downloads</a>
          <a className="nav-contact" href="#contact">Contact Us</a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu"><i /><i /><i /><span>Menu</span></summary>
          <div className="mobile-menu-links">
            <a href="#top">Home</a><a href="#about">Profile</a><a href="#products">Products</a>
            <a href="#industries">Industries we serve</a><a href="#capabilities">News &amp; Events</a>
            <a href="#products">Downloads</a><a href="#contact">Contact Us</a>
          </div>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Engineered in Coimbatore · Made for industry</p>
          <h1>Keep your<br />production <em>moving.</em></h1>
          <p className="hero-lead">Conveyor and special purpose machine manufacturing for crop grading, material handling and custom industrial automation—built in India for dependable production.</p>
          <div className="hero-actions"><a className="button" href="#contact">Start your project <span>↗</span></a><a className="text-link" href="#products">Explore solutions <span>↓</span></a></div>
          <dl className="stats"><div><dt>Featured range</dt><dd>Processing, conveying & automation</dd></div><div><dt>Built to order</dt><dd>Designed around your line</dd></div><div><dt>Made in India</dt><dd>Engineered in Coimbatore</dd></div></dl>
        </div>
        <div className="machine-card" aria-label="Industrial conveyor illustration">
          <div className="plate-head"><span>Production line / 01</span><span className="live"><i /> Accepting enquiries</span></div>
          <div className="machine-visual">
            <div className="belt"><span /><span /><span /><span /><span /></div>
            <div className="rail rail-one" /><div className="rail rail-two" /><div className="leg leg-one" /><div className="leg leg-two" />
            <div className="machine-label">AK / CONTINUOUS DUTY</div>
          </div>
          <div className="spec-grid"><div><small>APPLICATION</small><strong>Material handling</strong></div><div><small>CONFIGURATION</small><strong>Custom / made to order</strong></div><div><small>PRIORITY</small><strong>Uptime & service life</strong></div><div><small>SUPPORT</small><strong>Direct engineering access</strong></div></div>
        </div>
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

      <section className="section industries" id="industries"><div className="section-heading compact"><div><p className="eyebrow"><span /> Industries served</p><h2>Ready for the<br /><em>real world.</em></h2></div><p>Versatile solutions for production environments where hygiene, precision, durability and uptime matter.</p></div><div className="industry-list">{industries.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong><i>↗</i></div>)}</div></section>

      <section className="about" id="about"><div className="about-visual"><div className="stamp"><strong>AK</strong><small>ENGINEERED<br />TO RUN</small></div><p>COIMBATORE · TAMIL NADU · INDIA</p></div><div className="about-copy"><p className="eyebrow"><span /> About the workshop</p><h2>Engineering that starts on the floor.</h2><p>AK Engineering designs and builds conveyors, special purpose machines and automation solutions for production teams that cannot afford avoidable downtime.</p><p>By combining custom fabrication with a complete range of conveyor technologies and components, we make it easier to specify, build, maintain and expand a dependable line.</p><div className="about-points"><div><strong>Process-first</strong><span>Built for the application</span></div><div><strong>Made in India</strong><span>Direct workshop oversight</span></div></div></div></section>

      <section className="contact" id="contact"><div><p className="eyebrow light"><span /> Project enquiries</p><h2>Let’s build the line<br />that moves your business.</h2><p>Share your product type, target capacity and available footprint. We’ll help define the right conveyor or custom machine approach.</p><div className="contact-direct"><a href="tel:+919952551805">Call: +91 99525 51805</a><a href="mailto:akengineeringscbe@gmail.com">akengineeringscbe@gmail.com</a></div></div><form><label>Name<input type="text" placeholder="Your name" /></label><label>Work email<input type="email" placeholder="name@company.com" /></label><label>Project requirement<textarea placeholder="Tell us what you need to move, sort or automate" rows={4} /></label><a className="button white" href="mailto:akengineeringscbe@gmail.com?subject=Website%20Enquiry%20for%20AK%20Engineering">Send enquiry <span>↗</span></a></form></section>

      <footer><div className="brand footer-brand"><img className="brand-logo footer-logo" src="/ak-engineering-logo-cropped.jpeg" alt="AK Engineering — Conveyors and Special Purpose Machines" /></div><div><strong>Workshop</strong><p>Pattanam Road, Sulur<br />Coimbatore, Tamil Nadu 641016</p></div><div><strong>Connect</strong><p><a href="tel:+919952551805">+91 99525 51805</a><br /><a href="mailto:akengineeringscbe@gmail.com">akengineeringscbe@gmail.com</a><br /><a className="instagram-link" href="https://www.instagram.com/akengineeringscbe?igsh=dTFkcnJidWd5bHlr" target="_blank" rel="noreferrer">Instagram ↗</a></p></div><p className="copyright">© 2026 AK Engineering</p></footer>
    </main>
  );
}
