import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

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
    default: "Preeti Vishwakarma",
    template: "%s | Preeti Vishwakarma",
  },
  description:
    "Full Stack Developer specializing in React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, and modern web applications.",

  keywords: [
    "Preeti Vishwakarma",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "Portfolio",
  ],

  authors: [{ name: "Preeti Vishwakarma" }],

  creator: "Preeti Vishwakarma",

icons: {
    icon: [
      { url: "/pv_circle_badge.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/pv_circle_badge.svg",
    apple: "/apple-touch-icon.png", // usually 180x180
  },

  openGraph: {
    title: "Preeti Vishwakarma | Full Stack Developer",
    description:
      "Portfolio showcasing Full Stack development projects built with React.js, Next.js, Node.js, Express.js, MongoDB, and MySQL.",
    url: "https://your-domain.com",
    siteName: "Preeti Vishwakarma Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Create later
        width: 1200,
        height: 630,
        alt: "Preeti Vishwakarma Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Preeti Vishwakarma | Full Stack Developer",
    description:
      "Portfolio showcasing modern Full Stack web applications.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0b0416] text-white min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}