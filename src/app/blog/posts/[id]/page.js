"use client";
import React, { useState, useEffect } from "react";
import "@styles/pages/blog/news_detail/news_detail.scss";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Image from "next/image";
const page = ({ params }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://ubicon.unhas.ac.id/b-api/news`);

        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        console.log(actualData);
        let actualDataInside = actualData.data;
        setData(actualDataInside);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
        //https://www.w3schools.com/jsref/jsref_try_catch.asp
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // filter data, return dari filter() itu array baru
  const dataNewForIdNews = data.filter((item) => item.id_news === params.id);
  console.log(dataNewForIdNews, "ini data baru");
  const handleShowLoading = () => {
    setLoading(true);
  };
  return (
    <div>
      {/* 
      Troubleshoot skeleton manual UI
      <button onClick={handleShowLoading}> SHOW LOADING </button> 
      */}

      {loading && (
        <section className="news-body loading">
          <div className="news-body-content-header">
            <div className="h1"></div>
            <div className="h1 besardikit"></div>
            <div className="date-wrapper">
              <CalendarMonthIcon />
            </div>
          </div>
          <div className="img-news-container">

          </div>
          <div className="news-body-content">
            <div className="h1"></div>
            <div className="h1 besardikit"></div>
            <div className="h1 besardikit"></div>
            <div className="h1"></div>
            <div className="h1 besardikit"></div>
          </div>
          
        </section>
      )}
      {error && <p>Error: {error}</p>}
     
      {dataNewForIdNews.length > 0 && (
        <section className="news-body">
          <div className="news-body-header">
            <div className="news-body-content-header">
              <h1>{dataNewForIdNews[0].judul}</h1>
              <div className="date-wrapper">
                <CalendarMonthIcon />
                <p>{dataNewForIdNews[0].tanggal}</p>
              </div>
            </div>
            <div className="img-news-container">
              <Image
                src={dataNewForIdNews[0].thumbnail}
                alt={dataNewForIdNews[0].alt}
                fill
                objectFit="cover"
              />
            </div>
          </div>
    
           <p>
            {dataNewForIdNews.map( ({id_news, konten}) => (
              <span key={id_news}>
                {konten}
                <br /> {/* Render a new line */}
              </span>
            ))}
          </p>
          
        </section>
      )}
    </div>
  );
};

export default page;
