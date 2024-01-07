"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
// pake pathname untuk return page apaki skrg https://stackoverflow.com/a/75500244/22479254
import { usePathname } from "next/navigation";
import "@styles/navigation/navbar/navbar.scss";
import Image from "next/image";

// https://medium.com/@a.pirus/how-to-create-a-responsive-navigation-bar-in-next-js-13-e5540789a017

const Navbar = () => {
  const pathname = usePathname();
  //TO DO: cari supaya bagaimana onscroll berubah background navbarnya
  //https://www.geeksforgeeks.org/how-to-change-the-navbar-color-when-you-scroll-in-reactjs/
  const [checkScroll, setCheckScroll] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navbarScroll = () => {
    // ERROR FIX 27 Agustus: Kenapa undefined type ki 'window' di react? pake typeof https://dev.to/vvo/how-to-solve-window-is-not-defined-errors-in-react-and-next-js-5f97
    // https://stackoverflow.com/questions/69473259/how-to-show-or-hide-navbar-when-scroll-use-react-js

    if (typeof window !== "undefined") {
      if (window.scrollY >= 80) {
        setCheckScroll(false);
      } else {
        setCheckScroll(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", navbarScroll);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", navbarScroll);
      };
    }
  }, [lastScrollY]);

  return pathname === "/" ? (
    <div
      className={
        checkScroll
          ? "navbar-container-trans-homeCBR"
          : "navbar-container-white-homeCBR"
      }
    >
      <div className="navbar-logo">
        {/* panggil import */}
        <Link href="/">
          {lastScrollY <= 80 ? (
            <Image
              src="/assets/navbar/navbar-logo-white.png"
              alt="logo ubicon"
              width={144}
              height={36}
            />
          ) : (
            <Image
              src="/assets/navbar/navbar-logo.png"
              alt="logo ubicon"
              width={144}
              height={36}
            />
          )}
        </Link>
      </div>
      <div className="navbar-menu">
        <Link href="/">
          <p>Home</p>
        </Link>
        {/* TODO: buatkan pagenya dan pathname di App.js */}
        <Link href="/blog">
          <p>News</p>
        </Link>
        <Link href="/publication">
          <p>Publication</p>
        </Link>
        <Link href="/about">
          <p>People</p>
        </Link>
      </div>
      <div className="navbar-logo">
        {/* panggil import navbar logo */}
        <img
          src="/assets/navbar/navbar-logo.png"
          alt=""
          style={{
            display: "none",
          }}
        />
      </div>
    </div>
  ) : (
    <div
      className={
        checkScroll ? "navbar-container-trans" : "navbar-container-white"
      }
    >
      <div className="navbar-logo">
        {/* panggil import */}
        <Link href="/">
          <Image
            src="/assets/navbar/navbar-logo.png"
            alt="logo ubicon"
            width={144}
            height={36}
          />
        </Link>
      </div>
      <div className="navbar-menu">
        <Link href="/">
          <p>Home</p>
        </Link>
        {/* TODO: buatkan pagenya dan pathname di App.js */}
        <Link href="/blog">
          <p>News</p>
        </Link>
        <Link href="/publication">
          <p>Publication</p>
        </Link>
        <Link href="/about">
          <p>People</p>
        </Link>
      </div>
      <div className="navbar-logo">
        {/* panggil import navbar logo */}
        <img
          src="/assets/navbar/navbar-logo.png"
          alt=""
          style={{
            display: "none",
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
