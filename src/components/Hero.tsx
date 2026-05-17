"use client";

import { motion } from "framer-motion";
import { ArrowRight, HeadphonesIcon, Award, Users, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-32 lg:pb-0 overflow-hidden bg-navy-900">
      
      {/* Animated Background Image (Ken Burns Effect) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full relative"
        >
          <Image
            src="/images/kaaba.png"
            alt="Kaaba in Makkah"
            fill
            className="object-cover opacity-60"
            priority
          />
        </motion.div>
        
        {/* Refined Overlays for better contrast and depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-80" />
        
        {/* Subtle animated light leak */}
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gold-500/20 blur-[120px] pointer-events-none"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        
        {/* Left Content */}
        <div className="max-w-2xl pt-10">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/60 border border-white/10 text-gold-500 text-[11px] font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(238,176,18,0.1)]">
              <motion.span 
                animate={{ rotate: 360 }} 
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="text-gold-500 inline-block"
              >
                ✦
              </motion.span>
              A Journey of Faith
              <motion.span 
                animate={{ rotate: -360 }} 
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="text-gold-500 inline-block"
              >
                ✦
              </motion.span>
            </span>
          </motion.div>

          {/* Staggered Heading Reveal */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-[4.5rem] lg:text-[5.5rem] font-playfair font-bold text-white leading-[1.1] md:leading-[1.05]"
            >
              Your Sacred <br className="hidden sm:block" />
              <motion.span 
                initial={{ backgroundPosition: "200% 0" }}
                animate={{ backgroundPosition: "-200% 0" }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-islamic-green via-gold-500 to-islamic-green bg-[length:200%_auto] inline-block"
              >
                Journey Begins
              </motion.span>{" "}
              <br className="hidden sm:block" />
              <span className="sm:inline hidden">Here</span>
              <span className="sm:hidden inline"> Here</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-white/80 text-sm md:text-lg mb-8 md:mb-10 leading-relaxed max-w-lg font-light"
          >
            We provide exceptional Haj & Umrah services with comfort, care and complete guidance to make your spiritual journey memorable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#packages"
              className="flex items-center justify-center gap-2 bg-islamic-green text-navy-900 px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_30px_rgba(178,210,53,0.3)] hover:shadow-[0_0_40px_rgba(178,210,53,0.5)] text-sm group w-full sm:w-auto"
            >
              Explore Packages
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-navy-900/50 border border-gold-500/50 text-gold-500 px-8 py-4 rounded-xl font-bold transition-all hover:bg-gold-500 hover:text-navy-900 text-sm backdrop-blur-md group w-full sm:w-auto"
            >
              <HeadphonesIcon size={18} className="group-hover:animate-bounce" />
              Talk to Advisor
            </motion.a>
          </motion.div>
        </div>

        {/* Right Content - Floating Stats Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:justify-self-end mt-12 lg:mt-0 w-full flex justify-center lg:block"
        >
          {/* Subtle floating animation wrapper */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="bg-[#0b1821]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 w-full sm:max-w-[340px] shadow-2xl relative overflow-hidden"
          >
            {/* Glossy highlight effect on top border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
            {/* Glowing orb behind the card */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-islamic-green/20 blur-[80px] rounded-full" />
            
            <div className="flex flex-col gap-8 relative z-10">
              
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-6 group transition-transform">
                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center border border-gold-500/20 group-hover:bg-gold-500/20 transition-colors">
                  <Award size={28} className="text-gold-500" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-0.5 tracking-tight">20+</div>
                  <div className="text-[11px] text-white/50 uppercase tracking-wider font-medium">Years of Experience</div>
                </div>
              </motion.div>
              
              <div className="w-full h-px bg-gradient-to-r from-white/5 via-white/10 to-transparent" />
              
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-6 group transition-transform">
                <div className="w-14 h-14 rounded-2xl bg-islamic-green/10 flex items-center justify-center border border-islamic-green/20 group-hover:bg-islamic-green/20 transition-colors">
                  <Users size={28} className="text-islamic-green" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-0.5 tracking-tight">10K+</div>
                  <div className="text-[11px] text-white/50 uppercase tracking-wider font-medium">Happy Pilgrims</div>
                </div>
              </motion.div>
              
              <div className="w-full h-px bg-gradient-to-r from-white/5 via-white/10 to-transparent" />

              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-6 group transition-transform">
                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center border border-gold-500/20 group-hover:bg-gold-500/20 transition-colors">
                  <ShieldCheck size={28} className="text-gold-500" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-0.5 tracking-tight">100%</div>
                  <div className="text-[11px] text-white/50 uppercase tracking-wider font-medium">Customer Satisfaction</div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
