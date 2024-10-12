"use client";
import { useEffect } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./globals.css";
import Footer from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

import { metadata } from './metadata';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

   useEffect(() => {
    AOS.init({
      duration: 1000, // Customize animation duration
      once: true, // Animation will happen only once
    });
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
        </body>
    </html>
  );
}
