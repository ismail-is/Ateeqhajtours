"use client";

import { motion } from "framer-motion";
import { PlaneTakeoff, BookOpen, Users, ClipboardList, PlaneLanding, Building } from "lucide-react";

const steps = [
  { icon: <PlaneTakeoff size={28} className="text-navy-900" strokeWidth={1.5} />, title: "Registration", desc: "Easy & simple\nregistration process" },
  { icon: <ClipboardList size={28} className="text-navy-900" strokeWidth={1.5} />, title: "Documentation & Visa", desc: "Complete assistance\nfor visa & documents" },
  { icon: <Users size={28} className="text-navy-900" strokeWidth={1.5} />, title: "Training & Guidance", desc: "Pre-departure training\n& guidance" },
  { icon: <Building size={28} className="text-navy-900" strokeWidth={1.5} />, title: "Departure", desc: "Comfortable flights\n& transportation" },
  { icon: <BookOpen size={28} className="text-navy-900" strokeWidth={1.5} />, title: "Haj / Umrah Perform", desc: "Spiritual guidance\nduring your journey" },
  { icon: <PlaneLanding size={28} className="text-navy-900" strokeWidth={1.5} />, title: "Return", desc: "Safe return with\nbeautiful memories" },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <motion.div 
        className="container mx-auto px-6 relative z-10"
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-islamic-green font-bold text-[10px] tracking-[0.2em] uppercase mb-3"
          >
            Your Journey, Our Responsibility
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-playfair font-bold text-navy-900"
          >
            Our Hassle-Free Process
          </motion.h2>
        </div>

        <div className="relative mt-20">
          {/* Connecting Dotted Line */}
          <div className="hidden lg:block absolute top-[40px] left-[5%] right-[5%] border-t-2 border-dashed border-gold-500/40 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Icon Circle */}
                <div className="w-20 h-20 bg-white rounded-full flex flex-col items-center justify-center border-[1px] border-gray-200 shadow-[0_0_15px_rgba(0,0,0,0.03)] mb-4 relative group-hover:border-gold-500 transition-colors bg-gradient-to-b from-white to-gray-50">
                  {step.icon}
                  {/* Step Number Badge */}
                  <div className="absolute -bottom-3 w-6 h-6 bg-islamic-green text-navy-900 rounded-full flex items-center justify-center font-bold text-[11px] border-2 border-white shadow-sm">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-[13px] font-bold text-navy-900 mt-2 mb-1.5 leading-tight px-2">{step.title}</h3>
                <p className="text-[10px] text-gray-500 leading-snug whitespace-pre-line px-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
