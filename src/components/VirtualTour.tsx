"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, Eye, Maximize, X } from "lucide-react";

export default function VirtualTour() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <section className="py-24 bg-cream-50 relative overflow-hidden">
      <motion.div 
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-gold-500 font-bold text-[10px] tracking-[0.2em] uppercase mb-3"
          >
            <span className="text-gold-500">✦</span>
            Immersive Experience
            <span className="text-gold-500">✦</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-playfair font-bold text-navy-900 mb-4"
          >
            360° Virtual Tour
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm md:text-base max-w-xl mx-auto"
          >
            Experience the majesty of Makkah and Al-Masjid Al-Haram in full 360 degrees. Drag to look around and explore the sacred sites before your journey begins.
          </motion.p>
        </div>

        <div 
          ref={containerRef}
          className={`relative overflow-hidden shadow-2xl mx-auto transition-all duration-700 bg-navy-900 ${isFullscreen ? 'w-screen h-screen rounded-none border-none' : 'max-w-6xl h-[400px] md:h-[600px] rounded-[2rem] border border-navy-900/10 group'}`}
        >
          <AnimatePresence mode="wait">
            {!isPlaying ? (
              <motion.div 
                key="preview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                {/* Background Image */}
                <Image 
                  src="/images/makkah.png" 
                  alt="360 Virtual Tour Mecca Kaaba" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/50 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-transparent" />

                {/* 360 Badge */}
                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2 shadow-lg">
                  <Eye size={16} className="text-gold-500" />
                  360° Interactive Tour
                </div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-24 h-24 bg-gold-500/90 backdrop-blur-md rounded-full flex items-center justify-center text-navy-900 shadow-[0_0_40px_rgba(238,176,18,0.5)] mb-6 border-4 border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <Play size={36} className="ml-2" fill="currentColor" />
                  </div>
                  <div className="text-white font-playfair font-bold text-3xl tracking-wide drop-shadow-lg">
                    Click to Explore
                  </div>
                  <div className="text-white/80 text-sm mt-3 flex items-center gap-2">
                    Makkah • Kaaba • Al-Masjid
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="iframe"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-navy-900 overflow-hidden"
              >
                {/* CSS Crop Wrapper: This scales and shifts the iframe to hide the 360tr.com website header and footer, showing ONLY the 360 viewer */}
                <div className="absolute top-[-150px] bottom-[-100px] left-0 right-0">
                  <iframe 
                    src="https://www.360tr.com/kaaba-al-masjid-al-haram-mecca-virtual-tour_7697b4b28_en.html" 
                    className="w-full h-full border-none"
                    allowFullScreen
                    title="Kaaba 360 Virtual Tour"
                    loading="lazy"
                  />
                </div>

                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none" />

                {/* Controls Overlay */}
                <div className="absolute top-6 right-6 flex items-center gap-3 z-20">
                  <button 
                    onClick={toggleFullscreen}
                    className="bg-navy-900/80 hover:bg-gold-500 hover:text-navy-900 text-white p-3 rounded-xl backdrop-blur-md transition-colors shadow-lg border border-white/10 flex items-center justify-center"
                    title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                  >
                    {isFullscreen ? <X size={20} /> : <Maximize size={20} />}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
