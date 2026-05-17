"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { 
  Award, Users, ShieldCheck, HeadphonesIcon, 
  Play, Target, Eye, BookOpen, Star, 
  CheckCircle, Navigation, HeartHandshake, 
  BadgeDollarSign, ThumbsUp, Globe, BadgePercent
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative bg-cream-50 overflow-hidden font-poppins min-h-screen">
      <Navbar />

      {/* 1. Cinematic Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-navy-900 min-h-[75vh] flex flex-col justify-center">
        
        {/* Background Image with Slow Ken-Burns Zoom & True Contrast Gradients */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.15, opacity: 0.2 }}
            animate={{ scale: 1.02, opacity: 0.35 }}
            transition={{ duration: 15, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            <Image
              src="/images/kaaba.png"
              alt="Kaaba in Makkah"
              fill
              className="object-cover object-top"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-transparent to-navy-900" />
        </div>

        {/* Floating Ambient Glow Orb */}
        <motion.div 
          animate={{ 
            opacity: [0.12, 0.22, 0.12],
            scale: [1, 1.12, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-gold-500/15 blur-[120px] pointer-events-none z-1"
        />

        {/* Sliding Islamic Geometric Background Pattern Overlay */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "80px 80px"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: "url('/images/pattern.png')",
            backgroundSize: "260px 260px",
          }}
          className="absolute inset-0 z-1 pointer-events-none opacity-[0.06] mix-blend-overlay"
        />

        <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center">
          <div className="max-w-3xl mb-12 lg:mb-16">
            
            {/* Elegant Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-gold-500/30 text-gold-500 text-[10px] font-bold tracking-[0.25em] uppercase mb-6 bg-gold-500/10 backdrop-blur-sm shadow-[0_0_20px_rgba(238,176,18,0.05)]">
                <span className="text-gold-500 text-[9px] animate-pulse">✦</span> ABOUT ATEEQ TOURS <span className="text-gold-500 text-[9px] animate-pulse">✦</span>
              </span>
            </motion.div>

            {/* Main Header Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.6rem] font-playfair font-bold text-white leading-[1.1] mb-6"
            >
              Serving Pilgrims <br />
              Since <span className="text-transparent bg-clip-text bg-gradient-to-r from-islamic-green via-gold-500 to-islamic-green bg-[length:200%_auto] inline-block animate-[gradientShift_8s_linear_infinite]">20+ Years</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-light"
            >
              Ateeq Haj Tours is a trusted name in luxury Haj & Umrah travel. We are committed to providing a spiritual journey that is comfortable, safe and spiritually memorable.
            </motion.p>
          </div>

          {/* Staggered Floating Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10"
          >
            {[
              { icon: Award, value: "20+", label: "Years of Experience" },
              { icon: Users, value: "10K+", label: "Happy Pilgrims" },
              { icon: ShieldCheck, value: "100%", label: "Satisfaction Rate" },
              { icon: HeadphonesIcon, value: "24/7", label: "Dedicated Support" },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="flex items-center gap-4 group transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl border border-gold-500/20 flex items-center justify-center bg-gold-500/10 text-gold-500 shrink-0 group-hover:bg-gold-500/25 group-hover:border-gold-500/40 transition-all duration-300">
                  <stat.icon size={22} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-0.5 tracking-tight">{stat.value}</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest font-medium leading-none">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="py-20 lg:py-28 bg-cream-50 relative overflow-hidden">
        
        {/* Soft floating glow behind our story image */}
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-islamic-green/5 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2.5 text-gold-500 font-bold text-[10px] tracking-[0.2em] uppercase mb-4">
                <span className="text-gold-500 animate-pulse">✦</span> OUR STORY
              </div>
              
              <h2 className="text-3xl md:text-[2.6rem] font-playfair font-bold text-navy-900 leading-tight mb-6">
                Our Journey, Your Spiritual Trust
              </h2>
              
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10 font-light">
                Ateeq Haj Tours was founded with a noble mission: to serve the pilgrims of Allah with sincere dedication, total transparency, and absolute excellence. With the blessings of thousands of satisfied pilgrims and a highly supportive team, we have grown to become one of the premier luxury Haj & Umrah service operators.
              </p>

              {/* Grid values list */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, label: "Ministry Approved" },
                  { icon: BadgeDollarSign, label: "Premium Accommodations" },
                  { icon: Users, label: "Dedicated Local Team" },
                  { icon: Navigation, label: "Step-by-Step Guidance" },
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 hover:shadow-md cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-full bg-islamic-green/10 text-islamic-green flex items-center justify-center group-hover:bg-islamic-green group-hover:text-navy-900 transition-all duration-300">
                      <item.icon size={22} strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-bold text-navy-900 uppercase tracking-wide leading-tight">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Luxury Interactive Image Frame */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white"
            >
              <Image 
                src="/images/madinah.png" 
                alt="Al-Madinah Al-Munawwarah" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-navy-900/10 pointer-events-none" />
              
              {/* Pulsing Play / Ambient Symbol Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-navy-900 shadow-2xl cursor-pointer hover:scale-110 transition-transform bg-white/95 border border-gold-500/20 text-gold-500 hover:text-navy-900"
                >
                  <Play size={24} className="ml-1 fill-current" />
                </motion.div>
              </div>

              {/* Overlapping Arabic Seal Card */}
              <div className="absolute bottom-6 right-6 bg-navy-900/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl max-w-[210px] text-center">
                <div className="text-white font-serif text-2xl mb-1.5 tracking-wide">خدمة ضيوف الرحمن</div>
                <div className="w-12 h-px bg-gold-500/50 mx-auto mb-2" />
                <div className="text-gold-500 text-[10px] font-bold uppercase tracking-wider">Serving the Blessed Guests of Allah</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Section */}
      <section className="relative py-24 bg-navy-900 border-y border-gold-500/15 overflow-hidden">
        
        {/* Animated Islamic geometric background pattern overlay */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "-100px 100px"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: "url('/images/pattern.png')",
            backgroundSize: "280px 280px",
          }}
          className="absolute inset-0 z-0 pointer-events-none opacity-5 mix-blend-overlay"
        />

        {/* Ambient gold glow orbs inside the section */}
        <div className="absolute top-[10%] left-[-15%] w-[45%] h-[45%] rounded-full bg-gold-500/10 blur-[120px] pointer-events-none z-1" />
        <div className="absolute bottom-[10%] right-[-15%] w-[45%] h-[45%] rounded-full bg-islamic-green/10 blur-[120px] pointer-events-none z-1" />
        
        <div className="container mx-auto px-6 relative z-10">
          
          <div className="text-center mb-20 relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/25 to-transparent -z-10" />
            <span className="inline-flex items-center gap-4 bg-navy-900 px-6 text-gold-500 font-bold text-sm tracking-[0.25em] uppercase">
              <span>✦</span> OUR MISSION & VISION <span>✦</span>
            </span>
          </div>

          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-16 items-center">
            
            {/* Left Box: Mission */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="text-center md:text-right flex flex-col items-center md:items-end group"
            >
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gold-500 mb-6 shadow-xl group-hover:bg-gold-500 group-hover:text-navy-900 transition-all duration-300">
                <Target size={30} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-white mb-4">Our Sacred Mission</h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-sm font-light">
                To provide unmatched Haj & Umrah experiences with absolute religious care, comfort, and direct guidance, ensuring a spiritually powerful and hassle-free journey for every pilgrim.
              </p>
            </motion.div>

            {/* Central Circle Sanctuary Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-48 h-48 lg:w-60 lg:h-60 rounded-full border-[6px] border-navy-900 outline outline-1 outline-gold-500/30 shadow-[0_0_50px_rgba(238,176,18,0.15)] relative overflow-hidden mx-auto"
            >
              <Image src="/images/kaaba.png" alt="Holy Kaaba" fill className="object-cover animate-[kenBurns_20s_infinite_alternate]" />
            </motion.div>

            {/* Right Box: Vision */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="text-center md:text-left flex flex-col items-center md:items-start group"
            >
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gold-500 mb-6 shadow-xl group-hover:bg-gold-500 group-hover:text-navy-900 transition-all duration-300">
                <Eye size={30} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-sm font-light">
                To stand as the absolute global standard for trust and luxury in Haj & Umrah services, celebrated for complete transparency, elite accommodations, and dedicated spiritual support.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Why Trust Us Section */}
      <section className="py-24 bg-cream-50 relative overflow-hidden">
        
        {/* Soft background ambient glow orbs */}
        <div className="absolute top-[10%] left-[-15%] w-[40%] h-[40%] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16">
            
            {/* Left: 6 Core Pillars */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <span className="text-gold-500 font-bold text-xs tracking-[0.25em] uppercase whitespace-nowrap">✦ WHY PILGRIMS CHOOSE US ✦</span>
                <div className="h-px bg-gold-500/20 flex-1" />
              </div>
 
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: BookOpen, title: "Spiritual Guidance", desc: "Complete scholars-backed guidance before, during and after your entire journey." },
                  { icon: HeartHandshake, title: "Utmost Care & Comfort", desc: "We look after every minor comfort, from direct medical support to hotel proximity." },
                  { icon: Star, title: "Elite Services", desc: "We provide high-tier facilities including luxury air-conditioned coaches and buffet meals." },
                  { icon: HeadphonesIcon, title: "24/7 Live Assistance", desc: "Dedicated ground support staff always available in Makkah & Madinah." },
                  { icon: Users, title: "Trusted by Thousands", desc: "Thousands of satisfied spiritual travelers choose us for our sincerity and trust." },
                  { icon: BadgeDollarSign, title: "Complete Transparency", desc: "Zero hidden costs, with exactly detailed services provided as committed." },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="flex gap-4 p-6 bg-white rounded-[1.5rem] border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-islamic-green/10 text-islamic-green flex items-center justify-center shrink-0 group-hover:bg-islamic-green group-hover:text-navy-900 transition-all duration-300">
                      <item.icon size={22} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-navy-900 mb-1.5 transition-colors group-hover:text-gold-500">{item.title}</h4>
                      <p className="text-[11px] text-gray-500 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Team Portrait Card */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <span className="text-gold-500 font-bold text-xs tracking-[0.25em] uppercase whitespace-nowrap">✦ OUR SACRED MISSION TEAM ✦</span>
                <div className="h-px bg-gold-500/20 flex-1" />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-[2rem] overflow-hidden shadow-2xl bg-navy-900 group border-4 border-white"
              >
                {/* Team Image */}
                <div className="relative aspect-[4/3] bg-gray-900 overflow-hidden">
                  <Image 
                    src="/images/pilgrim.png" 
                    alt="Our Dedicated Hajj Team" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-navy-900/10 pointer-events-none" />
                </div>
                
                {/* Caption Card */}
                <div className="p-8 text-center border-t-4 border-islamic-green relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-navy-900 rounded-full border-4 border-cream-50 flex items-center justify-center text-islamic-green shadow-md">
                    <Users size={20} />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2.5 mt-2">Experienced. Dedicated. Compassionate.</h4>
                  <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed max-w-[280px] mx-auto">
                    Our team of experienced guides and staff are committed to serving you with complete sincerity.
                  </p>
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 5. Certified & Trusted Seals */}
      <section className="py-20 bg-white border-t border-gray-100 relative overflow-hidden">
        
        {/* Repeating background pattern overlay */}
        <div 
          style={{
            backgroundImage: "url('/images/pattern.png')",
            backgroundSize: "220px 220px",
          }}
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] mix-blend-overlay"
        />

        <div className="container mx-auto px-6 relative z-10">
          
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-px w-16 bg-gold-500/25" />
            <span className="text-gold-500 font-bold text-xs tracking-[0.25em] uppercase text-center">✦ ACCREDITED & CERTIFIED ✦</span>
            <div className="h-px w-16 bg-gold-500/25" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Award, title: "Ministry of Haj\nApproved" },
              { icon: Globe, title: "IATA\nAccredited Agent" },
              { icon: CheckCircle, title: "ISO\nCertified Company" },
              { icon: BadgePercent, title: "Best Price\nGuarantee" },
              { icon: ShieldCheck, title: "Secure & Safe\nTravel" },
              { icon: ThumbsUp, title: "100% Customer\nSatisfaction" },
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="flex flex-col items-center text-center p-6 bg-cream-50 rounded-[1.8rem] hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
              >
                <div className="text-navy-900 group-hover:text-islamic-green transition-colors duration-300 mb-4 bg-white shadow-sm border border-gray-100 rounded-2xl w-14 h-14 flex items-center justify-center">
                  <cert.icon size={26} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                </div>
                <h5 className="text-[10px] sm:text-[11px] font-bold text-navy-900 uppercase whitespace-pre-line tracking-wider leading-relaxed">
                  {cert.title}
                </h5>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call To Action (CTA) */}
      <CTA />

      {/* 7. Footer */}
      <Footer />
    </main>
  );
}
