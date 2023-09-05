'use client'
import React, { useState, useEffect }from "react";
import "@styles/news/rendererNews.scss";

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
      const response = await fetch(
        `https://ubi-api.onrender.com/news`
      );
      
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let actualData = await response.json();
      console.log(actualData)
      let actualDataInside = actualData.data
      setData(actualDataInside);
      setError(null);

    } catch(err) {
      setError(err.message);
      setData(null);
      //https://www.w3schools.com/jsref/jsref_try_catch.asp
    } finally {
      setLoading(false);
    }  
  }

  getData()
}, [ ])

return (
  <div className="App">
    <h1>API Posts</h1>
    {loading && <div>A moment please...</div>}
    {error && (
      <div>{`There is a problem fetching the post data - ${error}`}</div>
    )}
    <ul>
      {data &&
        data.map(({ id_news, judul, thumbnail, tanggal, konten}) => (
          <li key={id_news}>
            <h3>{judul}</h3>
            <p> {tanggal}</p>
            <Image src={thumbnail} width={100} height={100}/>
            <p> {konten}</p>
            
          </li>
        ))}
    </ul>
  </div>
);
}