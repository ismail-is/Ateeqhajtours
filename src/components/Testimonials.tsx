"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const Counter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const duration = 2000;
      
      if (progress < duration) {
        setCount(Math.floor((end * progress) / duration));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end]);

  return <span>{count}{suffix}</span>;
};

export default function Testimonials() {
  return (
    <section className="py-24 bg-navy-900 relative">
      <div className="absolute inset-0 opacity-5">
        <Image src="/images/pattern.png" alt="pattern" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          
          {/* Left: Statistics */}
          <div className="grid grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-4xl md:text-5xl font-playfair font-bold text-gold-500 mb-2">
                <Counter end={10} suffix="K+" />
              </div>
              <div className="text-cream-50/80">Happy Pilgrims</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-4xl md:text-5xl font-playfair font-bold text-islamic-green mb-2">
                <Counter end={20} suffix="+" />
              </div>
              <div className="text-cream-50/80">Years Experience</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-4xl md:text-5xl font-playfair font-bold text-gold-500 mb-2">
                <Counter end={100} suffix="+" />
              </div>
              <div className="text-cream-50/80">Expert Guides</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="text-4xl md:text-5xl font-playfair font-bold text-islamic-green mb-2">
                <Counter end={98} suffix="%" />
              </div>
              <div className="text-cream-50/80">Satisfaction Rate</div>
            </motion.div>
          </div>

          {/* Center: Testimonial Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-cream-50 rounded-3xl p-8 relative shadow-2xl"
          >
            <div className="absolute -top-6 right-8 text-gold-500 opacity-20">
              <Quote size={80} fill="currentColor" />
            </div>
            
            <div className="flex gap-1 mb-6 text-gold-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            
            <p className="text-lg text-gray-700 italic mb-8 relative z-10 leading-relaxed">
              "My family and I had the most spiritual and hassle-free Umrah experience with Ateeq Haj. Their attention to detail, luxury accommodations, and spiritual guidance were beyond our expectations. Truly a premium service."
            </p>
            
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold-500">
                <Image src="/images/pilgrim.png" alt="Pilgrim" fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-navy-900 font-playfair">Abdullah Al-Rahman</h4>
                <p className="text-sm text-gray-500">Premium Umrah Package</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Why Choose Us */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md"
          >
            <h3 className="text-2xl font-playfair font-bold text-white mb-6">Why Choose Ateeq Haj?</h3>
            <ul className="space-y-4">
              {['VIP Meet & Greet Services', 'Private Luxury Transfers', 'Scholarly Guidance', '5-Star Accommodations', '24/7 Dedicated Support'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-cream-50/90">
                  <div className="w-2 h-2 rounded-full bg-gold-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
