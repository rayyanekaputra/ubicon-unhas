"use client";
import React, { useEffect, useState} from "react";
import "@styles/global-styles.scss";
//lottie
import Lottie from "lottie-react";
import splashUbicon from "./LogoUbiconSplash.json";


export default function SplashScreen() {

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
  );
}
