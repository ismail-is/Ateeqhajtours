"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-12 overflow-hidden bg-[#24451b]">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 mix-blend-overlay opacity-30">
        <Image src="/images/pattern.png" alt="Pattern" fill className="object-cover" />
      </div>
      
      {/* Arabic Calligraphy Background (Simulation) */}
      <div className="absolute top-0 bottom-0 left-0 w-1/3 opacity-20 pointer-events-none flex items-center">
        <div className="text-[12rem] text-gold-500 font-serif leading-none whitespace-nowrap overflow-hidden select-none -translate-x-1/4">
          الحج والعمرة
        </div>
      </div>

      <motion.div 
        className="container mx-auto px-6 relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-[2rem] font-playfair font-bold text-white mb-3 leading-tight"
            >
              Answer the Call of Allah with <br className="hidden md:block"/> Peace, Comfort & Trust
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[13px] text-white/80 max-w-lg"
            >
              Let us take care of your journey while you focus on your Ibadah.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 shrink-0"
          >
            <a 
              href="#packages"
              className="flex items-center gap-2 bg-islamic-green text-navy-900 px-6 py-3 rounded-lg font-bold text-sm transition-all hover:bg-[#c5e063]"
            >
              Book Your Seat Now
              <ArrowRight size={16} />
            </a>
            
            <a 
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-gold-500 text-navy-900 px-6 py-3 rounded-lg font-bold text-sm transition-all hover:bg-[#ffc116]"
            >
              Chat on WhatsApp
              <MessageCircle size={16} />
            </a>
          </motion.div>
          
        </div>
      </motion.div>
      
      {/* Decorative minaret on right (Simulation) */}
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
        <div className="w-32 h-64 bg-gold-500 rounded-t-full mask-image-minaret"></div>
      </div>
    </section>
  );
}
