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
      text1: "+91 786 38 786 30\n+91 812 13 132 11",
      text2: ""
    },
    {
      icon: MessageCircle,
      color: "text-islamic-green",
      label: "WhatsApp",
      text1: "+91 786 38 786 30",
      text2: "Chat with us on WhatsApp"
    },
    {
      icon: Mail,
      color: "text-gold-500",
      label: "Email Us",
      text1: "info@ateeqhajtours.com",
      text2: "We'll respond as soon as possible"
    },
    {
      icon: MapPin,
      color: "text-gold-500",
      label: "Visit Us",
      text1: "#18-13-132/1/A/98, Tej Enclave,\nFateh Darwaza, Hyderabad,\nTelangana - 500002",
      text2: ""
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
    <main className="bg-[#fafaf9] min-h-screen font-poppins pt-20">
      <Navbar />

      {/* 1. Hero Section (Curved Split) */}
      <section className="relative h-[400px] md:h-[450px] w-full overflow-hidden bg-navy-900 flex">
        
        {/* Left Side (Dark Content) */}
        <div className="w-full md:w-[60%] lg:w-[45%] relative z-20 flex flex-col justify-center px-6 md:px-16 lg:px-24 bg-navy-900/85 md:bg-navy-900 h-full">
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <Image src="/images/pattern.png" alt="Pattern" fill className="object-cover" />
          </div>
          
          <div className="relative z-10 pt-4 md:pt-0">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[11px] text-white/60 mb-4 md:mb-6 font-medium">
              <Link href="/" className="hover:text-gold-500 transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span className="text-white">Contact Us</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-playfair font-bold text-white mb-4 leading-tight">
              We're Here to <br className="md:hidden" /><span className="text-islamic-green">Help You</span>
            </h1>
            <p className="text-white/80 text-xs md:text-[14px] max-w-md leading-relaxed mb-6">
              Have questions or need assistance with your Hajj or Umrah journey? 
              Our team is ready to help you 24/7 with care and guidance.
            </p>
            
            {/* Decorative Gold Stars */}
            <div className="flex items-center gap-2 text-gold-500/60">
               <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-500/60" />
               <div className="rotate-45 w-2 h-2 bg-gold-500/60" />
               <div className="rotate-45 w-3 h-3 bg-gold-500/80" />
               <div className="rotate-45 w-2 h-2 bg-gold-500/60" />
               <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-500/60" />
            </div>
          </div>
        </div>

        {/* Right Side (Image with SVG curve overlay) */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] lg:w-[70%] z-0 h-full">
          <Image src="/images/madinah.png" alt="Contact Us" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-navy-900/30" />
          
          {/* SVG Golden Arc separator */}
          <svg 
            className="absolute left-[-1px] top-0 h-full w-[150px] lg:w-[250px] text-navy-900 drop-shadow-[5px_0_0_rgba(238,176,18,0.5)] hidden md:block" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none" 
            fill="currentColor"
          >
            <path d="M0,0 C100,20 100,80 0,100 Z" />
          </svg>

          {/* Floating Card (24/7 Support) */}
          <div className="absolute right-12 lg:right-24 top-1/2 -translate-y-1/2 bg-[#0b1b26]/90 backdrop-blur-md p-10 rounded-[24px] shadow-2xl border border-white/10 text-center max-w-[300px] z-30 hidden md:block">
            <HeadphonesIcon size={48} className="text-islamic-green mx-auto mb-6" strokeWidth={1.5} />
            <h3 className="text-[22px] font-playfair font-bold text-white mb-3">24/7 Support</h3>
            <p className="text-white/70 text-[13px] leading-relaxed px-2">
              We are always here to assist you on your spiritual journey
            </p>
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
                  <div key={i} className="flex gap-5 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-[#0b1b26] rounded-xl flex flex-col justify-center items-center shrink-0 text-white gap-1.5">
                      <contact.icon size={22} className={contact.color} strokeWidth={1.5} />
                      <span className="text-[9px] font-bold tracking-wide uppercase">{contact.label}</span>
                    </div>
                    <div className="flex flex-col justify-center pt-1">
                      <p className="text-navy-900 font-bold text-[13px] whitespace-pre-line leading-relaxed">
                        {contact.text1}
                      </p>
                      {contact.text2 && (
                        <p className="text-gray-500 text-[12px] mt-1 font-medium">{contact.text2}</p>
                      )}
                    </div>
                  </div>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3807.828699478144!2d78.4716949!3d17.371911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97800c25a075%3A0xcb1b59c7f6d2f5a2!2sFateh%20Darwaza%2C%20Hyderabad%2C%20Telangana%20500002!5e0!3m2!1sen!2sin!4v1715874288123!5m2!1sen!2sin" 
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
