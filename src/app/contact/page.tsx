"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Phone, MessageCircle, Mail, MapPin, 
  Send, HeadphonesIcon, MessageSquare, 
  UserCircle, Handshake, ShieldCheck, ChevronRight
} from "lucide-react";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      color: "text-gold-500",
      label: "Call Us",
      text1: "+91 98450 43339",
      text2: "",
      href: "tel:+919845043339"
    },
    {
      icon: MessageCircle,
      color: "text-islamic-green",
      label: "WhatsApp",
      text1: "+91 81975 93479",
      text2: "Chat with us on WhatsApp",
      href: "https://wa.me/918197593479"
    },
    {
      icon: Mail,
      color: "text-gold-500",
      label: "Email Us",
      text1: "info@ateeqhajtours.com",
      text2: "We'll respond as soon as possible",
      href: "mailto:info@ateeqhajtours.com"
    },
    {
      icon: MapPin,
      color: "text-gold-500",
      label: "Visit Us",
      text1: "No – 15/2, Infantry Road cross\nNext to Blue Cross Chambers\nBangalore -560001\nKarnataka – India.",
      text2: "",
      href: "https://maps.google.com/?q=No+15/2,+Infantry+Road+cross,+Bangalore+-+560001"
    }
  ];

  const features = [
    {
      icon: MessageSquare,
      title: "Quick Response",
      desc: "We respond to all inquiries within 24 hours."
    },
    {
      icon: UserCircle,
      title: "Expert Guidance",
      desc: "Get professional advice from our experienced team."
    },
    {
      icon: Handshake,
      title: "Personalized Support",
      desc: "We help you choose the best package for your needs."
    },
    {
      icon: ShieldCheck,
      title: "Trusted Service",
      desc: "Thousands of pilgrims trust us every year."
    }
  ];

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
            <Image src="/images/madinah.png" alt="Contact Us" fill className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b26] to-transparent" />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-8 lg:pt-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] text-white/60 mb-6 font-medium">
            <Link href="/" className="hover:text-gold-500 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">Contact Us</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
            {/* Title & Description */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-playfair font-bold text-white leading-tight mb-4">
                Contact <span className="text-islamic-green">Us</span>
              </h1>
              <p className="text-white/80 text-sm md:text-[15px] leading-relaxed max-w-md">
                Have questions or need assistance with your Hajj or Umrah journey? Our team is ready to help you 24/7 with care and guidance.
              </p>
            </div>

            {/* Inline Features Box */}
            <div className="hidden md:flex items-center gap-6 bg-[#0b1b26]/80 backdrop-blur-md border border-islamic-green/30 rounded-full px-8 py-4 shadow-xl">
              {[
                { icon: Phone, text: "Call Us\nAnytime" },
                { icon: HeadphonesIcon, text: "24/7 Live\nSupport" },
                { icon: ShieldCheck, text: "Trusted\nGuidance" },
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

      {/* 2. Main Content Area */}
      <section className="py-16 md:py-24 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            
            {/* Column 1: Get in Touch */}
            <div>
              <h3 className="text-2xl font-playfair font-bold text-navy-900 mb-8 border-b border-gray-200 pb-4">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {contactMethods.map((contact, i) => (
                  <a 
                    key={i} 
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex gap-5 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 block cursor-pointer group"
                  >
                    <div className="w-16 h-16 bg-[#0b1b26] rounded-xl flex flex-col justify-center items-center shrink-0 text-white gap-1.5 group-hover:bg-[#112a3b] transition-colors">
                      <contact.icon size={22} className={contact.color} strokeWidth={1.5} />
                      <span className="text-[9px] font-bold tracking-wide uppercase">{contact.label}</span>
                    </div>
                    <div className="flex flex-col justify-center pt-1">
                      <p className="text-navy-900 font-bold text-[13px] whitespace-pre-line leading-relaxed group-hover:text-gold-500 transition-colors">
                        {contact.text1}
                      </p>
                      {contact.text2 && (
                        <p className="text-gray-500 text-[12px] mt-1 font-medium">{contact.text2}</p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Send Us a Message */}
            <div>
              <h3 className="text-2xl font-playfair font-bold text-navy-900 mb-8 border-b border-gray-200 pb-4">
                Send Us a Message
              </h3>
              <form className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[12px] font-bold text-navy-900 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Your full name" 
                      className="w-full bg-[#fafaf9] border border-gray-200 rounded-lg px-4 py-3 text-[13px] focus:outline-none focus:border-islamic-green focus:ring-1 focus:ring-islamic-green transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-navy-900 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="Your phone number" 
                      className="w-full bg-[#fafaf9] border border-gray-200 rounded-lg px-4 py-3 text-[13px] focus:outline-none focus:border-islamic-green focus:ring-1 focus:ring-islamic-green transition-colors" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[12px] font-bold text-navy-900 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full bg-[#fafaf9] border border-gray-200 rounded-lg px-4 py-3 text-[13px] focus:outline-none focus:border-islamic-green focus:ring-1 focus:ring-islamic-green transition-colors" 
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-navy-900 mb-2">Subject</label>
                  <select className="w-full bg-[#fafaf9] border border-gray-200 rounded-lg px-4 py-3 text-[13px] text-gray-500 focus:outline-none focus:border-islamic-green focus:ring-1 focus:ring-islamic-green transition-colors appearance-none">
                    <option value="">Select a subject</option>
                    <option value="Hajj">Hajj Package Inquiry</option>
                    <option value="Umrah">Umrah Package Inquiry</option>
                    <option value="Visa">Visa Assistance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-navy-900 mb-2">Your Message</label>
                  <textarea 
                    placeholder="Type your message here..." 
                    rows={4}
                    className="w-full bg-[#fafaf9] border border-gray-200 rounded-lg px-4 py-3 text-[13px] focus:outline-none focus:border-islamic-green focus:ring-1 focus:ring-islamic-green transition-colors resize-none" 
                  />
                </div>

                <button 
                  type="button"
                  className="w-full bg-islamic-green hover:bg-[#c5e063] text-navy-900 font-bold py-3.5 rounded-xl flex justify-center items-center gap-2 transition-colors shadow-sm mt-2"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>

            {/* Column 3: Our Office Location */}
            <div>
              <h3 className="text-2xl font-playfair font-bold text-navy-900 mb-8 border-b border-gray-200 pb-4">
                Our Office Location
              </h3>
              <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white flex flex-col h-[calc(100%-80px)] min-h-[450px]">
                
                {/* Map Area */}
                <div className="flex-1 w-full bg-gray-100 relative min-h-[250px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8860714777977!2d77.5969542!3d12.9791443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16790adbf233%3A0xe4c61df9f20d75b8!2sInfantry%20Rd%2C%20Tasker%20Town%2C%20Shivajinagar%2C%20Bengaluru%2C%20Karnataka%20560001!5e0!3m2!1sen!2sin!4v1715874288123!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
                
                {/* Information Card Overlap */}
                <div className="bg-[#0b1b26] p-8 rounded-t-[30px] -mt-10 relative z-10 mx-auto w-[90%] shadow-xl flex gap-5">
                  <div className="text-gold-500 shrink-0 mt-1 opacity-80">
                     {/* Simplified Mosque Icon / Welcome Icon */}
                     <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                        <circle cx="12" cy="12" r="4"/>
                     </svg>
                  </div>
                  <div>
                    <h4 className="text-gold-500 font-bold text-[16px] mb-2">We Welcome You</h4>
                    <p className="text-white/80 text-[12px] leading-relaxed">
                      You are welcome to visit our office. Our team will be happy to assist you with the best guidance for your Hajj & Umrah journey.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Features Strip */}
      <section className="py-12 border-t border-gray-200 bg-[#fafaf9]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="text-gold-500 shrink-0 bg-gold-500/10 p-3 rounded-full">
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-navy-900 mb-1.5">{feature.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
