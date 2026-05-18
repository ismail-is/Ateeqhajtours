"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, HeadphonesIcon, Award, Users, ShieldCheck } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    image: "/images/kaaba.png",
    subtitle: "A Journey of Faith",
    titleLine1: "Your Sacred",
    titleLine2: "Journey Begins",
    titleSuffix: "Here",
    description: "We provide exceptional Haj & Umrah services with comfort, care, and complete guidance to make your spiritual journey memorable.",
    badgeColor: "text-gold-500",
  },
  {
    image: "/images/madinah.png",
    subtitle: "Spiritual Excellence",
    titleLine1: "Experience Peace",
    titleLine2: "In Al-Madinah",
    titleSuffix: "Al-Munawwarah",
    description: "Walk in the footsteps of the Prophet (PBUH) with premium hotel arrangements and deeply knowledgeable local guides.",
    badgeColor: "text-islamic-green",
  },
  {
    image: "/images/makkah.png",
    subtitle: "Luxury Hajj & Umrah",
    titleLine1: "Elite Sanctuary",
    titleLine2: "Accommodations",
    titleSuffix: "Near Kaaba",
    description: "Immerse yourself in divine worship while we manage all five-star accommodations, visa logistics, and luxury transfers.",
    badgeColor: "text-gold-500",
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted on client load
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    if (!isMounted) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isMounted]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 lg:py-0 overflow-hidden bg-navy-900">
      
      {/* 1. Animated Background Image Slider (True Crossfade) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-navy-900">
        {!isMounted ? (
          // Static, instant above-the-fold image for 100% LCP performance during SSR and hydration
          <Image
            src={slides[0].image}
            alt="Sacred Sanctuary"
            fill
            priority
            className="object-cover opacity-55"
          />
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.55, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={slides[currentSlide].image}
                alt="Sacred Sanctuary"
                fill
                priority={currentSlide === 0}
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        )}
        
        {/* Dynamic Dark Gradients for Content Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/75 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-90 z-10" />
      </div>

      {/* 2. Repeating Islamic Geometric Pattern with Infinite Floating Motion */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.07,
          backgroundPosition: ["0px 0px", "100px 100px"],
        }}
        transition={{ 
          opacity: { duration: 1.2 },
          backgroundPosition: { duration: 24, repeat: Infinity, ease: "linear" }
        }}
        style={{
          backgroundImage: "url('/images/pattern.png')",
          backgroundSize: "280px 280px",
        }}
        className="absolute inset-0 z-2 pointer-events-none mix-blend-overlay"
      />

      {/* Subtle animated ambient gold glow orb */}
      <motion.div 
        animate={{ 
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] rounded-full bg-gold-500/15 blur-[130px] pointer-events-none z-2"
      />

      {/* Main Responsive Layout */}
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-8 items-center min-h-[85vh]">
        
        {/* Left Content Column */}
        <div className="max-w-2xl pt-6 lg:pt-16 flex flex-col justify-center h-full">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col"
            >
              {/* Badge Tagline */}
              <div>
                <span className="inline-flex items-center mt-16 gap-2 px-4.5 py-1.5 rounded-full bg-navy-900/60 border border-white/10 text-gold-500 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase mb-6 sm:mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(238,176,18,0.08)]">
                  <motion.span 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="text-gold-500 inline-block text-[9px]"
                  >
                    ✦
                  </motion.span>
                  {slides[currentSlide].subtitle}
                  <motion.span 
                    animate={{ rotate: -360 }} 
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="text-gold-500 inline-block text-[9px]"
                  >
                    ✦
                  </motion.span>
                </span>
              </div>

              {/* Dynamic Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.8rem] font-playfair font-bold text-white leading-[1.1] md:leading-[1.05] mb-5 sm:mb-6">
                {slides[currentSlide].titleLine1} <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-islamic-green via-gold-500 to-islamic-green bg-[length:200%_auto] inline-block animate-[gradientShift_8s_linear_infinite]">
                  {slides[currentSlide].titleLine2}
                </span>{" "}
                <br className="hidden sm:block" />
                <span>{slides[currentSlide].titleSuffix}</span>
              </h1>

              {/* Description */}
              <p className="text-white/80 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 leading-relaxed max-w-lg font-light">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#packages"
              className="flex items-center justify-center gap-2 bg-islamic-green hover:bg-[#c5e063] text-navy-900 px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_30px_rgba(178,210,53,0.2)] hover:shadow-[0_0_40px_rgba(178,210,53,0.4)] text-sm group w-full sm:w-auto cursor-pointer"
            >
              Explore Packages
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/918197593479"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-navy-900/50 border border-gold-500/40 text-gold-500 px-8 py-4 rounded-xl font-bold transition-all hover:bg-gold-500 hover:text-navy-900 text-sm backdrop-blur-md group w-full sm:w-auto cursor-pointer"
            >
              <HeadphonesIcon size={18} className="group-hover:animate-pulse text-gold-500 group-hover:text-navy-900" />
              Talk to Advisor
            </motion.a>
          </motion.div>

          {/* Manual Slide Indicators / Controllers */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-3 mt-12 sm:mt-16 z-10"
          >
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                  currentSlide === index 
                    ? "w-8 bg-islamic-green" 
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>

        </div>

        {/* Right Column - Interactive Stats Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:justify-self-end w-full flex justify-center lg:block mt-8 lg:mt-0"
        >
          {/* Subtle floating animation wrapper */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="bg-[#0a1821]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 w-full max-w-[360px] shadow-2xl relative overflow-hidden"
          >
            {/* Glossy highlight effect on top border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
            
            {/* Glowing inner background orb */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-islamic-green/10 blur-[90px] rounded-full" />
            
            <div className="flex flex-col gap-6 md:gap-8 relative z-10">
              
              {/* Stat item 1 */}
              <motion.div whileHover={{ x: 6 }} className="flex items-center gap-5 sm:gap-6 group transition-transform duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center border border-gold-500/20 group-hover:bg-gold-500/25 group-hover:border-gold-500/40 transition-all duration-300">
                  <Award size={26} className="text-gold-500 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-0.5 tracking-tight">20+</div>
                  <div className="text-[10px] sm:text-[11px] text-white/50 uppercase tracking-wider font-medium">Years of Experience</div>
                </div>
              </motion.div>
              
              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-white/5 via-white/10 to-transparent" />
              
              {/* Stat item 2 */}
              <motion.div whileHover={{ x: 6 }} className="flex items-center gap-5 sm:gap-6 group transition-transform duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-islamic-green/10 flex items-center justify-center border border-islamic-green/20 group-hover:bg-islamic-green/25 group-hover:border-islamic-green/40 transition-all duration-300">
                  <Users size={26} className="text-islamic-green group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-0.5 tracking-tight">10K+</div>
                  <div className="text-[10px] sm:text-[11px] text-white/50 uppercase tracking-wider font-medium">Happy Pilgrims</div>
                </div>
              </motion.div>
              
              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-white/5 via-white/10 to-transparent" />

              {/* Stat item 3 */}
              <motion.div whileHover={{ x: 6 }} className="flex items-center gap-5 sm:gap-6 group transition-transform duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center border border-gold-500/20 group-hover:bg-gold-500/25 group-hover:border-gold-500/40 transition-all duration-300">
                  <ShieldCheck size={26} className="text-gold-500 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-0.5 tracking-tight">100%</div>
                  <div className="text-[10px] sm:text-[11px] text-white/50 uppercase tracking-wider font-medium">Customer Trust</div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </motion.div>
<br/>
      </div>
    </section>
  );
}
