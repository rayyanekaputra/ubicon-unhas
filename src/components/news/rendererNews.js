import React from "react";
import { DataNewsList } from "@data/news/dataNews"
import "@components/news/rendererNews.css";

export function RendererNews() {
  const rendererNews = DataNewsList.map((news) => (
    <li key={news.id} className="news-content-list">
      <img src={news.img_path} alt={news.title} />
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
