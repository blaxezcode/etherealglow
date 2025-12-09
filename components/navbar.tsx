"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/magnetic-button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-500",
          "glass-nav",
          isScrolled ? "shadow-sm" : ""
        )}
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "flex justify-between items-center transition-all duration-300",
              isScrolled ? "h-16 md:h-20" : "h-20 md:h-24"
            )}
            id="nav-container"
          >
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center hover-trigger z-50">
              <Link href="#" className="flex flex-col items-center group">
                <span className="font-display text-xl md:text-3xl tracking-widest text-ethereal-900 group-hover:text-rose-gold transition duration-300">
                  ETHEREAL GLOW
                </span>
                <span className="font-serif text-[10px] md:text-sm tracking-[0.3em] text-ethereal-500 uppercase">
                  by Ishika
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 lg:space-x-10 items-center">
              {["Home", "Philosophy", "Portfolio", "Services"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-ethereal-800 hover:text-rose-gold transition text-xs uppercase tracking-[0.2em] font-medium hover-trigger relative group py-2"
                >
                  {item}
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-rose-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              <div className="magnetic-wrap hover-trigger">
                <MagneticButton
                  href="#contact"
                  className="px-6 py-3 bg-ethereal-900 text-ethereal-50 rounded-sm hover:bg-rose-gold transition duration-500 shadow-md text-xs uppercase tracking-[0.2em]"
                >
                  Book Ishika
                </MagneticButton>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center z-50">
              <button
                onClick={toggleMenu}
                className="text-ethereal-900 hover:text-rose-gold focus:outline-none p-2 hover-trigger"
                aria-label="Menu"
              >
                <i
                  className={cn("fas text-xl", isOpen ? "fa-times" : "fa-bars")}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 bg-ethereal-50/95 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center space-y-8 p-8 w-full">
          {["Home", "Philosophy", "Portfolio", "Services"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={toggleMenu}
              className="text-2xl font-serif text-ethereal-900 hover:text-rose-gold transition mobile-link"
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={toggleMenu}
            className="px-10 py-4 bg-ethereal-900 text-white text-sm uppercase tracking-widest mt-4 mobile-link shadow-lg w-full text-center max-w-xs"
          >
            Book Now
          </Link>
        </div>
        {/* Decorative Element in Menu */}
        <div className="absolute bottom-10 left-0 right-0 text-center opacity-30">
          <p className="font-display text-lg text-ethereal-900">
            ETHEREAL GLOW
          </p>
        </div>
      </div>
    </>
  );
}
