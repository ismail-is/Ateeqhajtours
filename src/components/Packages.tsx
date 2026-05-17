"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Plane, Building2, Utensils, Bus, ArrowRight } from "lucide-react";
import PackageModal from "./PackageModal";

const packages = [
  {
    id: 1,
    title: "Haj 2026\nStandard Package",
    image: "/images/kaaba.png",
    days: "20 DAYS",
    price: "₹ 4,75,000",
    distance: "Makkah: 800m | Madinah: 700m",
  },
  {
    id: 2,
    title: "Haj 2026\nDeluxe Package",
    image: "/images/makkah.png",
    days: "20 DAYS",
    price: "₹ 5,75,000",
    distance: "Makkah: 300m | Madinah: 250m",
  },
  {
    id: 3,
    title: "Haj 2026\nVIP Package",
    image: "/images/gallery-1.png",
    days: "35 DAYS",
    price: "₹ 7,25,000",
    distance: "Makkah: 150m | Madinah: 150m",
  },
  {
    id: 4,
    title: "Umrah\nEconomy Package",
    image: "/images/madinah.png",
    days: "15 DAYS",
    price: "₹ 65,000",
    distance: "Makkah: 800m | Madinah: 700m",
  },
];

export default function Packages() {
  const [selectedPkg, setSelectedPkg] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDetails = (pkg: any) => {
    setSelectedPkg(pkg);
    setIsModalOpen(true);
  };

  return (
    <section id="packages" className="py-20 bg-[#fafaf9] relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          x: [0, 30, 0],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-islamic-green/10 rounded-full blur-[100px] pointer-events-none"
      />

      <motion.div 
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-center md:text-left mx-auto md:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center md:justify-start gap-2 text-gold-500 font-bold text-[10px] tracking-[0.2em] uppercase mb-3"
            >
              <span className="text-gold-500">✦</span>
              Our Exclusive Packages
              <span className="text-gold-500">✦</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-playfair font-bold text-navy-900"
            >
              Haj & Umrah Packages
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="/haj-packages"
            className="hidden md:flex items-center gap-2 border border-navy-900/20 text-navy-900 px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-navy-900 hover:text-white transition-colors"
          >
            View All Packages
            <ArrowRight size={16} />
          </motion.a>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-navy-900/5 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title.replace('\n', ' ')}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-islamic-green text-navy-900 px-3 py-1 rounded-[4px] text-[10px] font-bold tracking-wider">
                  {pkg.days}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-[1.1rem] font-bold text-navy-900 leading-tight mb-5 whitespace-pre-line">
                  {pkg.title}
                </h3>

                {/* Icons Row */}
                <div className="flex justify-between items-center mb-5 px-1">
                  <div className="flex flex-col items-center gap-1.5">
                    <Plane size={18} className="text-gold-500" strokeWidth={1.5} />
                    <span className="text-[9px] text-gray-500 font-medium">Flight</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <Building2 size={18} className="text-gold-500" strokeWidth={1.5} />
                    <span className="text-[9px] text-gray-500 font-medium">Hotel</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <Utensils size={18} className="text-gold-500" strokeWidth={1.5} />
                    <span className="text-[9px] text-gray-500 font-medium">Meals</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <Bus size={18} className="text-gold-500" strokeWidth={1.5} />
                    <span className="text-[9px] text-gray-500 font-medium">Transport</span>
                  </div>
                </div>

                <p className="text-[11px] text-gray-500 mb-6 font-medium">
                  {pkg.distance}
                </p>

                <div className="pt-5 border-t border-gray-100">
                  <button 
                    onClick={() => handleOpenDetails(pkg)}
                    className="w-full bg-islamic-green hover:bg-[#c5e063] text-navy-900 py-2.5 rounded-lg text-[11px] font-bold transition-colors shadow-sm text-center cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center md:hidden">
          <a href="/haj-packages" className="flex items-center gap-2 border border-navy-900/20 text-navy-900 px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-navy-900 hover:text-white transition-colors">
            View All Packages
            <ArrowRight size={16} />
          </a>
        </div>
      </motion.div>

      {/* Reusable Package details popup Modal */}
      <PackageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pkg={selectedPkg}
      />
    </section>
  );
}
