import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Load UI font
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Load Reading font (serif, easier to read long passages)
const sourceSerif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "IELTS Pro - Computer-Delivered IELTS Preparation",
  description: "A production-grade computer-delivered IELTS preparation platform. Practice reading, writing, listening, and speaking online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sourceSerif.variable} font-sans bg-slate-50 min-h-screen text-slate-900 flex flex-col`}>
        <Header />
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}