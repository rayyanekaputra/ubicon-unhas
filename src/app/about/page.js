import React from "react";
import styles from "@styles/pages/about-us/aboutus.scss";
import Image from "next/image";
import zIndex from "@mui/material/styles/zIndex";
import RendererLecturer from "@components/lecturer/rendererLecturer";

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
    </div>
  );
};

export default AboutUs;
