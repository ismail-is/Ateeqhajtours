"use client";

import { motion } from "framer-motion";
import { ArrowRight, HeadphonesIcon, Award, Users, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-32 lg:pb-0 overflow-hidden bg-navy-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/kaaba.png"
          alt="Kaaba in Makkah"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-[1fr_auto] gap-12 items-center">
        
        {/* Left Content */}
        <div className="max-w-2xl pt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/60 border border-white/10 text-gold-500 text-[11px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
              <span className="text-gold-500">✦</span>
              A Journey of Faith
              <span className="text-gold-500">✦</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[3.5rem] md:text-[5rem] font-playfair font-bold text-white leading-[1.1] mb-6"
          >
            Your Sacred <br />
            <span className="text-islamic-green">
              Journey Begins
            </span>{" "}
            <br />
            Here
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-white/80 text-base md:text-lg mb-10 leading-relaxed max-w-lg"
          >
            We provide exceptional Haj & Umrah services with comfort, care and complete guidance to make your spiritual journey memorable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#packages"
              className="flex items-center gap-2 bg-islamic-green text-navy-900 px-7 py-3.5 rounded-lg font-semibold transition-all hover:bg-[#c5e063] text-sm"
            >
              Explore Packages
              <ArrowRight size={18} />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-gold-500/10 border border-gold-500 text-gold-500 px-7 py-3.5 rounded-lg font-semibold transition-all hover:bg-gold-500 hover:text-navy-900 text-sm backdrop-blur-sm"
            >
              <HeadphonesIcon size={18} />
              Talk to Advisor
            </a>
          </motion.div>
        </div>

        {/* Right Content - Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="lg:justify-self-end mt-12 lg:mt-0"
        >
          <div className="bg-[#0f212d]/80 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 w-full max-w-[320px] shadow-2xl flex flex-col gap-8 relative overflow-hidden">
            {/* Glossy highlight effect on top border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <div className="flex items-start gap-5">
              <Award size={36} className="text-gold-500 shrink-0" strokeWidth={1.5} />
              <div>
                <div className="text-2xl font-bold text-white mb-0.5">20+</div>
                <div className="text-xs text-white/60">Years of Experience</div>
              </div>
            </div>
            
            <div className="w-full h-px bg-white/5" />
            
            <div className="flex items-start gap-5">
              <Users size={36} className="text-islamic-green shrink-0" strokeWidth={1.5} />
              <div>
                <div className="text-2xl font-bold text-white mb-0.5">10K+</div>
                <div className="text-xs text-white/60">Happy Pilgrims</div>
              </div>
            </div>
            
            <div className="w-full h-px bg-white/5" />

            <div className="flex items-start gap-5">
              <ShieldCheck size={36} className="text-gold-500 shrink-0" strokeWidth={1.5} />
              <div>
                <div className="text-2xl font-bold text-white mb-0.5">100%</div>
                <div className="text-xs text-white/60">Customer Satisfaction</div>
              </div>
            </div>
            
            <div className="w-full h-px bg-white/5" />

            <div className="flex items-start gap-5">
              <HeadphonesIcon size={36} className="text-islamic-green shrink-0" strokeWidth={1.5} />
              <div>
                <div className="text-2xl font-bold text-white mb-0.5">24/7</div>
                <div className="text-xs text-white/60">Support Available</div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
