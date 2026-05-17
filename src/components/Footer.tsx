"use client";

import Image from "next/image";
import { Globe, MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0b1b26] text-cream-50 pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      <motion.div 
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.5fr_1.5fr_1.5fr] gap-8 mb-12">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 relative shrink-0">
                <Image
                  src="/images/Ateeq/ateeq-logo.png"
                  alt="Ateeq Haj Tours Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel font-bold text-lg leading-none text-gold-500 tracking-wide uppercase">
                  Ateeq Haj Tours
                </span>
                <span className="text-[9px] text-white/90 tracking-widest mt-0.5">
                  HAJ & UMRAH SERVICES
                </span>
              </div>
            </div>
            <p className="text-[11px] text-white/60 leading-relaxed mb-6 pr-4">
              We are committed to providing the best service for your Haj & Umrah journey with comfort and care.
            </p>
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors text-white/60">
                <Globe size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors text-white/60">
                <Globe size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors text-white/60">
                <Globe size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors text-white/60">
                <Globe size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[13px] font-bold mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Haj Packages', 'Umrah Packages', 'Services', 'Gallery', 'Contact Us'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-white/60 hover:text-gold-500 transition-colors text-[11px] flex items-center gap-1.5">
                    <ChevronRight size={12} className="text-islamic-green" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="text-[13px] font-bold mb-5 text-white">Our Services</h4>
            <ul className="space-y-3">
              {['Haj Packages', 'Umrah Packages', 'Visa Assistance', 'Flight Booking', 'Hotel Booking', 'Transport Services', 'Ziyarat Services'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-white/60 hover:text-gold-500 transition-colors text-[11px] flex items-center gap-1.5">
                    <ChevronRight size={12} className="text-islamic-green" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-[13px] font-bold mb-5 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold-500 shrink-0 mt-0.5" size={14} />
                <span className="text-[11px] text-white/60 leading-tight">#18-13-132/1/A/98, Tej Enclave,<br/>Fateh Darwaza, Hyderabad,<br/>Telangana - 500002</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold-500 shrink-0" size={14} />
                <span className="text-[11px] text-white/60">+91 786 38 786 30</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold-500 shrink-0" size={14} />
                <span className="text-[11px] text-white/60">info@ateeqhajtours.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="text-gold-500 shrink-0" size={14} />
                <span className="text-[11px] text-white/60">www.ateeqhajtours.com</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Our Location */}
          <div>
            <h4 className="text-[13px] font-bold mb-5 text-white">Our Location</h4>
            <div className="w-full h-32 bg-gray-200 rounded-lg overflow-hidden relative">
              {/* Using a placeholder map image */}
              <Image src="/images/pattern.png" alt="Map" fill className="object-cover opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="text-red-500 drop-shadow-md" size={24} fill="#ef4444" strokeWidth={1} />
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-6"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40">
          <p>&copy; {new Date().getFullYear()} Ateeq Haj Tours. All Rights Reserved.</p>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="w-px h-3 bg-white/20"></span>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
