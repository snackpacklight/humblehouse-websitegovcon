import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Humble House, LLC | Acquisition & Technical Advisory Services",
  description: "SBA-certified SDVOSB and VOSB providing contractor support, systems engineering and technical assistance for defense acquisition programs.",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="min-h-screen flex flex-col bg-cream text-charcoal antialiased">
    <a href="#main-content" className="skip-link">Skip to content</a>
    <Navbar /><main id="main-content" className="flex-1">{children}</main><Footer />
  </body></html>;
}
