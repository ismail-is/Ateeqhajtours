"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ShieldCheck, FileText, Calendar, Compass, 
  MapPin, Phone, Mail, Award, CheckCircle2, 
  Scale, ClipboardCheck, AlertTriangle, ChevronRight, UserCheck
} from "lucide-react";
import { motion } from "framer-motion";

const termsList = [
  {
    id: "booking",
    icon: Calendar,
    title: "1. Booking & Registration",
    points: [
      "All bookings are subject to availability and official confirmation by Ateeq Haj Tours and Travels.",
      "Full payment must be completed within the specific timeline provided by our booking desk; failure to meet the payment deadlines may result in automatic booking cancellation."
    ]
  },
  {
    id: "eligibility",
    icon: UserCheck,
    title: "2. Documents & Eligibility",
    points: [
      "Passports must be internationally valid for at least 6 months beyond your scheduled travel dates.",
      "It is the pilgrim's sole responsibility to submit correct and authentic documents (original Passport, Aadhaar Card, linked PAN Card, photographs, medical vaccination records, etc.) as requested.",
      "Any discrepancy, name mismatch, or incomplete documentation may lead to rejection by the Saudi Embassy or Indian immigration authorities, and the company will not be held responsible for such rejections.",
      "PAN Card should be securely linked with Aadhaar Card as per the prevailing Government of India mandates."
    ]
  },
  {
    id: "visa",
    icon: ClipboardCheck,
    title: "3. Visa & Government Approvals",
    points: [
      "Visa issuance is strictly subject to the regulations and approval of the Saudi Consulate and the Ministry of Hajj & Umrah.",
      "In case of visa refusal, unexpected delay, or changes in government policies beyond our control, the company will not be held liable. Standard cancellation policies will apply to all bookings."
    ]
  },
  {
    id: "inclusions",
    icon: Award,
    title: "4. Package Inclusions & Exclusions",
    points: [
      "Inclusions: Our packages typically include return airfare, pilgrimage visa processing, hotel accommodations, full board meals, comfortable inland ground transport, laundry, and guided Ziyarat tours as explicitly documented in the itinerary.",
      "Exclusions: Excess baggage charges, personal expenses (shopping, SIM cards, extra room service), optional private tours, and anything not explicitly mentioned in the package inclusions."
    ]
  },
  {
    id: "itinerary",
    icon: Compass,
    title: "5. Itinerary & Services",
    points: [
      "The published itinerary is tentative and subject to change due to local weather conditions, international air schedules, or official instructions issued by Saudi Hajj authorities.",
      "Hotel check-in/check-out times, room allocation, and meal preferences will strictly follow local Saudi hospitality norms and overall availability."
    ]
  },
  {
    id: "cancellation",
    icon: Scale,
    title: "6. Cancellations & Refunds",
    points: [
      "Cancellations requested after visa processing has commenced or flight tickets have been issued will attract cancellation charges in accordance with our official Cancellation Policy.",
      "No refunds will be granted for unused services, partial tour exits, no-shows, or early returns of pilgrims."
    ]
  },
  {
    id: "medical",
    icon: ShieldCheck,
    title: "7. Travel Insurance & Medical",
    points: [
      "Pilgrims must completely disclose any existing health condition or medical history that prevents them from traveling or performing rituals. We will not be held responsible for medical emergencies arising from non-disclosure.",
      "The company is not liable for personal medical emergencies, hospitalizations, or treatments during travel.",
      "Any medical emergency coordination or local ground support will be arranged purely on a best-efforts basis subject to local availability."
    ]
  },
  {
    id: "conduct",
    icon: ClipboardCheck,
    title: "8. Code of Conduct",
    points: [
      "Pilgrims are expected to maintain strict discipline, follow group timings during guided transfers, and respect the deep religious and cultural decorum of the Holy Cities."
    ]
  },
  {
    id: "force-majeure",
    icon: AlertTriangle,
    title: "9. Force Majeure",
    points: [
      "The company is not responsible for any loss, damage, delay, or cancellation caused by natural disasters, earthquakes, pandemics, sudden government restrictions, wars, strikes, or any other force majeure events."
    ]
  },
  {
    id: "liability",
    icon: Scale,
    title: "10. Liability & Jurisdiction",
    points: [
      "Any dispute, conflict, or claim arising out of these services shall be subject to the exclusive jurisdiction of the competent courts in Bangalore, India."
    ]
  },
  {
    id: "consent",
    icon: CheckCircle2,
    title: "11. Consent & Privacy",
    points: [
      "By signing up and registering for our tours, the pilgrim agrees unconditionally to all the above terms and conditions and grants explicit consent to process their personal information in accordance with our Privacy Policy."
    ]
  }
];

