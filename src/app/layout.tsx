import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppProvider from "@/components/provider/AppProvider";
import AuthProvider from "@/components/provider/AuthProvider";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "wellnessmclear",
  description:
    "Wellness is a personal journey—not a destination. It’s about making small, consistent choices that bring you closer to your healthiest and happiest self.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <AppProvider>
            <Navbar />
            {children}
            <Toaster />
            <Footer />
          </AppProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
