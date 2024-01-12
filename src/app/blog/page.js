'use client'
import RendererNews from "@components/news/rendererNews";
import React, { Suspense } from "react";
import "@styles/pages/blog/blog.scss";
//TO DO: BUAT SEARCH FIELD

const Blog = () => {
  return (
    <div>
      <section className="hero-blog">
        <div className="hero-headings">
          <h1>Ubiblog</h1>
          <p>Read our latest news and<br/>stories in our blog!</p>
        </div>
      </section>
      <div className="search-field-container">
{/* https://youtu.be/Zi9Z29KK5dY */}
      </div>
      <section className="blog-content">
        <h3 className="blog-time-content"> 
          Sorted by recent
        </h3>
        <ul className="news-content-renderer">
          <Suspense fallback = {<div>Loading Renderer News</div>}>
            <RendererNews />
          </Suspense>
          
        </ul>
      </section>
      {/* https://rapidapi.com/guides/how-to-use-fetch-api-in-next-js */}
      {/* https://www.freecodecamp.org/news/how-to-consume-rest-apis-in-react/ */}
    </div>
  );
};

export default Blog;
