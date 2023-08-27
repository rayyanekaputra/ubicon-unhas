'use client'
import React from "react";
import { DataNewsList } from "@data/news/dataNews";
import "@styles/news/rendererNews.css";

import Image from "next/image";

export default function RendererNews() {
  const rendererNews = DataNewsList.map ((news) => (
    <li key={news.id} className="news-content-list">
      <div className="img-news-container"> 
        <Image 
        src={news.img_path} 
        alt={news.title}
        />
        
      </div>
      <div className="news-content"> 
        <h1>{news.title_posted}</h1>
        <p className="date_p">{news.date_posted}</p>
        <div className="truncate_brief">
          <p>{news.brief_posted}</p>
        </div>
      </div>
    </li>
  ));

  return rendererNews;
}
