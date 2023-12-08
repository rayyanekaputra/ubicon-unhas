"use client";
import React, { useEffect, useState} from "react";

import "@styles/global-styles.scss";
import Navbar from "@components/navigation/navbar/navbar";
import Footer from "@components/navigation/footer/footer";
import { Inter } from "next/font/google";

//lottie
import Lottie from "lottie-react";
import splashUbicon from "./LogoUbiconSplash.json";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "UBICON",
  description: "Fly through the clouds with UBICON UNHAS",
};

export default function RootLayout({ children }) {

  //Website loaded? kasih liat splashscreen --> simpan di tab browser (sessionStorage)
  const [isSiteShown, setSiteShown] = useState(false);

  useEffect(() => {
    let hasSiteShown = sessionStorage.getItem("pertama kali?");

    // Check if the value is null (key doesn't exist)
    if (hasSiteShown === null) {
      // Set the key "pertama kali?" in sessionStorage to indicate that the site has been shown
      sessionStorage.setItem("pertama kali?", true);
      // Update the state
      setSiteShown(false);
    } else {
      // If the value is not null, it means the key exists in sessionStorage
      setSiteShown(true);
    }
  }, []);

  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className={isSiteShown ? "splashed" : "splash-screen"}>
          {/* <div
        className={isSiteShown ? "splash-screen-animate" : "splash-screen"}
      > */}
          {/* https://lottiereact.com/components/Lottie#getting-started */}
          <Lottie
            animationData={splashUbicon}
            style={{
              width: "72px",
              height: "72px",
              paddingRight: "8px",
            }}
          />
          <h1>Welcome</h1>
        </div>
        {children}
        <Navbar />
        <Footer />
      </body>
    </html>
  );
}
