"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Tag, Users, Briefcase } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={32} className="text-gold-500" strokeWidth={1.5} />,
    title: "Ministry Approved",
    description: "Approved by Ministry of Haj Government of India",
  },
  {
    icon: <Tag size={32} className="text-gold-500" strokeWidth={1.5} />,
    title: "Best Price Guarantee",
    description: "Affordable Packages with Best Services",
  },
  {
    icon: <Users size={32} className="text-islamic-green" strokeWidth={1.5} />,
    title: "Experienced Team",
    description: "Professional & Dedicated Support Staff",
  },
  {
    icon: <Briefcase size={32} className="text-islamic-green" strokeWidth={1.5} />,
    title: "Everything Included",
    description: "Flights, Visa, Store",
  },
];

export default function Trust() {
  return (
    <section className="bg-[#0b1b26] border-t border-b border-white/10 relative z-20 overflow-hidden">
      <motion.div 
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 py-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 py-4 md:py-2 px-4 group"
            >
              <div className="shrink-0 transition-transform group-hover:scale-110 duration-300">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-white mb-1">
                  {feature.title}
                </h3>
                <p className="text-[11px] text-white/60 leading-tight">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
