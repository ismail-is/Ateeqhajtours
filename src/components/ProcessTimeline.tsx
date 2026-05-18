"use client";

import { motion } from "framer-motion";
import { PlaneTakeoff, BookOpen, Users, ClipboardList, PlaneLanding, Building } from "lucide-react";

const steps = [
  { 
    icon: <PlaneTakeoff size={28} className="text-navy-900 group-hover:text-gold-500 group-hover:scale-110 transition-all duration-300" strokeWidth={1.5} />, 
    title: "Registration", 
    desc: "Easy & simple\nregistration process" 
  },
  { 
    icon: <ClipboardList size={28} className="text-navy-900 group-hover:text-gold-500 group-hover:scale-110 transition-all duration-300" strokeWidth={1.5} />, 
    title: "Documentation & Visa", 
    desc: "Complete assistance\nfor visa & documents" 
  },
  { 
    icon: <Users size={28} className="text-navy-900 group-hover:text-gold-500 group-hover:scale-110 transition-all duration-300" strokeWidth={1.5} />, 
    title: "Training & Guidance", 
    desc: "Pre-departure training\n& guidance" 
  },
  { 
    icon: <Building size={28} className="text-navy-900 group-hover:text-gold-500 group-hover:scale-110 transition-all duration-300" strokeWidth={1.5} />, 
    title: "Departure", 
    desc: "Comfortable flights\n& transportation" 
  },
  { 
    icon: <BookOpen size={28} className="text-navy-900 group-hover:text-gold-500 group-hover:scale-110 transition-all duration-300" strokeWidth={1.5} />, 
    title: "Haj / Umrah Perform", 
    desc: "Spiritual guidance\nduring your journey" 
  },
  { 
    icon: <PlaneLanding size={28} className="text-navy-900 group-hover:text-gold-500 group-hover:scale-110 transition-all duration-300" strokeWidth={1.5} />, 
    title: "Return", 
    desc: "Safe return with\nbeautiful memories" 
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 md:py-28 bg-[#fafaf9] relative overflow-hidden">
      
      {/* 1. Infinite Slow-Scrolling Islamic Pattern Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.035,
          backgroundPosition: ["0px 0px", "120px 120px"],
        }}
        transition={{ 
          opacity: { duration: 1.2 },
          backgroundPosition: { duration: 32, repeat: Infinity, ease: "linear" }
        }}
        style={{
          backgroundImage: "url('/images/pattern.png')",
          backgroundSize: "280px 280px",
        }}
        className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay"
      />

      {/* 2. Soft Gold Floating Light Orb */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.22, 0.12],
          y: [0, 15, 0]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-10%] top-[10%] w-[40%] h-[40%] rounded-full bg-gold-500/10 blur-[130px] pointer-events-none z-0"
      />

      {/* 3. Soft Green Floating Light Orb */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.18, 0.1],
          y: [0, -20, 0]
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[-10%] bottom-[5%] w-[40%] h-[40%] rounded-full bg-islamic-green/10 blur-[130px] pointer-events-none z-0"
      />

      {/* Main Container */}
      <motion.div 
        className="container mx-auto px-6 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 font-bold text-[10px] tracking-[0.25em] uppercase mb-3.5"
          >
            Your Journey, Our Responsibility
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-playfair font-bold text-navy-900 leading-tight"
          >
            Our Hassle-Free Process
          </motion.h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4 rounded-full opacity-60" />
        </div>

        {/* Timeline Sequence Box */}
        <div className="relative mt-8 md:mt-16 max-w-lg lg:max-w-none mx-auto">
          
          {/* Connecting Line - Desktop Layout (Horizontal) */}
          <div className="hidden lg:block absolute top-[40px] left-[8%] right-[8%] border-t-2 border-dashed border-gold-500/25 z-0" />

          {/* Connecting Line - Mobile Layout (Vertical) */}
          <div className="lg:hidden absolute left-[40px] top-12 bottom-12 w-px border-l-2 border-dashed border-gold-500/25 z-0" />

          {/* Steps Wrapper */}
          <div className="flex flex-col lg:grid lg:grid-cols-6 gap-10 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-row lg:flex-col items-center lg:items-center text-left lg:text-center gap-6 lg:gap-4.5 relative group"
              >
                {/* Icon Circle Container */}
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] shrink-0 relative group-hover:border-gold-500 group-hover:shadow-[0_8px_30px_rgba(238,176,18,0.18)] transition-all duration-500 bg-gradient-to-b from-white to-gray-50/50 z-10">
                  {step.icon}
                  
                  {/* Step Number Badge */}
                  <div className="absolute bottom-0 right-0 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 lg:-bottom-3 w-6 h-6 bg-islamic-green text-navy-900 rounded-full flex items-center justify-center font-bold text-[11px] border-2 border-white shadow-sm transition-all duration-300 group-hover:bg-gold-500 group-hover:scale-110">
                    {index + 1}
                  </div>
                </div>
                
                {/* Step Details Text */}
                <div className="flex-grow lg:flex-grow-0 pt-1 lg:pt-0">
                  <h3 className="text-base lg:text-[13px] font-bold text-navy-900 mb-1 lg:mb-2 leading-tight group-hover:text-gold-500 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-xs lg:text-[10px] text-gray-500 leading-relaxed lg:leading-snug whitespace-pre-line font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
