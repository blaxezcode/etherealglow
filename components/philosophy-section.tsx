"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="py-16 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Floating Elements */}
      <div className="hidden md:block absolute top-20 right-0 w-64 h-64 bg-ethereal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
      <div
        className="hidden md:block absolute bottom-20 left-10 w-48 h-48 bg-rose-accent/20 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image Grid */}
          <div className="order-2 md:order-1 relative px-4 md:px-0">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mt-8 md:mt-12 img-card rounded-sm hover-trigger aspect-[3/4]"
              >
                <Image
                  src="/assets/v3-detail.png"
                  alt="Makeup Detail"
                  width={400}
                  height={600}
                  className="shadow-lg object-cover w-full h-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="img-card rounded-sm hover-trigger aspect-[3/4]"
              >
                <Image
                  src="/assets/v3-artist.png"
                  alt="Ishika Artist"
                  width={400}
                  height={600}
                  className="shadow-lg object-cover w-full h-full"
                />
              </motion.div>
            </div>
            {/* Decor element */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] md:w-[120%] h-[90%] md:h-[80%] border border-ethereal-200"
            ></motion.div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-rose-gold text-xs font-bold tracking-[0.2em] uppercase block"
            >
              The Artist
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl md:text-6xl text-ethereal-900 mt-2 md:mt-4 mb-6 md:mb-8"
            >
              Meet <span className="italic text-ethereal-500">Ishika</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-600 mb-6 leading-relaxed font-light text-base md:text-lg"
            >
              My philosophy is rooted in the belief that makeup should never
              feel like a mask. It is a tool of empowerment, designed to reveal
              the most radiant version of yourself.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-600 mb-8 md:mb-10 leading-relaxed font-light text-base md:text-lg"
            >
              Specializing in{" "}
              <span className="font-medium text-ethereal-800">
                soft-glam bridal
              </span>{" "}
              and{" "}
              <span className="font-medium text-ethereal-800">
                high-definition editorial
              </span>
              looks, I use a skin-first approach. By focusing on hydration and
              light reflection, I create that signature "Ethereal Glow."
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center md:justify-start gap-4"
            >
              <div className="h-px w-8 md:w-12 bg-ethereal-400"></div>
              <p className="font-display text-xl md:text-2xl text-ethereal-900">
                Ishika .
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
