"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "#about" },
    { name: "Haj Packages", href: "#packages" },
    { name: "Umrah Packages", href: "#packages" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${
        isScrolled ? "bg-navy-900/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 relative">
            {/* A placeholder for the logo icon, we can use a custom SVG or just a stylized element */}
            <div className="absolute inset-0 border-2 border-gold-500 rounded-lg rotate-45" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-5 bg-gold-500 rounded-sm" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-playfair font-bold text-[1.3rem] leading-none text-gold-500 tracking-wide uppercase">
              Ateeq Haj Tours
            </span>
            <span className="text-[0.65rem] text-white/90 tracking-widest mt-1">
              HAJ & UMRAH SERVICES
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[13px] font-medium transition-colors relative group ${
                link.active ? "text-white" : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
              <span 
                className={`absolute -bottom-[5px] left-0 h-[2px] transition-all duration-300 ${
                  link.active ? "w-full bg-islamic-green" : "w-0 bg-islamic-green group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* Phone CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-islamic-green flex items-center justify-center text-navy-900 shadow-[0_0_15px_rgba(178,210,53,0.3)]">
            <Phone size={18} fill="currentColor" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-white/80 uppercase tracking-wider">Call for Assistance</span>
            <a href="tel:+917863878630" className="text-islamic-green font-bold text-sm tracking-wide">
              +91 786 38 786 30
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-navy-900 border-t border-white/10 p-6 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-sm font-medium ${link.active ? "text-islamic-green" : "text-white"}`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex items-center gap-3 mt-2">
            <div className="w-10 h-10 rounded-full bg-islamic-green flex items-center justify-center text-navy-900">
              <Phone size={18} fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-white/80 uppercase">Call for Assistance</span>
              <a href="tel:+917863878630" className="text-islamic-green font-bold text-sm">
                +91 786 38 786 30
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
