import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Humble House, LLC | CSS & SETA Professional Services",
  description:
    "Acquisition-Proven. Mission-First. CSS & SETA professional services for DoW, USSOCOM, and the Intelligence Community. SDVOSB | CAGE: 10CJ5",
  keywords:
    "SDVOSB, CSS, SETA, defense acquisition, program management, USSOCOM, NAVAIR, government contracting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream text-charcoal antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
