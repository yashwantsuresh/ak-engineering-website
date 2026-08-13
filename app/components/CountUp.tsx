"use client";
import { useEffect, useRef, useState } from "react";

export function CountUp({ target, suffix = "+" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLElement>(null);
  const [value, setValue] = useState(0);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const started = performance.now();
      const duration = 1250;
      const tick = (now: number) => {
        const progress = Math.min((now - started) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: .55 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [target]);
  return <strong ref={ref}>{value}{suffix}</strong>;
}
