import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Starline Batteries | Always The Winner",
  description: "High-performance automotive, industrial, and tubular batteries engineered for maximum backup and durability. Starline Batteries - Reliable power anytime you need it.",
  keywords: "car battery, tractor battery, automotive battery, tubular battery, Starline Batteries, Belagavi, inverter battery, industrial battery",
  openGraph: {
    title: "Starline Batteries | Always The Winner",
    description: "High-performance automotive, industrial, and tubular batteries engineered for maximum backup and durability.",
    url: "https://www.starlinebattery.com",
    siteName: "Starline Batteries",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Starline Batteries",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-black text-white selection:bg-primary/30 selection:text-white overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/911234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform duration-300"
          aria-label="Contact us on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
