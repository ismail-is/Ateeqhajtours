"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Plane, Building2, Utensils, Bus, 
  MapPin, CheckCircle2, MessageCircle, HelpCircle, 
  Sparkles, Calendar, ShieldCheck 
} from "lucide-react";
import Image from "next/image";

interface Package {
  id: number;
  title: string;
  image: string;
  days: string;
  distance: string;
  type?: string;
  features?: string[];
}

interface PackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  pkg: Package | null;
}

export default function PackageModal({ isOpen, onClose, pkg }: PackageModalProps) {
  if (!pkg) return null;

  // Clean package title for WhatsApp message pre-fill
  const cleanTitle = pkg.title.replace(/\n/g, " ");
  const whatsappUrl = `https://wa.me/918197593479?text=Assalamu%20Alaikum,%20I%20am%20interested%20in%20booking%20the%20*${encodeURIComponent(cleanTitle)}*%20(${pkg.days})%20package.%20Please%20provide%20more%20details.`;

  // Fallback features list if not defined in package
  const defaultFeatures = [
    "Round-Trip Flights Included",
    "Buffet Meals (Breakfast, Lunch & Dinner)",
    "Hassle-Free Visa Processing & Assistance",
    "Guided Ziyarah Tours in Makkah & Madinah",
    "Complimentary Zamzam Water (5L)",
    "Dedicated Spiritual Guide & Support Staff",
    "Premium Air-Conditioned Transportation",
    "Complimentary Travel Kit & Bags"
  ];

  const featuresToDisplay = pkg.features && pkg.features.length > 0 ? pkg.features : defaultFeatures;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          
          {/* Backdrop Glassmorphism Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="bg-navy-900 border border-white/10 rounded-[2.5rem] w-full max-w-4xl shadow-2xl relative overflow-hidden z-10 my-8"
          >
            
            {/* Ambient gold glow orbs inside the modal */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gold-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-islamic-green/10 blur-[100px] pointer-events-none" />

            {/* Repeating Islamic geometric pattern overlay */}
            <div 
              style={{
                backgroundImage: "url('/images/pattern.png')",
                backgroundSize: "200px 200px",
              }}
              className="absolute inset-0 z-0 pointer-events-none opacity-5 mix-blend-overlay"
            />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-gold-500 hover:border-gold-500 transition-all duration-300 shadow-lg cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Content Layout */}
            <div className="grid md:grid-cols-[1.1fr_1.3fr] min-h-[500px] relative z-10">
              
              {/* Left Side: Dynamic Sanctuary Image & Banner */}
              <div className="relative h-[250px] md:h-auto min-h-[250px] overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={cleanTitle}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Visual Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-navy-900 via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-navy-900/60" />
                
                {/* Floating Meta Badges */}
                <div className="absolute bottom-6 left-6 flex flex-col gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-islamic-green text-navy-900 text-[10px] font-extrabold tracking-wider uppercase shadow-md">
                    <Calendar size={12} strokeWidth={2.5} />
                    {pkg.days} Tour
                  </span>
                  
                  {pkg.type && (
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-navy-900/80 border border-white/10 text-gold-500 text-[10px] font-extrabold tracking-wider uppercase shadow-md w-max backdrop-blur-sm">
                      <Sparkles size={12} strokeWidth={2.5} />
                      {pkg.type} Elite Class
                    </span>
                  )}
                </div>
              </div>

              {/* Right Side: Package details and list */}
              <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                
                {/* Top Section */}
                <div>
                  
                  {/* Category Indicator */}
                  <div className="flex items-center gap-1.5 text-gold-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
                    <span>✦</span>
                    Package Details
                    <span>✦</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-white leading-tight mb-4 whitespace-pre-line">
                    {pkg.title}
                  </h2>

                  {/* Core Services Icons */}
                  <div className="grid grid-cols-4 gap-2 bg-white/5 border border-white/10 rounded-2xl p-4.5 mb-6 text-center">
                    {[
                      { icon: Plane, label: "Flights", desc: "Round Trip" },
                      { icon: Building2, label: "Hotels", desc: "Premium" },
                      { icon: Utensils, label: "Meals", desc: "Full Buffet" },
                      { icon: Bus, label: "Transport", desc: "Private AC" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500">
                          <item.icon size={20} strokeWidth={1.5} />
                        </div>
                        <span className="text-[10px] font-bold text-white mt-1">{item.label}</span>
                        <span className="text-[8px] text-white/50">{item.desc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hotel Distance */}
                  <div className="flex items-start gap-2.5 text-white/70 text-xs mb-6 font-medium bg-navy-950/40 border border-white/5 rounded-xl p-3">
                    <MapPin size={16} className="text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] uppercase text-white/40 tracking-wider font-bold mb-0.5">Hotel Sanctuary Proximity</div>
                      <span>{pkg.distance}</span>
                    </div>
                  </div>

                  {/* Amenities List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[10px] uppercase text-white/40 tracking-wider font-bold mb-2">Amenities & Services Included</div>
                    <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5">
                      {featuresToDisplay.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-islamic-green shrink-0 mt-0.5" strokeWidth={3} />
                          <span className="text-[11px] text-white/80 font-medium leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom CTA Row */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/10">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-islamic-green hover:bg-[#c5e063] text-navy-900 py-3.5 px-6 rounded-xl font-bold transition-all shadow-[0_0_30px_rgba(178,210,53,0.15)] hover:shadow-[0_0_40px_rgba(178,210,53,0.35)] text-xs cursor-pointer group"
                  >
                    <MessageCircle size={16} className="fill-navy-900 text-navy-900 group-hover:scale-110 transition-transform" />
                    Book & Enquire via WhatsApp
                  </a>
                  
                  <button
                    onClick={onClose}
                    className="flex items-center justify-center gap-2 bg-navy-900/50 border border-white/10 hover:border-gold-500/50 text-white/80 hover:text-gold-500 py-3.5 px-6 rounded-xl font-bold transition-all text-xs cursor-pointer"
                  >
                    Close Details
                  </button>
                </div>

              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
