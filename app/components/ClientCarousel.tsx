"use client";

import { useRef } from "react";

const clients = [
  ["Emerald", "/clients/emerald.png"],
  ["Golden Spices", "/clients/golden-spices.png"],
  ["Alphacraft", "/clients/alphacraft.png"],
  ["Poomagal", "/clients/poomagal.png"],
];

export function ClientCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const move = (direction: number) => track.current?.scrollBy({ left: direction * Math.min(track.current.clientWidth * .72, 360), behavior: "smooth" });

  return <div className="client-carousel">
    <button type="button" className="client-control client-prev" onClick={() => move(-1)} aria-label="Previous clients">‹</button>
    <div className="client-track" ref={track}>
      {clients.map(([name, logo]) => <article key={name}>
        <div className="client-logo-circle"><img src={logo} alt={`${name} logo`} /></div>
        <strong>{name}</strong>
      </article>)}
    </div>
    <button type="button" className="client-control client-next" onClick={() => move(1)} aria-label="Next clients">›</button>
  </div>;
}
