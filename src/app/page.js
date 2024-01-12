"use client";
import React, { useEffect, useState, useRef, Suspense } from "react";

import Link from "next/link";
import Image from "next/image";
import "@styles/home.scss";
import "@styles/homeCBR.css";

import bg from "@assets/img_hero_overlay.png";
import bg_cta from "@assets/bg_cta.png";
import { RendererResearch } from "@components/research/rendererResearch";

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import RendererNews from "@components/news/rendererNews";

import Loading from "./loading";

export default function Home() {
  return (
    <>
      <section className="heroCBR">
        <div className="overlay-video" />
        {/* <video src="/assets/videos/video_bg.mp4" autoPlay muted loop /> */}
        <div className="infront-of-video">
          <h2>CBR2 Kickoff Meeting</h2>
          {/* https://react-type-animation.netlify.app/examples */}
          <h1>
            Real-time Malicious TLS Traffic Detection using Machine Learning Classifiers
          </h1>
          
          <div className="heroCBR-footer-wrapper">
            <div className="heroCBR-details">
              <div className="heroCBR-details-text-icon-wrapper">
                <Image
                  src="/assets/icons/material-symbols_calendar-today-outline.svg"
                  width={24}
                  height={24}
                />
                <h2>
                  <span>January 16th - 17th, </span>2023
                </h2>
              </div>
              <div className="heroCBR-details-text-icon-wrapper">
                <Image
                  src="/assets/icons/material-symbols_location-on-outline-rounded.svg"
                  width={24}
                  height={24}
                />
                <h2>
                  <span>Ubicon Laboratory</span> <br />
                  Hasanuddin University
                </h2>
              </div>
            </div>
            <div className="heroCBR-cta">
              <Link href="/">
                <h2>Read More</h2>
              </Link>
              <Image
                src="/assets/icons/material-symbols_arrow-forward-ios-rounded.svg"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </section>
      {/* 
      HERO NON-CBR
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
      </section> */}

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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
                sizes="100%"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
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
          <Link href="/about" rel="noopener noreferrer">
            <button>
              <p>Read more</p>
            </button>
          </Link>
        </div>
        <div className="preview-img-wrapper">
          <div className="preview-img" id="ubicon-1">
            {/* size gambar ada di home.scss karena import static di atas:
            section.our-people .preview-img-wrapper img*/}
            <Image
              src="/assets/profil/profil bu novy.png"
              alt="bu novy"
              fill
              sizes="100%"
              style={{
                objectFit: "cover", // cover, contain, none
              }}
            />
          </div>
          <div className="preview-img" id="ubicon-2">
            <Image
              src="/assets/profil/profil pak kiki.png"
              alt="pak kiki"
              fill
              sizes="100%"
              style={{
                objectFit: "cover", // cover, contain, none
              }}
            />
          </div>
          <div className="preview-img" id="head-of-ubicon">
            <Image
              src="/assets/profil/profil pak niswar.png"
              alt="pak niswar"
              fill
              sizes="100%"
              style={{
                objectFit: "cover", // cover, contain, none
              }}
            />
          </div>
          <div className="preview-img" id="ubicon-3">
            <Image
              src="/assets/profil/profil pak ady.png"
              alt="pak ady"
              fill
              sizes="100%"
              style={{
                objectFit: "cover", // cover, contain, none
              }}
            />
          </div>
          <div className="preview-img" id="ubicon-4">
            <Image
              src="/assets/profil/profil bu elly.png"
              alt="bu elly"
              fill
              sizes="100%"
              style={{
                objectFit: "cover", // cover, contain, none
              }}
            />
          </div>
        </div>
      </section>

      <section className="news-section">
        <div className="news-header">
          <div className="news-header-left">
            <h1>What's Up?</h1>
            <p className="p1">Read our latest news and stories in our blog!</p>
          </div>

          <Link href="/blog" rel="noopener noreferrer">
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
            <Link
              href="https://www.instagram.com/ubicon_unhas/"
              passHref={true}
              rel="noopener noreferrer"
            >
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
