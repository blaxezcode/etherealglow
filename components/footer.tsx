"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ethereal-50 py-10 md:py-12 border-t border-ethereal-200 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="font-display text-xl md:text-2xl text-ethereal-900 mb-4 hover-trigger transform hover:scale-105 transition duration-300 lg:cursor-none">
          ETHEREAL GLOW
        </h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] md:text-xs uppercase tracking-widest text-gray-500 mb-6 md:mb-8">
          <Link href="#home" className="hover:text-ethereal-900 hover-trigger">
            Home
          </Link>
          <Link
            href="#services"
            className="hover:text-ethereal-900 hover-trigger"
          >
            Services
          </Link>
          <Link
            href="#portfolio"
            className="hover:text-ethereal-900 hover-trigger"
          >
            Portfolio
          </Link>
          <Link
            href="#contact"
            className="hover:text-ethereal-900 hover-trigger"
          >
            Contact
          </Link>
        </div>
        <p className="text-gray-400 text-[10px] md:text-xs text-center font-light">
          Designed for Ishika. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
