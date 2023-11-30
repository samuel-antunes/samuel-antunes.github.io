"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Portfolio",
//   description: "This is my portfolio",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        <StarsCanvas />
        {/* <div className="parallax-outter">
          <div className="parallax-layer starless-layer"></div> */}

        {/* <div className="parallax-layer starmask-layer"></div> */}
        {children}
        {/* </div> */}
      </body>
    </html>
  );
}
