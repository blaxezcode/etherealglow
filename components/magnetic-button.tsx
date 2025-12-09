"use client";

import { useRef, useEffect, ReactNode, CSSProperties } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  style?: CSSProperties;
}

export function MagneticButton({
  children,
  href,
  className,
  onClick,
  type = "button",
  disabled,
  style,
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    if (window.matchMedia("(max-width: 1023px)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Magnetic strength
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };

    const handleMouseLeave = () => {
      btn.style.transform = "translate(0px, 0px)";
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const commonProps = {
    ref: btnRef as any,
    className: cn("magnetic-btn inline-block", className),
    onMouseEnter: () => document.body.classList.add("hovering"),
    onMouseLeave: () => document.body.classList.remove("hovering"),
    style,
  };

  if (href) {
    return (
      <Link href={href} {...commonProps}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} {...commonProps}>
      {children}
    </button>
  );
}
