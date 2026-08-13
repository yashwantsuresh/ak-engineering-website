"use client";

import { useEffect, useState } from "react";

export function InteractionLayer() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealTargets = document.querySelectorAll("main section, main article, main .content-grid, main .catalogue-grid, main .profile-intro, main .profile-stats, main .industry-showcase, footer > *");
    revealTargets.forEach((element) => element.classList.add("reveal-item"));
    if (reduced) revealTargets.forEach((element) => element.classList.add("is-visible"));
    else {
      const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }), { threshold: 0.08, rootMargin: "0px 0px -45px" });
      revealTargets.forEach((element) => observer.observe(element));
      const update = () => {
        const available = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(available > 0 ? (window.scrollY / available) * 100 : 0);
        setShowTop(window.scrollY > 520);
      };
      update();
      window.addEventListener("scroll", update, { passive: true });
      return () => { observer.disconnect(); window.removeEventListener("scroll", update); };
    }
  }, []);

  return <>
    <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />
    <button className={`back-to-top${showTop ? " visible" : ""}`} type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">↑</button>
  </>;
}
