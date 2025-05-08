import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Masjid Raden Patah",
    template: "%s - Masjid Raden Patah",
  },
  description: "Masjid Raden Patah Universitas Brawijaya, Malang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.className} flex flex-col  bg-[#EDEDED] antialiased`}>
        <Navbar/>
        <main className={"w-full"}>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
