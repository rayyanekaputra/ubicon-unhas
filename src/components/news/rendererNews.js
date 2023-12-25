"use client";
import React, { useState, useEffect } from "react";
import "@styles/news/rendererNews.scss";
import Link from "next/link";
import Image from "next/image";

export default function RendererNews() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //  https://blog.logrocket.com/modern-api-data-fetching-methods-react/
  // https://ubi-api.onrender.com/photos

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

  const handleShowLoading = () => {
    setLoading(true);
  };
  return (
    <>
      {/* 
      Troubleshoot skeleton manual UI
      <button onClick={handleShowLoading}> SHOW LOADING </button> 
      */}

      {loading && (<>
        <li className="news-content-list loading">
          <div className="img-news-container"> </div>
          <div className="news-content">
            <div className="loading-box-text title"></div>
            <div className="loading-box-text date"></div>
            <div className="loading-box-text"></div>
          </div>
        </li>
        <li className="news-content-list loading">
          <div className="img-news-container"> </div>
          <div className="news-content">
            <div className="loading-box-text title"></div>
            <div className="loading-box-text date"></div>
            <div className="loading-box-text"></div>
          </div>
        </li>
        <li className="news-content-list loading">
          <div className="img-news-container"> </div>
          <div className="news-content">
            <div className="loading-box-text title"></div>
            <div className="loading-box-text date"></div>
            <div className="loading-box-text"></div>
          </div>
        </li>
        <li className="news-content-list loading">
          <div className="img-news-container"> </div>
          <div className="news-content">
            <div className="loading-box-text title"></div>
            <div className="loading-box-text date"></div>
            <div className="loading-box-text"></div>
          </div>
        </li>
        <li className="news-content-list loading">
          <div className="img-news-container"> </div>
          <div className="news-content">
            <div className="loading-box-text title"></div>
            <div className="loading-box-text date"></div>
            <div className="loading-box-text"></div>
          </div>
        </li>
      </>
        
        
      )}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}

      {/* https://twitter.com/asidorenko_/status/1692983047925235868 */}
      {data &&
        data.map(({ id_news, judul, thumbnail, tanggal, konten }) => (
          
          <Link href={`/blog/posts/${id_news}`}>
            
            <li key={id_news} className="news-content-list">
              <div className="img-news-container">
                <Image src={thumbnail} alt={judul} fill sizes="100%" style={{
                objectFit: "cover", // cover, contain, none
              }}/>
              </div>
              <div className="news-content">
                <h3>{judul}</h3>
                <p className="date_p">{tanggal}</p>
                <div className="truncate_brief">
                  <p>{konten}</p>
                </div>
              </div>
            </li>
          </Link>
          
        ))}
    </>
  );
}
