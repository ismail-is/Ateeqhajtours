"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Search, HelpCircle, ChevronDown, 
  MessageCircle, Phone, Sparkles, BookOpen, 
  FileText, Building2, HeadphonesIcon, ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// High-quality FAQ Data
const faqs = [
  {
    category: "General & Rituals",
    icon: BookOpen,
    question: "What is the difference between Hajj and Umrah?",
    answer: "Hajj is the major pilgrimage and is one of the five pillars of Islam, performed once a year during the specific Islamic month of Dhu al-Hijgah. It is mandatory for every able-bodied Muslim who has the financial means. Umrah is a minor, voluntary pilgrimage that can be performed at any time of the year and involves fewer rituals (Ihram, Tawaf, Sa'i, and hair trimming)."
  },
  {
    category: "Documents & Visa",
    icon: FileText,
    question: "What documents are required for Hajj & Umrah visa processing?",
    answer: "For Hajj and Umrah visa processing, you generally need:\n\n✦ An international passport valid for at least 6 months from the date of travel.\n✦ Passport-sized photographs with a white background.\n✦ A copy of your PAN card.\n✦ A vaccination certificate (Meningitis ACWY135 and COVID-19 vaccination)."
  },
  {
    category: "Hotels & Proximity",
    icon: Building2,
    question: "How far are the hotels located from the Haram in Makkah and Madinah?",
    answer: "Proximity depends entirely on your chosen package category:\n\n✦ Standard Packages: Budget-friendly hotels located between 700m and 800m from the outer courtyards.\n✦ Deluxe Packages: Premium 4-star hotels located within 250m to 500m.\n✦ VIP & Premium Packages: Elite 5-star hotels located directly in the first row facing the sanctuaries (Markazia in Madinah and clock tower or first row in Makkah, within 100m to 150m)."
  },
  {
    category: "General & Rituals",
    icon: BookOpen,
    question: "Are Islamic scholars or guides available during our journey?",
    answer: "Yes, absolutely. All our tours are accompanied by highly respected Islamic scholars (Ulema) and experienced tour managers. They provide step-by-step guidance, daily lectures, and spiritual support to ensure your rituals are performed correctly according to the Quran and Sunnah."
  },
  {
    category: "Booking & Support",
    icon: HeadphonesIcon,
    question: "Do you provide medical support or local ground assistance in Saudi Arabia?",
    answer: "Yes, we have a dedicated, multilingual ground support team stationed in both Makkah and Madinah, available 24/7 to assist with emergencies, coordinate transfers, and guide you. We also coordinate basic medical assistance and pharmacy support if you fall ill during the stay."
  },
  {
    category: "Booking & Support",
    icon: HeadphonesIcon,
    question: "Can Hajj & Umrah packages be customized?",
    answer: "Umrah packages can be fully customized for individuals, families, or corporate groups (including custom travel dates, hotel choices, and private transport). Hajj packages, however, have fixed dates and pre-arranged itineraries due to strict government guidelines and flight schedules."
  },
  {
    category: "Booking & Support",
    icon: HeadphonesIcon,
    question: "What is your booking confirmation and cancellation policy?",
    answer: "Your booking is officially confirmed upon receipt of the initial deposit and your original passport. Cancellations and refunds depend on the time of request relative to your travel date and are subject to airline, visa, and hotel booking cancellation slabs. Please consult our team for complete terms."
  },
  {
    category: "General & Rituals",
    icon: BookOpen,
    question: "Is Zamzam water provided in the packages?",
    answer: "Yes, every pilgrim is provided with a complimentary 5-litre bottle of blessed Zamzam water at the airport during the return journey, subject to Saudi aviation and airport policies."
  }
];

