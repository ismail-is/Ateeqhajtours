"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { 
  Plane, Building2, Utensils, Bus, 
  CheckCircle2, ChevronDown, LayoutGrid, List,
  Award, BadgeDollarSign, HeadphonesIcon, Users,
  Receipt, Users2, ShieldCheck, FileCheck2, ChevronRight
} from "lucide-react";
import PackageModal from "@/components/PackageModal";

const packagesData = [
  {
    id: 1,
    type: "ECONOMY",
    days: "15 DAYS",
    title: "Umrah 2026\nEconomy Package",
    image: "/images/madinah.png",
    distance: "Makkah: 800m | Madinah: 700m",
    price: "₹ 65,000",
    features: ["Via Flight", "Buffet Meals", "3 Star Hotel", "Shared Transport"]
  },
  {
    id: 2,
    type: "STANDARD",
    days: "15 DAYS",
    title: "Umrah 2026\nStandard Package",
    image: "/images/gallery-1.png",
    distance: "Makkah: 500m | Madinah: 400m",
    price: "₹ 85,000",
    features: ["Direct Flight", "Buffet Meals", "3 Star Hotel", "Shared Transport"]
  },
  {
    id: 3,
    type: "DELUXE",
    days: "15 DAYS",
    title: "Umrah 2026\nDeluxe Package",
    image: "/images/makkah.png",
    distance: "Makkah: 300m | Madinah: 200m",
    price: "₹ 1,15,000",
    features: ["Direct Flight", "Full Board Meals", "4 Star Hotel", "Private Transport"]
  },
  {
    id: 4,
    type: "VIP",
    days: "10 DAYS",
    title: "Umrah 2026\nVIP Package",
    image: "/images/kaaba.png",
    distance: "Makkah: 150m | Madinah: 100m",
    price: "₹ 1,55,000",
    features: ["Premium Flight", "Full Board Meals", "5 Star Hotel", "Private GMC"]
  }
];

export default function UmrahPackagesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedPkg, setSelectedPkg] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDetails = (pkg: any) => {
    setSelectedPkg(pkg);
    setIsModalOpen(true);
  };

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
            <Image src="/images/madinah.png" alt="Madinah" fill className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b26] to-transparent" />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-8 lg:pt-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] text-white/60 mb-6 font-medium">
            <Link href="/" className="hover:text-gold-500 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">Umrah Packages</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
            {/* Title & Description */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-playfair font-bold text-white leading-tight mb-4">
                Umrah <span className="text-islamic-green">Packages</span>
              </h1>
              <p className="text-white/80 text-sm md:text-[15px] leading-relaxed max-w-md">
                Choose from our wide range of Umrah packages designed for a comfortable, safe and spiritually uplifting journey.
              </p>
            </div>

            {/* Inline Features Box */}
            <div className="hidden md:flex items-center gap-6 bg-[#0b1b26]/80 backdrop-blur-md border border-islamic-green/30 rounded-full px-8 py-4 shadow-xl">
              {[
                { icon: Award, text: "Ministry Approved\nPackages" },
                { icon: BadgeDollarSign, text: "Best Price\nGuarantee" },
                { icon: HeadphonesIcon, text: "24/7 Support\nAvailable" },
                { icon: Users, text: "Experienced\nUmrah Guides" },
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

      {/* 2. Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="w-full">
            
            {/* Packages Grid Area */}
            <div className="flex-1">
              
              {/* Grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {packagesData.map((pkg) => (
                  <div key={pkg.id} className="bg-white rounded-[20px] overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                    
                    {/* Image Header */}
                    <div className="relative h-[220px] w-full">
                      <Image src={pkg.image} alt={pkg.title.replace('\n', ' ')} fill className="object-cover" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 bg-islamic-green text-navy-900 px-3 py-1 rounded text-[10px] font-bold tracking-wider">
                        {pkg.days}
                      </div>
                      <div className="absolute top-4 right-4 bg-navy-900 text-white px-3 py-1 rounded text-[10px] font-bold tracking-wider">
                        {pkg.type}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-[1.1rem] font-bold text-navy-900 leading-tight mb-5 whitespace-pre-line">
                        {pkg.title}
                      </h3>

                      {/* Icons Row */}
                      <div className="flex justify-between items-center mb-6">
                        {[
                          { icon: Plane, label: "Flight" },
                          { icon: Building2, label: "Hotel" },
                          { icon: Utensils, label: "Meals" },
                          { icon: Bus, label: "Transport" },
                        ].map((item, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-1.5">
                            <item.icon size={18} className="text-gold-500" strokeWidth={1.5} />
                            <span className="text-[10px] text-gray-500 font-medium">{item.label}</span>
                          </div>
                        ))}
                      </div>

                      <div className="text-[11px] text-gray-500 mb-6 font-medium">
                        {pkg.distance}
                      </div>

                      {/* Price & CTA */}
                      <div className="pb-6 border-b border-gray-100">
                        <button 
                          onClick={() => handleOpenDetails(pkg)}
                          className="w-full border-2 border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-navy-900 py-2.5 rounded-xl text-[11px] font-bold transition-colors text-center cursor-pointer"
                        >
                          View Details
                        </button>
                      </div>

                      {/* Bottom Features */}
                      <div className="grid grid-cols-2 gap-y-3 pt-5 mt-auto">
                        {pkg.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle2 size={14} className="text-islamic-green shrink-0" strokeWidth={2.5} />
                            <span className="text-[11px] font-medium text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Bottom Features Strip */}
      <section className="py-12 bg-[#fafaf9]">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Receipt, title: "Flexible Payment Options", desc: "Easy installment plans to make your journey easier." },
              { icon: Users2, title: "Group Discounts", desc: "Special discounts for groups and families." },
              { icon: ShieldCheck, title: "Custom Packages", desc: "Need a custom package? We've got you covered." },
              { icon: FileCheck2, title: "Visa Assistance", desc: "Hassle-free visa processing with full guidance." },
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="text-gold-500 shrink-0">
                  <feature.icon size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-navy-900 mb-1.5">{feature.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed max-w-[200px]">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />

      {/* Package Details Pop-up Modal */}
      <PackageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pkg={selectedPkg}
      />
    </main>
  );
}
