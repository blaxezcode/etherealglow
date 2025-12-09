"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  life: number;
}

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const requestRef = useRef<number>();

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(max-width: 1023px)").matches
    ) {
      return;
    }

    const cursor = cursorRef.current;
    let particleId = 0;

    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      if (cursor) {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
      }

      // Add glitter particles
      const newParticles: Particle[] = [];
      const count = 3; // Number of particles per move
      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: particleId++,
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          size: Math.random() * 3 + 1,
          color: Math.random() > 0.5 ? "#C5A059" : "#D4A5A5", // Gold and Rose
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          life: 1.0,
        });
      }

      setParticles((prev) => [...prev, ...newParticles].slice(-50)); // Limit total particles
    };

    const animateParticles = () => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.speedX,
            y: p.y + p.speedY,
            life: p.life - 0.02,
          }))
          .filter((p) => p.life > 0)
      );
      requestRef.current = requestAnimationFrame(animateParticles);
    };

    requestRef.current = requestAnimationFrame(animateParticles);
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
        @media (max-width: 1023px) {
          body {
            cursor: auto;
          }
          .custom-cursor-wrapper {
            display: none;
          }
        }
      `}</style>

      <div className="custom-cursor-wrapper pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
        {/* Glitter Particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: p.x,
              top: p.y,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              opacity: p.life,
              transform: "translate(-50%, -50%)",
              boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            }}
          />
        ))}

        {/* Icon Cursor */}
        <div
          ref={cursorRef}
          className="absolute text-rose-gold text-2xl drop-shadow-md transition-transform duration-100 ease-out"
          style={{ transform: "translate(-50%, -50%) rotate(-45deg)" }}
        >
          <i className="fas fa-paintbrush"></i>
        </div>
      </div>
    </>
  );
}
