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
    <main className="relative bg-cream-50 overflow-hidden font-poppins">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-navy-900 min-h-[70vh] flex flex-col justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/kaaba.png"
            alt="Kaaba in Makkah"
            fill
            className="object-cover opacity-30 object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/70 to-navy-900" />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col h-full justify-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/30 text-gold-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 bg-gold-500/10 backdrop-blur-sm">
                <span className="text-gold-500">✦</span> ABOUT US
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-playfair font-bold text-white leading-tight mb-6"
            >
              Serving Pilgrims <br />
              Since <span className="text-islamic-green">20+ Years</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 text-sm md:text-base max-w-xl leading-relaxed mb-12"
            >
              Ateeq Haj Tours is a trusted name in Haj & Umrah services. We are committed to providing a spiritual journey that is comfortable, safe and memorable.
            </motion.p>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10"
          >
            {[
              { icon: Award, value: "20+", label: "Years of Experience" },
              { icon: Users, value: "10K+", label: "Happy Pilgrims" },
              { icon: ShieldCheck, value: "100%", label: "Customer Satisfaction" },
              { icon: HeadphonesIcon, value: "24/7", label: "Support Available" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-gold-500/20 flex items-center justify-center bg-gold-500/10 text-gold-500 shrink-0">
                  <stat.icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-0.5">{stat.value}</div>
                  <div className="text-[11px] text-white/60 uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="py-20 lg:py-28 bg-cream-50 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 text-gold-500 font-bold text-[10px] tracking-[0.2em] uppercase mb-4">
                <span className="text-gold-500">✦</span> OUR STORY
              </div>
              <h2 className="text-3xl md:text-[2.5rem] font-playfair font-bold text-navy-900 leading-tight mb-6">
                Our Journey, Your Trust
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-10">
                Ateeq Haj Tours was founded with a noble mission to serve the pilgrims of Allah with sincerity, transparency and excellence. With the blessings of our satisfied pilgrims and dedicated team, we have grown to become one of the most trusted Haj & Umrah service providers.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                {[
                  { icon: Award, label: "Ministry Approved" },
                  { icon: BadgeDollarSign, label: "Best Price Guarantee" },
                  { icon: Users, label: "Experienced & Dedicated Team" },
                  { icon: Navigation, label: "Complete Guidance at Every Step" },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center gap-3 transition-transform hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full bg-islamic-green/10 text-islamic-green flex items-center justify-center">
                      <item.icon size={24} strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-semibold text-navy-900">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Video/Image Wrapper */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl"
            >
              <Image 
                src="/images/madinah.png" 
                alt="Madinah" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy-900/20" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-navy-900 shadow-xl cursor-pointer hover:scale-110 transition-transform">
                  <Play size={24} className="ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Overlapping Card */}
              <div className="absolute bottom-6 right-6 bg-navy-900/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl max-w-[200px] text-center">
                <div className="text-white font-serif text-2xl mb-2">خدمة ضيوف الرحمن</div>
                <div className="text-gold-500 text-xs font-semibold uppercase tracking-wider">Serving the Guests of Allah</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="relative py-24 bg-navy-900 border-y border-gold-500/20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/pattern.png" alt="Islamic Pattern" fill className="object-cover" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent -z-10" />
            <span className="inline-flex items-center gap-4 bg-navy-900 px-6 text-gold-500 font-bold text-sm tracking-[0.2em] uppercase">
              <span>✦</span> OUR MISSION & VISION <span>✦</span>
            </span>
          </div>

          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-16 items-center">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right flex flex-col items-end"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-navy-900 mb-6 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                To provide exceptional Haj & Umrah services with complete care, comfort and guidance, ensuring a spiritually uplifting and hassle-free journey.
              </p>
            </motion.div>

            {/* Center Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-48 h-48 lg:w-64 lg:h-64 rounded-full border-[6px] border-navy-900 outline outline-1 outline-gold-500/30 shadow-[0_0_40px_rgba(238,176,18,0.2)] relative overflow-hidden mx-auto"
            >
              <Image src="/images/kaaba.png" alt="Kaaba" fill className="object-cover" />
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left flex flex-col items-start"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-navy-900 mb-6 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                To become a globally recognized Haj & Umrah brand known for trust, quality, transparency and unparalleled service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Why Trust Us & Our Team */}
      <section className="py-24 bg-cream-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16">
            
            {/* Left: Why Trust Us */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px bg-gold-500/50 flex-1" />
                <span className="text-gold-500 font-bold text-sm tracking-[0.2em] uppercase">✦ WHY PILGRIMS TRUST US ✦</span>
                <div className="h-px bg-gold-500/50 flex-1" />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: BookOpen, title: "Spiritual Guidance", desc: "Complete religious guidance before, during & after your sacred journey." },
                  { icon: HeartHandshake, title: "Care & Comfort", desc: "We ensure your comfort and convenience at every step of the journey." },
                  { icon: Star, title: "Quality Services", desc: "We provide the best facilities including hotels, transport and meals." },
                  { icon: HeadphonesIcon, title: "24/7 Support", desc: "Our team is available round the clock to assist you anytime." },
                  { icon: Users, title: "Trusted by Thousands", desc: "Thousands of satisfied pilgrims trust us every year for their journey." },
                  { icon: BadgeDollarSign, title: "Affordable Pricing", desc: "Best services at competitive prices with complete transparency." },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-islamic-green/10 text-islamic-green flex items-center justify-center shrink-0">
                      <item.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-navy-900 mb-1">{item.title}</h4>
                      <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Our Team */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px bg-gold-500/50 flex-1" />
                <span className="text-gold-500 font-bold text-sm tracking-[0.2em] uppercase">✦ OUR TEAM ✦</span>
                <div className="h-px bg-gold-500/50 flex-1" />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-xl bg-navy-900 group"
              >
                {/* Team Image Placeholder - using a relevant image from public or a stylized gradient block */}
                <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                  <Image 
                    src="/images/pilgrim.png" 
                    alt="Our Team" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-navy-900/10" />
                </div>
                
                {/* Team Caption */}
                <div className="p-8 text-center border-t-4 border-islamic-green relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-navy-900 rounded-full border-4 border-cream-50 flex items-center justify-center text-islamic-green">
                    <Users size={20} />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2 mt-2">Experienced. Dedicated. Compassionate.</h4>
                  <p className="text-white/70 text-sm">
                    Our team is committed to serving you with sincerity and excellence.
                  </p>
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 5. Certified & Trusted */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-gold-500/50" />
            <span className="text-gold-500 font-bold text-sm tracking-[0.2em] uppercase text-center">✦ CERTIFIED & TRUSTED ✦</span>
            <div className="h-px w-16 bg-gold-500/50" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Award, title: "Ministry of Haj\nApproved" },
              { icon: Globe, title: "IATA\nAccredited Agent" },
              { icon: CheckCircle, title: "ISO\nCertified Company" },
              { icon: BadgePercent, title: "Best Price\nGuarantee" },
              { icon: ShieldCheck, title: "Secure & Safe\nTravel" },
              { icon: ThumbsUp, title: "Customer\nSatisfaction" },
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-cream-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="text-navy-900 group-hover:text-islamic-green transition-colors mb-4">
                  <cert.icon size={40} strokeWidth={1} />
                </div>
                <h5 className="text-[11px] font-bold text-navy-900 uppercase whitespace-pre-line tracking-wider leading-relaxed">
                  {cert.title}
                </h5>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <CTA />

      {/* 7. Footer */}
      <Footer />
    </main>
  );
}
