"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

const MotionLink = motion(Link);

// Authentic pilgrim reviews database
const testimonials = [
  {
    quote: "Alhamdulillah! Our Haj journey with Ateeq Haj Tours was absolutely seamless and deeply spiritual. Under the excellent guidance of Mr. B S Maqbool and his team, the hotel arrangements near the Haram and private luxury transport made it extremely comfortable. Highly recommended!",
    name: "Mohammed Irfan",
    info: "Haj 2024 Pilgrim",
    rating: 5
  },
  {
    quote: "The Umrah package provided by Ateeq Travels was outstanding. Every detail from the visa process, 5-star hotel check-ins, to the guided Ziyarat tours in Madinah and Makkah was executed perfectly. Jazakallah Khair to the entire hospitable team.",
    name: "Abdullah Al-Rahman",
    info: "Premium Umrah Package",
    rating: 5
  },
  {
    quote: "Excellent service by this agency. They are extremely professional, transparent with all details, and provide great family-friendly guidance. The pre-departure training session was incredibly helpful for first-timers.",
    name: "Syed Farhan",
    info: "Haj & Umrah Pilgrim",
    rating: 5
  },
  {
    quote: "A truly five-star experience! From Infantry Road Bangalore to Makkah and Madinah, we felt completely cared for. The scholars traveling with us provided deep spiritual guidance at every step. Will definitely travel with them again.",
    name: "Aisha Siddiqua",
    info: "Umrah 2025 Pilgrim",
    rating: 5
  }
];

export default function TestimonialsGallery() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-cream-50 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.04, 0.08, 0.04]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[850px] h-[850px] bg-navy-900/5 rounded-full blur-[130px] pointer-events-none"
      />
      
      <motion.div 
        className="container mx-auto px-6 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Asymmetric Split Grid */}
        <div className="grid lg:grid-cols-[1.1fr_2fr] gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Testimonial Auto Slider */}
          <div className="flex flex-col w-full">
            <h3 className="text-xl md:text-2xl font-playfair font-bold text-navy-900 mb-6 tracking-tight">
              What Our Pilgrims Say
            </h3>
            
            {/* Premium Testimonial Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0b1b26] to-[#040e14] border border-gold-500/15 rounded-3xl p-8 relative shadow-2xl flex flex-col justify-between overflow-hidden min-h-[380px] lg:min-h-[420px]"
            >
              {/* Backlight Glow inside Card */}
              <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-gold-500/5 rounded-full blur-[50px] pointer-events-none" />

              {/* Decorative Quotes Background */}
              <div className="absolute top-6 left-6 text-gold-500/10 text-8xl font-serif leading-none select-none pointer-events-none">
                &ldquo;
              </div>
              
              {/* Sliding Content */}
              <div className="relative z-10 flex-grow flex flex-col justify-between h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col justify-between flex-grow h-full"
                  >
                    {/* Testimonial Quote */}
                    <div className="pt-6">
                      <p className="text-[13px] md:text-[14px] text-white/90 leading-relaxed italic font-medium">
                        "{testimonials[activeTestimonial].quote}"
                      </p>
                    </div>
                    
                    {/* Pilgrim Stack Info */}
                    <div className="pt-6 mt-6 border-t border-white/10 flex flex-col gap-2">
                      <div className="flex gap-0.5 text-gold-500">
                        {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                          <Star key={i} size={11} fill="currentColor" className="stroke-none" />
                        ))}
                      </div>
                      <div>
                        <h4 className="font-bold text-islamic-green text-sm tracking-wide">
                          {testimonials[activeTestimonial].name}
                        </h4>
                        <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wider mt-0.5">
                          {testimonials[activeTestimonial].info}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-8 relative z-10">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeTestimonial === idx 
                        ? "w-5 bg-gold-500" 
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Moments Grid */}
          <div className="flex flex-col w-full">
            <h3 className="text-xl md:text-2xl font-playfair font-bold text-navy-900 mb-6 tracking-tight">
              Moments That Last Forever
            </h3>
            
            {/* Gallery Grid (Locked Portrait Aspect Ratios) */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 h-auto">
              {[
                "/images/kaaba.png",
                "/images/madinah.png",
                "/images/gallery-1.png",
                "/images/gallery-3.png"
              ].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-[3/4] shadow-lg border border-navy-900/5 bg-white"
                >
                  <Image 
                    src={src} 
                    alt="Pilgrimage gallery image" 
                    fill 
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-navy-900/15 group-hover:bg-transparent transition-colors duration-300" />
                </motion.div>
              ))}
              
              {/* Responsive Link Card */}
              <MotionLink
                href="/gallery"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="col-span-2 md:col-span-1 aspect-[2.2/1] md:aspect-[3/4] bg-gradient-to-br from-[#0b1b26] to-[#040e14] border border-gold-500/15 rounded-2xl flex flex-row md:flex-col items-center justify-center gap-5 md:gap-3 cursor-pointer hover:bg-navy-900 transition-all duration-300 group shadow-lg px-6 md:px-2 text-center"
              >
                {/* Rotating Pattern Icon */}
                <div className="w-10 h-10 border border-gold-500/30 rounded-lg flex items-center justify-center text-gold-500 group-hover:scale-110 transition-transform duration-300 bg-white/5 shrink-0">
                  <Image src="/images/pattern.png" alt="emblem" width={20} height={20} className="opacity-60 animate-[spin_40s_linear_infinite]" />
                </div>
                
                {/* Card Text & Arrow */}
                <div className="flex flex-col md:items-center text-left md:text-center pt-0.5">
                  <div className="text-gold-500 font-extrabold text-[11px] uppercase tracking-wider leading-tight">
                    View All<br className="hidden md:inline" /> Photos
                  </div>
                  <ArrowRight size={14} className="text-gold-500 mt-1 md:mt-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </MotionLink>
            </div>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}
