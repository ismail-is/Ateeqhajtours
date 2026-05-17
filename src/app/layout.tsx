import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
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
    <html lang="en" className={`${playfair.variable} ${poppins.variable} scroll-smooth`}>
      <body className="font-poppins text-navy-900 bg-cream-50 min-h-screen antialiased selection:bg-gold-500 selection:text-white overflow-x-hidden">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