const categories = [
  "All Questions",
  "General & Rituals",
  "Documents & Visa",
  "Hotels & Proximity",
  "Booking & Support"
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Filter FAQs based on search and category
  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "All Questions" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-[#fafaf9] min-h-screen font-poppins">
      <Navbar />

      {/* 1. Hero Section (Consistent Split Layout) */}
      <section className="relative pt-24 pb-12 bg-navy-900 overflow-hidden">
        {/* Background Split */}
        <div className="absolute inset-0 z-0 flex">
          {/* Left Dark Green with Pattern */}
          <div className="w-full lg:w-1/2 relative bg-[#0b1b26]">
            <Image src="/images/pattern.png" alt="Pattern" fill className="object-cover opacity-10 mix-blend-overlay" />
          </div>
          {/* Right Image */}
          <div className="hidden lg:block w-1/2 relative">
            <Image src="/images/makkah.png" alt="Makkah Sanctuary" fill className="object-cover opacity-85" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b26] to-transparent" />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-8 lg:pt-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] text-white/60 mb-6 font-medium">
            <Link href="/" className="hover:text-gold-500 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">FAQs</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
            {/* Title & Description */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-playfair font-bold text-white leading-tight mb-4">
                Frequently Asked <span className="text-islamic-green">Questions</span>
              </h1>
              <p className="text-white/80 text-sm md:text-[15px] leading-relaxed max-w-md">
                Find quick, clear answers to common questions about visa requirements, accommodations, packages, and spiritual guidance.
              </p>
            </div>

            {/* Inline Info Badge Box */}
            <div className="hidden md:flex items-center gap-6 bg-[#0b1b26]/80 backdrop-blur-md border border-islamic-green/30 rounded-full px-8 py-4 shadow-xl">
              {[
                { icon: HelpCircle, text: "Instant\nAnswers" },
                { icon: Phone, text: "24/7 Call\nAssistance" },
                { icon: MessageCircle, text: "Direct WhatsApp\nSupport" },
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

      {/* 2. Search & Category Filters section */}
      <section className="py-12 relative z-20">
        <div className="container mx-auto px-6">
          
          {/* Search bar */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative bg-white rounded-2xl border border-gray-200 shadow-sm px-5 py-2 flex items-center focus-within:border-islamic-green transition-colors">
              <Search className="text-gray-400 mr-3" size={20} />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for questions (e.g. visa, standard package, hotels)..."
                className="w-full text-[14px] text-navy-900 bg-transparent border-none outline-none placeholder-gray-400 py-2.5"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="text-gray-400 hover:text-navy-900 text-xs font-semibold px-2"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Capsules */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(null); // Close active accordion when changing category
                }}
                className={`px-5 py-2.5 rounded-full text-[12px] font-bold transition-all border ${
                  activeCategory === category
                    ? "bg-islamic-green border-islamic-green text-navy-900 shadow-md scale-105"
                    : "bg-white border-gray-200 text-gray-600 hover:border-islamic-green hover:text-navy-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 3. Accordions Area */}
          <div className="max-w-3xl mx-auto min-h-[300px]">
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  const IconComponent = faq.icon;

                  return (
                    <motion.div 
                      key={idx}
                      layout
                      className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:border-gold-500/50 hover:shadow-md"
                    >
                      {/* Accordion Trigger Header */}
                      <button
                        onClick={() => toggleAccordion(idx)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none select-none"
                      >
                        <div className="flex items-center gap-4 pr-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 transition-colors ${
                            isOpen 
                              ? "bg-islamic-green/10 border-islamic-green/20 text-islamic-green" 
                              : "bg-gray-50 border-gray-100 text-navy-900/50"
                          }`}>
                            <IconComponent size={18} strokeWidth={2} />
                          </div>
                          <span className="text-[14px] md:text-sm font-bold text-navy-900 leading-snug">
                            {faq.question}
                          </span>
                        </div>
                        
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 ${
                            isOpen 
                              ? "bg-gold-500 text-navy-900 border-gold-500" 
                              : "bg-gray-50 text-gray-500 border-gray-200"
                          }`}
                        >
                          <ChevronDown size={16} strokeWidth={2.5} />
                        </motion.div>
                      </button>

                      {/* Accordion Content Panel */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-[#fafaf9]/40 ml-14">
                              <p className="text-[13px] text-gray-600 leading-relaxed whitespace-pre-line font-medium font-poppins">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <HelpCircle size={48} className="text-gray-300 mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-sm font-bold text-navy-900 mb-2">No matching questions found</h3>
                <p className="text-xs text-gray-500">Try searching for keywords like "visa", "meals" or select another category above.</p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 4. Still Have Questions Section */}
      <section className="py-20 bg-white border-t border-gray-200 relative overflow-hidden">
        {/* Background ambient orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-islamic-green/5 blur-[90px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-gold-500/5 blur-[90px] pointer-events-none" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b1b26]/5 border border-[#0b1b26]/10 text-[#0b1b26] text-[10px] font-bold tracking-wider uppercase mb-6">
              <Sparkles size={12} className="text-gold-500" />
              Spiritual Support Line
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-500 text-xs md:text-[14px] leading-relaxed mb-8">
              If your question isn’t listed here, our dedicated travel support team and advisors are available round-the-clock to guide you with care and detail.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/918197593479"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-islamic-green hover:bg-[#c5e063] text-navy-900 py-3.5 px-8 rounded-xl font-bold transition-all shadow-md text-xs cursor-pointer group"
              >
                <MessageCircle size={16} className="fill-navy-900 text-navy-900 group-hover:scale-110 transition-transform" />
                Chat via WhatsApp
              </a>
              <a
                href="tel:+919845043339"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0b1b26] hover:bg-[#112a3b] text-white py-3.5 px-8 rounded-xl font-bold transition-all shadow-md text-xs cursor-pointer"
              >
                <Phone size={16} className="text-gold-500" />
                Call Advisor Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
