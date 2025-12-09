"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MagneticButton } from "@/components/magnetic-button";
import { motion, Variants } from "framer-motion";

export function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollPosition = window.scrollY;
        if (scrollPosition < window.innerHeight) {
          bgRef.current.style.transform = `translateY(${
            scrollPosition * 0.4
          }px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          ref={bgRef}
          id="hero-bg"
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
        >
          <Image
            src="/assets/v3-hero.png"
            alt="Ethereal Beauty"
            fill
            className="object-cover opacity-90 transition-transform duration-[2s] ease-out scale-110"
            onLoad={(e) => {
              const img = e.target as HTMLImageElement;
              img.classList.remove("scale-110");
              img.classList.add("scale-100");
            }}
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKfqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKAP/2Q=="
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ethereal-100/95 via-ethereal-100/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 md:pt-20">
        <div className="w-full md:w-3/5 lg:w-1/2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={fadeUpVariant}
            viewport={{ once: true }}
            className="inline-block border-b border-rose-gold pb-2 mb-4 md:mb-6"
          >
            <p className="text-rose-gold font-sans font-bold tracking-[0.25em] text-[10px] md:text-xs uppercase">
              Professional Artistry
            </p>
          </motion.div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl text-ethereal-900 mb-6 md:mb-8 leading-[0.95] md:leading-[0.9]">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="block"
            >
              Timeless
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="block italic font-light text-ethereal-500"
            >
              Elegance
            </motion.span>
          </h1>

          <motion.p
            initial="hidden"
            whileInView="visible"
            custom={4}
            variants={fadeUpVariant}
            viewport={{ once: true }}
            className="text-ethereal-800 text-base md:text-xl font-light mb-8 md:mb-10 leading-relaxed max-w-sm md:max-w-lg font-serif"
          >
            Enhancing your natural radiance with refined techniques and luxury
            skincare. Creating the perfect "Ethereal Glow" for your most
            cherished moments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col xs:flex-row gap-4 md:gap-6 w-full xs:w-auto"
          >
            <div className="magnetic-wrap hover-trigger w-full xs:w-auto">
              <MagneticButton
                href="#contact"
                className="group relative px-8 py-4 bg-ethereal-900 text-ethereal-50 overflow-hidden shadow-lg transition-all hover:shadow-xl w-full xs:w-auto block text-center"
              >
                <div className="absolute inset-0 w-0 bg-rose-gold transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-xs uppercase tracking-[0.2em] group-hover:text-white">
                  Reserve Date
                </span>
              </MagneticButton>
            </div>
            <div className="magnetic-wrap hover-trigger w-full xs:w-auto">
              <MagneticButton
                href="#portfolio"
                className="block text-center px-8 py-4 bg-transparent border border-ethereal-900 text-ethereal-900 hover:bg-ethereal-900 hover:text-white transition duration-300 text-xs uppercase tracking-[0.2em] w-full xs:w-auto"
              >
                View Gallery
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hover-trigger cursor-pointer hidden sm:block"
      >
        <span className="text-ethereal-900 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <i className="fas fa-chevron-down text-ethereal-900 mt-2 block text-center"></i>
      </motion.div>
    </section>
  );
}
