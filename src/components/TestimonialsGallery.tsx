"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";

export default function TestimonialsGallery() {
  return (
    <section className="py-20 bg-cream-50 relative overflow-hidden">
      <motion.div 
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
          
          {/* Left: Testimonial */}
          <div className="flex flex-col">
            <h3 className="text-xl font-playfair font-bold text-navy-900 mb-6">
              What Our Pilgrims Say
            </h3>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0b1b26] rounded-3xl p-8 relative shadow-xl flex-grow flex flex-col justify-between overflow-hidden"
            >
              {/* Decorative Quotes Background */}
              <div className="absolute top-4 left-4 text-islamic-green opacity-10 text-9xl font-serif leading-none select-none">
                &ldquo;
              </div>
              
              <div className="relative z-10">
                <p className="text-[13px] text-white/90 leading-relaxed mb-8">
                  Alhamdulillah! Ateeq Haj Tours made our Haj journey so comfortable and spiritual. Everything was well organized.
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 bg-white/5">
                    <Image src="/images/pilgrim.png" alt="Mohammed Irfan" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-islamic-green text-sm">Mohammed Irfan</h4>
                    <p className="text-[10px] text-white/60 mb-1">Haj 2024</p>
                    <div className="flex gap-0.5 text-gold-500">
                      {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation dots */}
              <div className="flex justify-center gap-2 mt-8">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
              </div>
            </motion.div>
          </div>

          {/* Right: Gallery */}
          <div className="flex flex-col">
            <h3 className="text-xl font-playfair font-bold text-navy-900 mb-6">
              Moments That Last Forever
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 h-[250px] md:h-full">
              {[
                "/images/kaaba.png",
                "/images/madinah.png",
                "/images/gallery-1.png",
                "/images/gallery-3.png"
              ].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <Image src={src} alt="Gallery image" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors" />
                </motion.div>
              ))}
              
              {/* View All Photos Button Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-[#0b1b26] rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-navy-900 transition-colors group"
              >
                <div className="w-10 h-10 border border-gold-500/30 rounded-lg flex items-center justify-center text-gold-500 group-hover:scale-110 transition-transform">
                  <Image src="/images/pattern.png" alt="icon" width={20} height={20} className="opacity-50" />
                </div>
                <div className="text-gold-500 font-bold text-[11px] text-center uppercase tracking-wide px-2">
                  View All<br />Photos
                </div>
                <ArrowRight size={16} className="text-gold-500" />
              </motion.div>
            </div>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}
