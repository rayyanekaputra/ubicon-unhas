'use client'
import React, {useState, useEffect} from "react";
import { DataNewsList } from "@data/news/dataNews";
import "@styles/news/rendererNews.css";
import Image from "next/image";



export default function RendererNews() {
//   const [posts, setPosts] = useState([]);
//   const fetchPost = async () => {
//     const response = await fetch(`https://dummyjson.com/quotes`, {
//      method: 'GET'
//     })
//     const data = await response.json();
//     console.log(data);
//     setPosts(data);
//  };
//   useEffect(() => {
//     fetchPost();
//  }, []);

//  const rendererNews = posts.map((news) => (
//   <li key={news.id} className="news-content-list">
//     <div className="news-content">
//       <h1>{news.quotes}</h1>
//     </div>
//   </li>
// ));

  // const callAPI = async () => {
  //       fetch(`https://ubi-api.onrender.com/photos`)
  //           .then((response) => response.json())
  //           .then((data) => {
  //           console.log(data);
  //           setPosts(data);
  //           })
  //           .catch((err) => {
  //           console.log(err.message);
  //           });
  //       }
  const asdasd = DataNewsList.map((news) => (
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

  return asdasd

}