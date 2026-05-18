"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Phone, BookOpen, MessageSquare, Sparkles, AlertCircle } from "lucide-react";
import Image from "next/image";

// Dynamic images for the auto-sliding background of the popup card
const slideImages = [
  "/images/pilgrim.png",
  "/images/kaaba.png",
  "/images/madinah.png",
  "/images/makkah.png",
];

export default function EnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    package: "Umrah Economy Package",
    message: "",
  });
  const [error, setError] = useState("");

  // Delay pop up by 4 seconds after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000); // 4 seconds delay

    return () => clearTimeout(timer);
  }, []);

  // Auto-advance the side image slider every 4 seconds when the popup is open
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slideImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!formData.phone.trim()) {
      setError("Please enter your phone number");
      return;
    }

    // Format WhatsApp message
    const waNumber = "918197593479";
    const greeting = "Assalamu Alaikum!";
    const intro = "I would like to make a package enquiry via the website form.";
    const details = `*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Package:* ${formData.package}${formData.message.trim() ? `\n*Message:* ${formData.message}` : ""}`;
    const fullText = `${greeting}\n\n${intro}\n\n${details}`;

    const whatsappUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(fullText)}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Close the popup
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="bg-navy-900 border border-white/10 rounded-[2.5rem] w-full max-w-4xl shadow-2xl relative overflow-hidden z-10 my-8 max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
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
              className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
            />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/85 hover:text-white hover:bg-gold-500 hover:border-gold-500 transition-all duration-300 shadow-lg cursor-pointer"
              aria-label="Close popup"
            >
              <X size={18} />
            </button>

            {/* Content Layout */}
            <div className="grid md:grid-cols-[1.1fr_1.3fr] relative z-10">
              {/* Left Side: Animated Image Slider */}
              <div className="relative h-[200px] md:h-auto min-h-[200px] md:min-h-[500px] overflow-hidden group">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={currentSlideIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 0.65, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={slideImages[currentSlideIndex]}
                      alt="Haj and Umrah Pilgrimage"
                      fill
                      priority
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Visual Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-navy-900 via-navy-900/40 to-transparent opacity-95 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-navy-900/80 pointer-events-none" />

                {/* Floating Content over the Image Slider */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-1.5 text-gold-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-2"
                  >
                    <Sparkles size={12} className="animate-pulse" />
                    <span>Ateeq Haj Tours</span>
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl md:text-3xl font-playfair font-bold text-white leading-tight mb-3"
                  >
                    Start Your Sacred Journey
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-xs text-white/70 leading-relaxed max-w-sm hidden md:block"
                  >
                    Submit an enquiry now to connect directly with our experts on WhatsApp. We provide premium packages, top accommodation near the Holy Sanctuaries, and complete spiritual guidance.
                  </motion.p>
                </div>
              </div>

              {/* Right Side: Elegant Enquiry Form */}
              <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <div>
                  {/* Category Indicator */}
                  <div className="flex items-center gap-1.5 text-gold-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-2.5">
                    <span>✦</span>
                    Quick Enquiry Form
                    <span>✦</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl font-playfair font-bold text-white leading-tight mb-2">
                    Request Package Details
                  </h2>
                  <p className="text-xs text-white/60 mb-6">
                    Fill out this form to chat with us instantly on WhatsApp and get complete pricing and itineraries.
                  </p>

                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-2 text-red-400 text-xs font-semibold"
                    >
                      <AlertCircle size={16} className="shrink-0" />
                      <span>{error}</span>
                    </motion.div>
                  )}

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Input */}
                    <div className="space-y-1">
                      <label htmlFor="popup-name" className="block text-[10px] uppercase tracking-wider font-bold text-white/50">
                        Full Name <span className="text-gold-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                        <input
                          id="popup-name"
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-xs placeholder-white/30 focus:outline-none focus:border-gold-500 focus:bg-white/10 transition-all font-medium"
                        />
                      </div>
                    </div>

                    {/* Phone Input */}
                    <div className="space-y-1">
                      <label htmlFor="popup-phone" className="block text-[10px] uppercase tracking-wider font-bold text-white/50">
                        WhatsApp Number <span className="text-gold-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                        <input
                          id="popup-phone"
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-xs placeholder-white/30 focus:outline-none focus:border-gold-500 focus:bg-white/10 transition-all font-medium"
                        />
                      </div>
                    </div>

                    {/* Package Select */}
                    <div className="space-y-1">
                      <label htmlFor="popup-package" className="block text-[10px] uppercase tracking-wider font-bold text-white/50">
                        Package of Interest
                      </label>
                      <div className="relative">
                        <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                        <select
                          id="popup-package"
                          name="package"
                          value={formData.package}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-10 text-white text-xs focus:outline-none focus:border-gold-500 focus:bg-white/10 transition-all font-medium appearance-none cursor-pointer"
                        >
                          <option value="Haj 2026 Standard Package" style={{ color: "#0a1b24", backgroundColor: "#ffffff" }}>Haj 2026 - Standard Package</option>
                          <option value="Haj 2026 Deluxe Package" style={{ color: "#0a1b24", backgroundColor: "#ffffff" }}>Haj 2026 - Deluxe Package</option>
                          <option value="Haj 2026 VIP Package" style={{ color: "#0a1b24", backgroundColor: "#ffffff" }}>Haj 2026 - VIP Package</option>
                          <option value="Umrah Economy Package" style={{ color: "#0a1b24", backgroundColor: "#ffffff" }}>Umrah - Economy Package</option>
                          <option value="Custom Group Tour" style={{ color: "#0a1b24", backgroundColor: "#ffffff" }}>Custom / Group Tour Enquiry</option>
                          <option value="General Enquiry" style={{ color: "#0a1b24", backgroundColor: "#ffffff" }}>General Information</option>
                        </select>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none text-[10px]">▼</span>
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-1">
                      <label htmlFor="popup-message" className="block text-[10px] uppercase tracking-wider font-bold text-white/50">
                        Special Message / Requests <span className="text-white/30">(Optional)</span>
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 text-white/40" size={16} />
                        <textarea
                          id="popup-message"
                          name="message"
                          rows={2}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Any specific hotel proximity requirements or number of members?"
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white text-xs placeholder-white/30 focus:outline-none focus:border-gold-500 focus:bg-white/10 transition-all font-medium resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2.5 bg-islamic-green hover:bg-[#c5e063] text-navy-900 py-3.5 px-6 rounded-xl font-bold transition-all shadow-[0_4px_20px_rgba(178,210,53,0.25)] hover:shadow-[0_4px_30px_rgba(178,210,53,0.45)] text-xs cursor-pointer group hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      Connect via WhatsApp
                    </button>
                  </form>
                </div>

                {/* Bottom Cancel Link */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 text-white/45 hover:text-white/70 text-[10px] font-semibold tracking-wider uppercase transition-colors cursor-pointer self-center"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
