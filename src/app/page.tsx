import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Packages from "@/components/Packages";
import ProcessTimeline from "@/components/ProcessTimeline";
import TestimonialsGallery from "@/components/TestimonialsGallery";
import VirtualTour from "@/components/VirtualTour";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative bg-cream-50 overflow-hidden">
      <Navbar />
      <Hero />
      <Trust />
      <Packages />
      <ProcessTimeline />
      <TestimonialsGallery />
      <VirtualTour />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
