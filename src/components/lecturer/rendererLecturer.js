import React from "react";
import Image from "next/image";
import styles from "@styles/aboutus/rendererLecturer.scss";

const dataLecturer = [
  {
    id: 0,
    profil_img: require("/public/assets/profil/1 pak niswar.png"),
    nama_dosen: "Dr. Eng. Muhammad Niswar, S.T., M.IT.",
    posisi_dosen: "Head of Lab",
    research_dosen:
      "Computer Network and Web Programming",
  },
  {
    id: 1,
    profil_img: require("/public/assets/profil/2 pak ady.png"),
    nama_dosen: "Dr. Eng. Ady Wahyudi Paundu, S.T., M.T.",
    posisi_dosen: "Lecturer",
    research_dosen:
      "Cyber Security and Computer Network",
  },
  {
    id: 2,
    profil_img: require("/public/assets/profil/3 pak kiki.png"),
    nama_dosen: "Dr. Eng. Zulkifli Tahir, S.T., M.Sc.",
     posisi_dosen: "Lecturer",
    research_dosen:
      "Distributed System and Web Programming",
  },
  {
    id: 3,
    profil_img: require("/public/assets/profil/4 bu novy.png"),
    nama_dosen: "Novy NRA Mokobombang, S.T., Ms.TM., PhD",
     posisi_dosen: "Lecturer",
    research_dosen:
      "ICT Policy and Open Data",
  },
  {
    id: 4,
    profil_img: require("/public/assets/profil/5 bu elly.png"),
    nama_dosen: "Elly Warni, S.T., M.T.",
     posisi_dosen: "Lecturer",
    research_dosen:
      "Data Mining and Software Engineering",
  },
  {
    id: 5,
    profil_img: require("/public/assets/profil/6 pak iqra.png"),
    nama_dosen: "Iqra Aswad, S.T., M.T..",
     posisi_dosen: "Lecturer",
    research_dosen:
      "Web Programming",
  }
];

const RendererLecturer = () => {
  return dataLecturer.map((item) =>{
    return(
        <li className="lecturer-show-li" key={item.id}>
      <div className="lecturer-card">
        <div className="lecturer-img-container">
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
            src="/assets/profil/background profil.svg"
            width={256}
            height={240}
            style={{
              zIndex: "0",
            }}
          />
        </div>
        <div className="lecturer-content">

        <h3>{item.nama_dosen}</h3>
        <h4>{item.posisi_dosen}</h4>
        <p>
          Research: <br />
          {item.research_dosen}
        </p>
        </div>
      </div>
    </li>
    )
  }
    
  );
};
export default RendererLecturer;
