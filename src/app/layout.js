import "@styles/global-styles.scss";
import React from "react";
import Navbar from "@components/navigation/navbar/navbar";
import Footer from "@components/navigation/footer/footer";
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "UBICON",
  description: "Fly through the clouds with UBICON UNHAS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}> 
      <body >
        {children}
        <Navbar />
        <Footer />
      </body>
    </html>
  );
}
