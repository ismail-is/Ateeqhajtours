"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-cream-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            Sacred Moments
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-navy-900 mb-6"
          >
            Our Gallery
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 relative h-[300px] md:h-[624px] rounded-3xl overflow-hidden group shadow-lg"
          >
            <Image src="/images/gallery-1.png" alt="Gallery 1" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Small Image 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative h-[300px] rounded-3xl overflow-hidden group shadow-lg"
          >
            <Image src="/images/gallery-2.png" alt="Gallery 2" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Small Image 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-[300px] rounded-3xl overflow-hidden group shadow-lg"
          >
            <Image src="/images/gallery-3.png" alt="Gallery 3" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/50 text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2">
                View All Photos
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
