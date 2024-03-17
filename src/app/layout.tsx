"use client"

import { Inter } from "next/font/google";
import "./ui/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NextUIProvider>
        <body className={`${inter.className} w-screen h-screen`}>
          <Navbar />

          {children}
        </body>
      </NextUIProvider>
    </html>  
  );
}
