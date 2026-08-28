import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AquaTrace — Maritime Oil-Spill Intelligence & Investigation System",
  description:
    "AquaTrace combines SAR satellite imagery, ocean drift modelling, and vessel movement intelligence to reconstruct maritime oil-spill incidents for Coast Guard and maritime pollution-control analysts.",
  keywords: [
    "Maritime Intelligence",
    "Oil Spill Detection",
    "SAR Satellite Analysis",
    "AIS Tracking",
    "Coast Guard Operations",
    "Drift Modeling",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#070B14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