export default function TermsConditionsPage() {
  return (
    <main className="bg-[#fafaf9] min-h-screen font-poppins">
      <Navbar />

      {/* 1. Hero Section (Split Layout) */}
      <section className="relative pt-24 pb-12 bg-navy-900 overflow-hidden">
        {/* Background Split */}
        <div className="absolute inset-0 z-0 flex">
          {/* Left Dark Green with Pattern */}
          <div className="w-full lg:w-1/2 relative bg-[#0b1b26]">
            <Image src="/images/pattern.png" alt="Pattern" fill className="object-cover opacity-10 mix-blend-overlay" />
          </div>
          {/* Right Image */}
          <div className="hidden lg:block w-1/2 relative">
            <Image src="/images/makkah.png" alt="Terms background" fill className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b26] to-transparent" />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-8 lg:pt-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] text-white/60 mb-6 font-medium">
            <Link href="/" className="hover:text-gold-500 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">Terms & Conditions</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
            {/* Title & Description */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-playfair font-bold text-white leading-tight mb-4">
                Terms & <span className="text-islamic-green">Conditions</span>
              </h1>
              <p className="text-white/80 text-sm md:text-[15px] leading-relaxed max-w-md">
                Please read our official terms and conditions carefully. These govern your bookings, document requirements, and pilgrimage logistics.
              </p>
            </div>

            {/* Inline Info Badge Box */}
            <div className="hidden md:flex items-center gap-6 bg-[#0b1b26]/80 backdrop-blur-md border border-islamic-green/30 rounded-full px-8 py-4 shadow-xl">
              {[
                { icon: ShieldCheck, text: "Official\nAgreement" },
                { icon: Scale, text: "Legal\nJurisdiction" },
                { icon: ClipboardCheck, text: "Pilgrim\nConsent" },
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

      {/* 2. Official Contact Info Block */}
      <section className="py-12 relative z-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white rounded-3xl p-8 border border-gray-200 shadow-sm relative overflow-hidden flex flex-col md:flex-row justify-between gap-8 items-start md:items-center"
          >
            {/* Glowing top line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-500 via-islamic-green to-gold-500" />
            
            <div className="space-y-4">
              <span className="text-[10px] font-extrabold bg-[#0b1b26] text-gold-500 px-3 py-1 rounded-full uppercase tracking-wider">
                Official Entity Details
              </span>
              <h2 className="text-xl sm:text-2xl font-playfair font-bold text-navy-900 leading-tight">
                Ateeq Haj Tours and Travels
              </h2>
              
              <div className="flex items-start gap-2.5 text-gray-500 text-xs font-medium max-w-md leading-relaxed">
                <MapPin size={18} className="text-gold-500 shrink-0 mt-0.5" />
                <span>15/2 Infantry Road Cross, Next to Blue Cross Chambers, Bangalore – 560001, Karnataka, India</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 shrink-0 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8 w-full md:w-auto">
              <div className="flex items-center gap-3 text-xs font-semibold text-navy-900">
                <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 shrink-0">
                  <UserCheck size={14} />
                </div>
                <div>
                  <div className="text-[9px] text-gray-400 uppercase">Contact Advisor</div>
                  <span>Mr. B S MAQBOOL</span>
                </div>
              </div>
              <a href="tel:+919845043339" className="flex items-center gap-3 text-xs font-bold text-navy-900 hover:text-islamic-green transition-colors">
                <div className="w-8 h-8 rounded-full bg-islamic-green/10 border border-islamic-green/20 flex items-center justify-center text-islamic-green shrink-0">
                  <Phone size={14} />
                </div>
                <span>+91 98450 43339</span>
              </a>
              <a href="mailto:info@ateeqhajtours.com" className="flex items-center gap-3 text-xs font-semibold text-navy-900 hover:text-gold-500 transition-colors">
                <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 shrink-0">
                  <Mail size={14} />
                </div>
                <span>info@ateeqhajtours.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Main Clauses Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {termsList.map((term, index) => {
              const IconComponent = term.icon;
              return (
                <motion.div
                  key={term.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:border-gold-500/40 hover:shadow-md transition-all duration-300 relative group"
                >
                  {/* Subtle top border accent on card hover */}
                  <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-gold-500 to-islamic-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-full" />
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 group-hover:bg-gold-500/20 transition-all duration-300">
                      <IconComponent size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[15px] sm:text-base font-bold text-navy-900 tracking-tight leading-snug">
                      {term.title}
                    </h3>
                  </div>

                  <div className="space-y-4 ml-2">
                    {term.points.map((point, ptIdx) => (
                      <div key={ptIdx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-islamic-green shrink-0 mt-2" />
                        <p className="text-[13px] text-gray-600 leading-relaxed font-medium">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
