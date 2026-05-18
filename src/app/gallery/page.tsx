"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  LayoutGrid, MapPin, Building2, Calendar, 
  Users2, Star, PlayCircle, Camera, ArrowRight, Share2, ChevronRight
} from "lucide-react";

const galleryUrls = [
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.55.23-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.55.54-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.55.46-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.55.52-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.55.36-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.57.42-PM-1.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.58.09-PM-1.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.58.05-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.55.51-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.55.30-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.58.07-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.55.24-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.55.24-PM-1.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.55.26-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.55.27-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.55.29-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.55.32-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.55.42-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.55.35-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.55.33-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.55.44-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.55.48-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.55.49-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.57.42-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.57.43-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.58.07-PM-1.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.58.06-PM-1.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.58.02-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.57.44-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.58.03-PM.jpeg",
  "https://ateeqhajtours.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-1.58.06-PM.jpeg"
];

const galleryImages = galleryUrls.map((url, index) => ({
  id: index + 1,
  title: "Ateeq Haj Tours",
  subtitle: "Memorable Moments",
  src: url
}));

const filters = [
  { name: "All Photos", icon: LayoutGrid, active: true },
  { name: "Makkah", icon: Building2, active: false },
  { name: "Madinah", icon: MapPin, active: false },
  { name: "Hajj", icon: Star, active: false },
  { name: "Umrah", icon: Star, active: false },
  { name: "Group Photos", icon: Users2, active: false },
  { name: "Events", icon: Calendar, active: false },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All Photos");

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
            <Image src="/images/gallery-1.png" alt="Gallery Banner" fill className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b26] to-transparent" />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-8 lg:pt-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] text-white/60 mb-6 font-medium">
            <Link href="/" className="hover:text-gold-500 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">Gallery</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
            {/* Title & Description */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-playfair font-bold text-white leading-tight mb-4">
                Our <span className="text-islamic-green">Gallery</span>
              </h1>
              <p className="text-white/80 text-sm md:text-[15px] leading-relaxed max-w-md">
                Explore the blessed moments and spiritual experiences from the holy journey of our pilgrims.
              </p>
            </div>

            {/* Inline Features Box */}
            <div className="hidden md:flex items-center gap-6 bg-[#0b1b26]/80 backdrop-blur-md border border-islamic-green/30 rounded-full px-8 py-4 shadow-xl">
              {[
                { icon: Camera, text: "Blessed\nMoments" },
                { icon: Users2, text: "Happy\nPilgrims" },
                { icon: Star, text: "Spiritual\nJourneys" },
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

      {/* 2. Filters Toolbar */}
      <section className="py-8 border-b border-gray-200 sticky top-20 z-30 bg-[#fafaf9]/95 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.name}
                  onClick={() => setActiveFilter(filter.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[12px] font-semibold transition-all shadow-sm ${
                    activeFilter === filter.name
                      ? "bg-navy-900 text-islamic-green border border-navy-900"
                      : "bg-white text-navy-900 border border-gray-200 hover:border-gold-500 hover:text-gold-500"
                  }`}
                >
                  <filter.icon size={14} className={activeFilter === filter.name ? "text-islamic-green" : "text-gray-400"} />
                  {filter.name}
                </button>
              ))}
            </div>

            {/* View All Videos Button */}
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-[12px] font-bold bg-navy-900 text-white shadow-md hover:bg-navy-900/90 transition-colors whitespace-nowrap ml-auto">
              <PlayCircle size={16} />
              View All Videos
            </button>
            
          </div>
        </div>
      </section>

      {/* 3. Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="relative rounded-[20px] overflow-hidden aspect-[4/3] group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <Image 
                  src={image.src} 
                  alt={image.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-[13px] md:text-[14px] leading-tight mb-1 drop-shadow-md">
                    {image.title}
                  </h3>
                  <p className="text-white/70 text-[11px] font-medium tracking-wide">
                    {image.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom Banner (CTA) */}
      <section className="bg-navy-900 relative overflow-hidden py-12 md:py-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
          <Image src="/images/pattern.png" alt="Pattern" fill className="object-cover" />
        </div>
        
        {/* Hanging Lanterns (Decorative) */}
        <div className="absolute left-10 top-0 w-12 h-24 bg-gold-500/20 rounded-b-full blur-md hidden lg:block" />
        <div className="absolute right-10 top-0 w-12 h-32 bg-gold-500/20 rounded-b-full blur-md hidden lg:block" />

        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="flex items-center gap-6 md:gap-10">
            {/* Camera Icon */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-gold-500/30 flex items-center justify-center shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gold-500 flex items-center justify-center">
                <Camera size={32} className="text-gold-500" strokeWidth={1.5} />
              </div>
            </div>

            {/* Text Content */}
            <div>
              <p className="text-white/70 text-sm mb-1 font-medium">Want to see more memorable moments?</p>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-2">
                View Our Full <span className="text-islamic-green">Gallery</span>
              </h2>
              <p className="text-white/60 text-xs md:text-sm max-w-md">
                Thousands of blessed moments captured during Hajj & Umrah journeys.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button className="w-full sm:w-auto bg-islamic-green hover:bg-[#c5e063] text-navy-900 px-8 py-3.5 rounded-xl font-bold text-[13px] transition-colors flex items-center justify-center gap-2 shadow-lg">
              View All Photos
              <ArrowRight size={16} />
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-3.5 rounded-xl font-bold text-[13px] transition-colors flex items-center justify-center gap-2">
              Share Your Moments
              <Share2 size={16} />
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
