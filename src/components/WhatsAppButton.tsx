"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] flex items-center justify-center hover:bg-[#1ebd57] transition-colors group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-navy-900 text-sm font-semibold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none origin-right">
        Chat with us
      </span>
      
      {/* Ping Animation */}
      <span className="absolute -inset-2 rounded-full border-2 border-[#25D366] animate-ping opacity-20 pointer-events-none" />
    </motion.a>
  );
}
