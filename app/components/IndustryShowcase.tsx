"use client";

import { useEffect, useState } from "react";

const industryModels = [
  { number: "01", title: "Food & Beverage", photo: "/industries/food-beverage.webp", environment: "Hygienic production", focus: "Food-safe conveying", need: "Clean, continuous flow" },
  { number: "02", title: "Packaging", photo: "/industries/packaging.webp", environment: "Packing & dispatch", focus: "Line integration", need: "Accurate product transfer" },
  { number: "03", title: "Automotive", photo: "/industries/automotive.webp", environment: "Component assembly", focus: "Rugged material handling", need: "Repeatable line movement" },
  { number: "04", title: "Pharmaceutical", photo: "/industries/pharmaceutical.webp", environment: "Controlled production", focus: "Hygienic automation", need: "Precision & traceability" },
  { number: "05", title: "Warehousing", photo: "/industries/warehousing.webp", environment: "Sorting & fulfilment", focus: "High-throughput movement", need: "Reliable dispatch flow" },
  { number: "06", title: "General Engineering", photo: "/industries/general-engineering.webp", environment: "Industrial production", focus: "Custom automation", need: "Built-to-order systems" },
];

export function IndustryShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = industryModels[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveIndex((current) => (current + 1) % industryModels.length),
      4800,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="industry-showcase">
      <div className="industry-display">
        <div className="industry-display-head">
          <span>Industry / {activeIndustry.number}</span>
          <span className="industry-live"><i /> Application showcase</span>
        </div>

        <div className="industry-visual">
          <img key={activeIndustry.photo} src={activeIndustry.photo} alt={`${activeIndustry.title} production environment`} />
          <div className="industry-caption"><small>INDUSTRIES WE SERVE</small><strong>{activeIndustry.title}</strong></div>
          <div className="industry-dots" aria-label="Choose an industry">
            {industryModels.map((industry, index) => (
              <button key={industry.title} type="button" className={index === activeIndex ? "active" : ""} onClick={() => setActiveIndex(index)} aria-label={`Show ${industry.title}`} aria-pressed={index === activeIndex} />
            ))}
          </div>
        </div>

        <div className="industry-spec-grid">
          <div><small>ENVIRONMENT</small><strong>{activeIndustry.environment}</strong></div>
          <div><small>ENGINEERING FOCUS</small><strong>{activeIndustry.focus}</strong></div>
          <div><small>PRODUCTION NEED</small><strong>{activeIndustry.need}</strong></div>
          <div><small>AK APPROACH</small><strong>Application-led design</strong></div>
        </div>
      </div>

      <div className="industry-selector">
        {industryModels.map((industry, index) => (
          <button key={industry.title} type="button" className={index === activeIndex ? "active" : ""} onClick={() => setActiveIndex(index)}>
            <span>{industry.number}</span><strong>{industry.title}</strong><i>↗</i>
          </button>
        ))}
      </div>
    </div>
  );
}
