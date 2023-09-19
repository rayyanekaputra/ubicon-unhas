"use client";
import React, { useEffect, useState, useRef, Suspense } from "react";

import Link from "next/link";
import Image from "next/image";
import "@styles/home.scss";
import bg from "@assets/img_hero_overlay.png";
import bg_cta from "@assets/bg_cta.png";
import { RendererResearch } from "@components/research/rendererResearch";

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import RendererNews from "@components/news/rendererNews";

//Foto-foto preview
import previewBuNovy from "@assets/profil/profil bu novy.png";
import previewPakKiki from "@assets/profil/profil pak kiki.png";
import previewPakNiswar from "@assets/profil/profil pak niswar.png";
import previewPakAdy from "@assets/profil/profil pak ady.png";
import previewBuElly from "@assets/profil/profil bu elly.png";

//lottie
import Lottie from "lottie-react";
import splashUbicon from "./LogoUbiconSplash.json";
import Loading from "./loading";

export default function Home() {
  // https://shipshape.io/blog/wait-for-page-load-in-react/
  const [playAnimation, setPlayAnimation] = useState(false);

  // This will run one time after the component mounts
  useEffect(() => {
    const onPageLoad = () => {
      setPlayAnimation(true);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <>
      {/* <div className={ `splash-screen ${playAnimation ? 'splash-screen-animate' : ''}`}> */}
      <div
        className={playAnimation ? "splash-screen-animate" : "splash-screen"}
      >
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
      <section
        className="hero"
        style={{
          //pake back-quote ` https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <div className="logo-ubicon-container">
          <div className="logo-ubicon">
            <Image
              src="/logo512.png"
              // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
              width={80}
              height={80}
              alt="Logo UBICON"
            ></Image>
          </div>
        </div>

        <h1>Ubicon Lab</h1>
        <h2>Ubiquitous Computing & Networking Lab.</h2>
        <p>@HASANUDDIN UNIVERSITY </p>
      </section>

      <div className="carousel-running-container">
        {/* infinite slider, duplikat supaya seamless */}
        <ul>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-01.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-02.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-03.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-04.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-05.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-06.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-07.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-08.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
        </ul>

        <ul>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-01.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-02.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-03.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-04.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-05.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-06.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-07.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-08.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
        </ul>

        <ul>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-01.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-02.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-03.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-04.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-05.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-06.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-07.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
          <li>
            <div className="carousel-img">
              <Image
                src="/assets/carousel/carousel-image-08.png"
                // pastikan sama dengan widthnya .logo-ubicon div BUKAN KOMPONEN Image
                alt="Gambar Gedung Departemen"
                fill
              />
            </div>
          </li>
        </ul>
      </div>

      <section className="research-type">
        <h1>Connecting Devices with Our Research</h1>
        <p className="p1">
          Our lab have multiple concentration that surrounds internet
          engineering
        </p>

        <ul className="list-research-wrapper">
          <RendererResearch />
        </ul>
      </section>

      <section className="our-people">
        <div className="our-people-container">
          <h1>Our People</h1>
          <p className="p1">
            Get to know our lecturer, researcher, <br />
            and member of the clouds
          </p>
          <Link href="/about" rel="noopener noreferrer" target="_blank">
            <button>
              <p>Read more</p>
            </button>
          </Link>
        </div>
        <div className="preview-img-wrapper">
          <div className="preview-img" id="ubicon-1">
            {/* size gambar ada di home.scss karena import static di atas:
            section.our-people .preview-img-wrapper img*/}
            <Image src={previewBuNovy} alt="bu novy" />
          </div>
          <div className="preview-img" id="ubicon-2">
            <Image src={previewPakKiki} alt="pak kiki" />
          </div>
          <div className="preview-img" id="head-of-ubicon">
            <Image src={previewPakNiswar} alt="pak niswar" />
          </div>
          <div className="preview-img" id="ubicon-3">
            <Image src={previewPakAdy} alt="pak ady" />
          </div>
          <div className="preview-img" id="ubicon-4">
            <Image src={previewBuElly} alt="bu elly" />
          </div>
        </div>
      </section>

      <section className="news-section">
        <div className="news-header">
          <div className="news-header-left">
            <h1>What's Up?</h1>
            <p className="p1">Read our latest news and stories in our blog!</p>
          </div>

          <Link href="/blog" rel="noopener noreferrer" target="_blank">
            <button>
              <p>Read more</p>
            </button>
          </Link>
        </div>
        <div className="news-content-container">
          {/* TODO: bikinkan renderer function untuk newsnya, usahakan pake fetch API */}
          <ul className="news-content-renderer">
            <Suspense fallback={Loading}>
              <RendererNews />
            </Suspense>
          </ul>
        </div>
      </section>

      <section className="contact-us-section">
        <p>Are you a student of Informatics UNHAS?</p>
        <div className="contact-us-container-container">
          <div
            className="contact-us-container"
            style={{
              //pake back-quote ` https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
              backgroundImage: `url(${bg_cta.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
              backgroundSize: "cover",
            }}
          >
            <h1>Join and explore the cloud with us</h1>
            <Link href="https://www.instagram.com/ubicon_unhas/" passHref={true} rel="noopener noreferrer" target="_blank">
              <button>
                <p>Read more</p>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
