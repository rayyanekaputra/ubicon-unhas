import React from "react";
import styles from "@styles/pages/about-us/aboutus.scss";
import Image from "next/image";
import zIndex from "@mui/material/styles/zIndex";
import RendererLecturer from "@components/lecturer/rendererLecturer";
import RendererEngineer from "@components/engineer/rendererEngineer";

const AboutUs = () => {
  return (
    <div className="body-about-us">
      <section className="hero-about-us">
        <div className="wrapper-emoji-text">
          <h1>
            We fly through
            <span>
              the internet of clouds
              <div className="emoji-container">
                <Image
                  src="/assets/emoji/cloud-emoji.png"
                  fill
                  objectFit="cover"
                />
              </div>
            </span>
          </h1>
        </div>
        <h2>Get to know our lab members and researchers</h2>
      </section>
      <div className="stroke-dashed-container">
        <Image src="/assets/decors/stroke-dased.svg" fill style={{
          objectFit: "contain"

        }}/>
      </div>
      <section className="lecturer-section">
        <div className="lecturer-title">
          <h1>Lecturer</h1>
          <p>
            Our incredible lecturer that empowers our mind in the cloud research
            field
          </p>
        </div>
        <div className="lecturer-show">
          <ul className="lecturer-show-ul">
            <RendererLecturer/>
          </ul>
        </div>
      </section>
      <section className="engineer-section">
        <div className="engineer-title">
          <h1>Wonderful website engineers of Ubicon’s</h1>
          <p>
          Designed and developed from scratch with love and passions
          </p>
        </div>
        <div className="engineer-show">
          <ul className="engineer-show-ul">
            <RendererEngineer/>
          </ul>
        </div>
      </section>
      <section className="map-section">
      <div className="map-title">
          <h1>Pay a visit to our lab at Engineering Faculty</h1>
          <p>
          Jl. Malino No.8 F, Romang Lompoa, Kec. Bontomarannu, Kabupaten Gowa, Sulawesi Selatan 92171
          </p>
        </div>
        <div className="map-embed">
        <iframe frameborder="0" scrolling="no" marginheight="0"
        marginwidth="0"
        className = "map" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=TEKNIK%20UNHAS+(Teknik%20UNHAS)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
