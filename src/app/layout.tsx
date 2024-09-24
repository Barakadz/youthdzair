"use client"; // Add this line at the top

 import { Inter } from "next/font/google";
import { usePathname } from "next/navigation"; // Import correctly
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import Image from "next/image";
import { FaHandsClapping } from "react-icons/fa6";
import { useState } from "react";
import { TbFileDescription } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import Avis from "@/components/Avis/avis";

const inter = Inter({ subsets: ["latin"] });

 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get the current route
  const isLoginPage = pathname === "/login"; // Check if the route is the login page


  return (
    <html lang="en">
    <body className={inter.className}>
   
      <div className="bg-white px-3 md:px-8 lg:px-16 xl:px-24 2xl:px-48 ">
        {!isLoginPage && <><Navbar />
          
        <div className="xl:hidden 2xl:hidden lg:hidden md:flex md:flex-row md:justify-between md:h-6">
          <div className="flex flex-row justify-between ">
          <Link href="/">
            <Image src="/logo.png" width={100} alt="dzairyouth" height={70} />
          </Link>
          <Link href="/youthopportunitydz" className={`flex flex-row items-center gap-1 ${pathname === "/youthopportunitydz" ? "colorIcon font-semibold" : ""}`}>
          <span className="text-sm text-center">DzairYouth GPS</span>

<div style={{ height: '60px', width: '1px', backgroundColor: '#bcc7cc', margin: '0 10px' }} />
<Image src="/dzyouthmap.png" alt="" width={74} height={74}/>

</Link>
          </div>
         
          </div>
          </> } {/* Render Navbar only if it's not the login page */}
      </div>
    <Avis/>
      <div
        // Conditionally apply classes based on whether it's the login page
        className={
          isLoginPage
            ? "" // No classes if it's the login page
            : "bg-slate-100 px-3 md:px-8 lg:px-16 xl:px-24 2xl:px-48 mt-20"
        }
      >
        {children}
      </div>
    </body>
  </html>
  );
}
