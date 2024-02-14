import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import "@css/globals.css";
import "@css/index.css";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harisha Foundation",
  description: "harisha foundation.org",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
