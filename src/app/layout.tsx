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
  title: {
    default: "KEITIEM DIGITAL LABS | Digital Experiences. Smarter Business.",
    template: "%s | KEITIEM DIGITAL LABS",
  },
  description:
    "KEITIEM DIGITAL LABS creates exceptional websites, custom SaaS applications and e-commerce solutions for ambitious businesses in Kenya and worldwide.",
  applicationName: "KEITIEM DIGITAL LABS",
  keywords: [
    "Web Design",
    "Website Development",
    "SaaS Development",
    "E-Commerce",
    "Digital Solutions",
    "Kenya",
  ],
  openGraph: {
    title: "KEITIEM DIGITAL LABS",
    description:
      "Digital experiences. Smarter business. Websites, SaaS and e-commerce solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
