import React from "react";
import Image from "next/image";
import styles from "@styles/aboutus/rendererEngineer.scss";

const dataEngineer = [
    {
      id: 0,
      profil_img: require("/public/assets/profil/engineers 01.png"),
      nama_engineer: "Rayyan",
      posisi_engineer: "Web Frontend",
      research_engineer: "Computer Network, Cybersecurity",
    },
    {
      id: 1,
      profil_img: require("/public/assets/profil/engineers 02.png"),
      nama_engineer: "Artia",
      posisi_engineer: "CMS Frontend",
      research_engineer: "Web Development",
    },
    {
      id: 2,
      profil_img: require("/public/assets/profil/engineers 03.png"),
      nama_engineer: "Sila",
      posisi_engineer: "QA Engineer",
      research_engineer: "Data Mining",
    },
    {
      id: 3,
      profil_img: require("/public/assets/profil/engineers 04.png"),
      nama_engineer: "Dita",
      posisi_engineer: "Backend",
      research_engineer: "Web Development, Data Mining",
    },
    {
      id: 4,
      profil_img: require("/public/assets/profil/engineers 05.png"),
      nama_engineer: "Juan",
      posisi_engineer: "Backend",
      research_engineer: "Smartfarm, Internet-of-Things",
    }
  ];
const RendererEngineer = () => {
  return dataEngineer.map((item) =>{

    return(
        <li className="engineer-show-li" key={item.id}>
      <div className="engineer-card">
        <div className="engineer-img-container">
          <Image
            src={item.profil_img}
            fill
            sizes="100%"
            style={{
              zIndex: "1",
              objectFit: "cover",
            }}
          />
          <Image
            src="/assets/profil/background profil 2.svg"
            width={172}
            height={160}
            style={{
              zIndex: "0",
            }}
          />
        </div>
        <div className="engineer-content">
        <h3>{item.nama_engineer}</h3>
        <h4>{item.posisi_engineer}</h4>
        <p>
          Research: <br />
          {item.research_engineer}
        </p>
          
        </div>
      </div>
    </li>
    )
  }
    
  );
};
export default RendererEngineer;
