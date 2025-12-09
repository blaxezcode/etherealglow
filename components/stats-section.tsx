"use client";

import { useEffect, useRef } from "react";

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            const counters = entry.target.querySelectorAll(".count-up");
            counters.forEach((counter) => {
              const target = +(
                (counter as HTMLElement).getAttribute("data-target") || 0
              );
              const duration = 2000;
              const increment = target / (duration / 16);
              let current = 0;

              const updateCount = () => {
                current += increment;
                if (current < target) {
                  (counter as HTMLElement).innerText =
                    Math.ceil(current) + (target > 50 ? "+" : "+");
                  requestAnimationFrame(updateCount);
                } else {
                  (counter as HTMLElement).innerText =
                    target + (target > 50 ? "+" : target === 8 ? "" : "+");
                }
              };
              updateCount();
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal-hidden");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 bg-ethereal-900 text-ethereal-100 relative"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 text-center divide-x divide-ethereal-700">
          <div className="reveal-hidden zoom-in hover-trigger p-2">
            <p
              className="font-display text-3xl md:text-4xl text-rose-gold mb-2 count-up"
              data-target="500"
            >
              0+
            </p>
            <p className="text-[10px] md:text-xs uppercase tracking-widest text-ethereal-300">
              Brides Styled
            </p>
          </div>
          <div className="reveal-hidden zoom-in delay-100 hover-trigger p-2">
            <p
              className="font-display text-3xl md:text-4xl text-rose-gold mb-2 count-up"
              data-target="15"
            >
              0+
            </p>
            <p className="text-[10px] md:text-xs uppercase tracking-widest text-ethereal-300">
              Magazine Covers
            </p>
          </div>
          <div className="reveal-hidden zoom-in delay-200 hover-trigger p-2">
            <p
              className="font-display text-3xl md:text-4xl text-rose-gold mb-2 count-up"
              data-target="8"
            >
              0
            </p>
            <p className="text-[10px] md:text-xs uppercase tracking-widest text-ethereal-300">
              Years Experience
            </p>
          </div>
          <div className="reveal-hidden zoom-in delay-300 hover-trigger p-2">
            <p className="font-display text-3xl md:text-4xl text-rose-gold mb-2">
              100%
            </p>
            <p className="text-[10px] md:text-xs uppercase tracking-widest text-ethereal-300">
              Satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
