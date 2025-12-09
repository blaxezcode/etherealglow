"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ServicesSection() {
  const services = [
    {
      title: "Bridal",
      desc: "Bespoke bridal artistry designed to enhance your natural beauty. Includes a comprehensive consultation and trial to ensure perfection on your special day.",
      price: "Starts at ₹25,000",
      img: "/assets/portfolio_bridal_1.png",
    },
    {
      title: "Editorial",
      desc: "High-definition, camera-ready makeup for fashion shoots, campaigns, and media appearances. Focusing on longevity and flawless texture.",
      price: "On Request",
      img: "/assets/portfolio_editorial_1.png",
    },
    {
      title: "Occasion",
      desc: "Sophisticated glam for red carpet events, galas, and parties. A long-wearing, photogenic finish that turns heads.",
      price: "Starts at ₹15,000",
      img: "/assets/portfolio_bw_portrait.png",
    },
    {
      title: "Workshops",
      desc: "Learn the art of self-application or professional techniques. One-on-one and group masterclasses available.",
      price: "Starts at ₹10,000",
      img: "/assets/portfolio_texture_1.png",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-ethereal-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-rose-gold text-xs font-bold tracking-[0.2em] uppercase block mb-3">
            Expertise
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-ethereal-900">
            Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 md:p-10 shadow-sm hover:shadow-xl transition-shadow duration-500 group border border-transparent hover:border-rose-gold/20"
            >
              <div className="h-12 w-12 bg-ethereal-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-rose-gold group-hover:text-white transition-colors duration-500 text-ethereal-900">
                <i className="fas fa-star text-sm"></i>
              </div>
              <h3 className="font-serif text-2xl text-ethereal-900 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
                {service.desc}
              </p>
              <div className="pt-6 border-t border-gray-100">
                <span className="text-xs font-bold text-rose-gold tracking-widest uppercase">
                  {service.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
