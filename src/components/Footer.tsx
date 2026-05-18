"use client";

import Image from "next/image";
import Link from "next/link";
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
              We are committed to providing the absolute best service for your Haj & Umrah journey with premium comfort and care.
            </p>
            
            {/* Social Icons (Directly target _blank and linked as requested) */}
            <div className="flex gap-2.5">
              <a 
                href="https://wa.me/918197593479" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Chat on WhatsApp"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500 transition-all text-white/60"
              >
                <svg className="w-[15px] h-[15px] fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.747 1.451 5.477 0 9.932-4.437 9.935-9.899.001-2.646-1.02-5.133-2.877-6.99C16.604 1.86 14.12 1.8 11.488 1.8 7.026 1.8 2.584 6.237 2.581 11.7c-.001 1.66.442 3.278 1.282 4.72l-.997 3.636 3.782-.992z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100084453364216#" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Follow on Facebook"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500 transition-all text-white/60"
              >
                <svg className="w-[15px] h-[15px] fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/ateeqtravels/" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Follow on Instagram"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500 transition-all text-white/60"
              >
                <svg className="w-[15px] h-[15px] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[13px] font-bold mb-5 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Haj Packages', href: '/haj-packages' },
                { name: 'Umrah Packages', href: '/umrah-packages' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Contact Us', href: '/contact' }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/60 hover:text-gold-500 transition-colors text-[11px] flex items-center gap-1.5 font-medium">
                    <ChevronRight size={12} className="text-islamic-green" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer (Replaced Our Services) */}
          <div>
            <h4 className="text-[13px] font-bold mb-5 text-white uppercase tracking-wider font-poppins">Customer</h4>
            <ul className="space-y-3 font-poppins">
              {[
                { name: "FAQs", href: "/faq" },
                { name: "Terms & Conditions", href: "/terms-conditions" },
                { name: "Privacy Policy", href: "/privacy-policy" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/60 hover:text-gold-500 transition-colors text-[11px] flex items-center gap-1.5 font-medium">
                    <ChevronRight size={12} className="text-islamic-green" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-[13px] font-bold mb-5 text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold-500 shrink-0 mt-0.5" size={14} />
                <a 
                  href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31102.86659899451!2d77.605695!3d12.980912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1662eedb8229%3A0xf55d746519d8f134!2sAteeq%20Haj%20Tours%20and%20Travels!5e0!3m2!1sen!2sus!4v1779069208977!5m2!1sen!2sus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-white/60 leading-relaxed hover:text-gold-500 transition-colors font-medium"
                >
                  No – 15/2, Infantry Road cross<br/>Next to Blue Cross Chambers<br/>Bangalore -560001. Karnataka – India.
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold-500 shrink-0" size={14} />
                <a 
                  href="tel:+919845043339" 
                  className="text-[11px] text-white/60 hover:text-gold-500 transition-colors font-bold tracking-wide"
                >
                  +91 98450 43339
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold-500 shrink-0" size={14} />
                <a 
                  href="mailto:info@ateeqhajtours.com" 
                  className="text-[11px] text-white/60 hover:text-gold-500 transition-colors font-medium"
                >
                  info@ateeqhajtours.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="text-gold-500 shrink-0" size={14} />
                <a 
                  href="https://www.ateeqhajtours.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-white/60 hover:text-gold-500 transition-colors font-medium"
                >
                  www.ateeqhajtours.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Our Location */}
          <div>
            <h4 className="text-[13px] font-bold mb-5 text-white uppercase tracking-wider">Our Location</h4>
            <a 
              href="https://maps.google.com/?q=No+15/2,+Infantry+Road+cross,+Bangalore+-+560001"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-32 bg-gray-200 rounded-lg overflow-hidden relative group"
            >
              <Image 
                src="/images/pattern.png" 
                alt="Map" 
                fill 
                className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="text-red-500 drop-shadow-lg animate-bounce" size={26} fill="#ef4444" strokeWidth={1} />
              </div>
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-6"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40">
          <p>&copy; {new Date().getFullYear()} Ateeq Haj Tours. All Rights Reserved.</p>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="w-px h-3 bg-white/20"></span>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
