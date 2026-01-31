import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "WorkSpace Snap - Smart Workspace Management",
  description: "Intelligent desktop workspace snapshot and restoration tool. Capture, organize, and restore your work sessions with one click.",
  keywords: ["workspace", "productivity", "desktop management", "snapshot", "automation"],
  authors: [{ name: "WorkSpace Snap Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://workspace-snap.com",
    title: "WorkSpace Snap - Smart Workspace Management",
    description: "Intelligent desktop workspace snapshot and restoration tool.",
    siteName: "WorkSpace Snap",
  },
  twitter: {
    card: "summary_large_image",
    title: "WorkSpace Snap - Smart Workspace Management",
    description: "Intelligent desktop workspace snapshot and restoration tool.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className="font-sans">
        {/* 全局背景光晕 */}
        <div className="gradient-blur" />

        {/* 主要内容 */}
        <main className="relative min-h-screen">
          {children}
        </main>

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
