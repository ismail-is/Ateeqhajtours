import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const jakarta = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Ateeq Haj Tours | Luxury Hajj & Umrah Packages",
  description: "Experience a premium spiritual journey with Ateeq Haj Tours. Ministry approved, experienced team, and luxury packages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="font-poppins text-navy-900 bg-cream-50 min-h-screen antialiased selection:bg-gold-500 selection:text-white overflow-x-hidden">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
