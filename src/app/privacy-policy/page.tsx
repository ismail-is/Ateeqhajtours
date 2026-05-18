"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ShieldCheck, Eye, Lock, Globe, Database, 
  HelpCircle, ChevronRight, Sparkles, Scale
} from "lucide-react";
import { motion } from "framer-motion";

const policySections = [
  {
    icon: Database,
    title: "1. Information We Collect",
    desc: "We collect personal information necessary to deliver Hajj & Umrah package bookings and visa processing services. This includes your full name, passport details, contact number, email address, PAN/Aadhaar details, and vaccination certificates as required by the Saudi and Indian government ministries."
  },
  {
    icon: Eye,
    title: "2. How We Use Your Information",
    desc: "Your personal details are used solely to confirm flight tickets, register and secure hotel accommodations in Makkah & Madinah, generate pilgrim ID kits, and submit official Hajj/Umrah visa requests to the Saudi Ministry of Hajj & Umrah."
  },
  {
    icon: Lock,
    title: "3. Data Protection & Security",
    desc: "Ateeq Haj Tours and Travels takes data privacy and security seriously. We implement robust physical and electronic measures to guard your passport copies and sensitive documents against unauthorized access, theft, or misuse."
  },
  {
    icon: Globe,
    title: "4. Third-Party Disclosures",
    desc: "We do not sell or trade your personal information. Your documents are shared strictly with authorized partners, such as airlines, consulate officials, hotel coordinators, and ground transport operators in Saudi Arabia, to fulfill your tour itinerary."
  },
  {
    icon: ShieldCheck,
    title: "5. Cookies & Site Use",
    desc: "Our website may use standard cookies to improve your user experience and track aggregate traffic analytics. These cookies do not store any personal, private, or identifiable information."
  },
  {
    icon: Scale,
    title: "6. Consent & Updates",
    desc: "By engaging our Hajj and Umrah services, you consent fully to this Privacy Policy. We reserve the right to revise these policies to maintain full compliance with embassy rules and international air travel policies."
  }
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#fafaf9] min-h-screen font-poppins">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-12 bg-navy-900 overflow-hidden">
        {/* Background Split */}
        <div className="absolute inset-0 z-0 flex">
          {/* Left Dark Green with Pattern */}
          <div className="w-full lg:w-1/2 relative bg-[#0b1b26]">
            <Image src="/images/pattern.png" alt="Pattern" fill className="object-cover opacity-10 mix-blend-overlay" />
          </div>
          {/* Right Image */}
          <div className="hidden lg:block w-1/2 relative">
            <Image src="/images/makkah.png" alt="Privacy Background" fill className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b26] to-transparent" />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-8 lg:pt-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] text-white/60 mb-6 font-medium">
            <Link href="/" className="hover:text-gold-500 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">Privacy Policy</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
            {/* Title & Description */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-playfair font-bold text-white leading-tight mb-4">
                Privacy <span className="text-islamic-green">Policy</span>
              </h1>
              <p className="text-white/80 text-sm md:text-[15px] leading-relaxed max-w-md">
                We respect your personal privacy and protect all Hajj document data with maximum transparency and integrity.
              </p>
            </div>

            {/* Inline Info Badge Box */}
            <div className="hidden md:flex items-center gap-6 bg-[#0b1b26]/80 backdrop-blur-md border border-islamic-green/30 rounded-full px-8 py-4 shadow-xl">
              {[
                { icon: ShieldCheck, text: "Data\nSecurity" },
                { icon: Lock, text: "Encrypted\nSafety" },
                { icon: Eye, text: "Transparent\nPolicies" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 bg-gold-500/5">
                    <item.icon size={18} strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] text-white font-semibold uppercase tracking-wider whitespace-pre-line leading-tight">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Cards */}
      <section className="py-20 relative z-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            
            {policySections.map((section, idx) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:border-gold-500/40 hover:shadow-md transition-all duration-300 relative group"
                >
                  {/* Subtle top border accent on card hover */}
                  <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-gold-500 to-islamic-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-full" />
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 group-hover:bg-gold-500/20 transition-all duration-300">
                      <IconComponent size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[15px] sm:text-base font-bold text-navy-900 tracking-tight leading-snug">
                      {section.title}
                    </h3>
                  </div>

                  <p className="text-[13px] text-gray-600 leading-relaxed font-medium ml-1">
                    {section.desc}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
