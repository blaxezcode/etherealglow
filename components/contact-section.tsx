"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/magnetic-button";
import { motion } from "framer-motion";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-ethereal-50 shadow-2xl overflow-hidden flex flex-col md:flex-row rounded-sm"
        >
          {/* Info Side */}
          <div className="w-full md:w-5/12 bg-ethereal-900 text-ethereal-100 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 transition-transform duration-1000 group-hover:scale-110"></div>

            <div className="relative z-10">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
                Book Your Date
              </h3>
              <p className="text-ethereal-300 font-light mb-8 md:mb-12 text-sm md:text-base">
                Limited availability for 2024/2025.
              </p>

              <div className="space-y-6 md:space-y-8">
                <div className="hover-trigger">
                  <p className="text-xs uppercase tracking-widest text-rose-gold mb-1">
                    Studio
                  </p>
                  <p className="font-serif text-lg md:text-xl">
                    Fashion District, Mumbai
                  </p>
                </div>
                <div className="hover-trigger">
                  <p className="text-xs uppercase tracking-widest text-rose-gold mb-1">
                    Email
                  </p>
                  <p className="font-serif text-lg md:text-xl break-all">
                    bookings@etherealglow.com
                  </p>
                </div>
                <div className="hover-trigger">
                  <p className="text-xs uppercase tracking-widest text-rose-gold mb-1">
                    Social
                  </p>
                  <div className="flex space-x-4 mt-2">
                    <a
                      href="#"
                      className="hover:text-rose-gold transition transform hover:scale-110"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="#"
                      className="hover:text-rose-gold transition transform hover:scale-110"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a
                      href="#"
                      className="hover:text-rose-gold transition transform hover:scale-110"
                    >
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 md:mt-12">
              <p className="text-[10px] md:text-xs text-ethereal-400">
                © 2023 Ethereal Glow by Ishika
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full md:w-7/12 p-6 md:p-12 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group hover-trigger">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-ethereal-900 transition">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border-b border-gray-300 py-3 text-ethereal-900 focus:border-ethereal-900 focus:outline-none transition-colors text-sm md:text-base"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="group hover-trigger">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-ethereal-900 transition">
                    Event Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-white border-b border-gray-300 py-3 text-gray-500 focus:border-ethereal-900 focus:outline-none transition-colors text-sm md:text-base"
                  />
                </div>
              </div>

              <div className="group hover-trigger">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-ethereal-900 transition">
                  Service Type
                </label>
                <select className="w-full bg-white border-b border-gray-300 py-3 text-ethereal-900 focus:border-ethereal-900 focus:outline-none transition-colors text-sm md:text-base">
                  <option>Bridal Makeup</option>
                  <option>Roka / Engagement</option>
                  <option>Party Makeup</option>
                  <option>Editorial / Commercial</option>
                </select>
              </div>

              <div className="group hover-trigger">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-ethereal-900 transition">
                  Your Message
                </label>
                <textarea
                  rows={3}
                  className="w-full bg-white border-b border-gray-300 py-3 text-ethereal-900 focus:border-ethereal-900 focus:outline-none transition-colors text-sm md:text-base"
                  placeholder="Tell me about your vision..."
                ></textarea>
              </div>

              <div className="magnetic-wrap hover-trigger">
                <MagneticButton
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  style={isSuccess ? { backgroundColor: "#5E4B3E" } : {}}
                  className={cn(
                    "mt-4 px-10 py-4 bg-ethereal-900 text-white font-medium uppercase tracking-[0.2em] text-xs hover:bg-rose-gold transition duration-300 w-full md:w-auto shadow-lg",
                    (isSubmitting || isSuccess) &&
                      "opacity-80 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loader inline-block w-3 h-3 md:w-4 md:h-4 border-2 rounded-full mr-2"></span>
                      Sending...
                    </>
                  ) : isSuccess ? (
                    "Inquiry Sent Successfully"
                  ) : (
                    "Send Inquiry"
                  )}
                </MagneticButton>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
