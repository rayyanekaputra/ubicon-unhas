"use client";
import { useState, useEffect } from "react";
import publicationList from "@app/publication/list.json";
import "@styles/pages/publication/publication.css";
import Image from "next/image";
import Link from "next/link";
export default function Publication() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    setArticles(publicationList.articles);
  });

 const sortedByYearArticles = [...articles].sort((a, b) => b.year - a.year)

  return (
    <>
      <section className="hero-publication">
        <h1 className="hero-headings">Publication</h1>
        <p>
          Discover our research papers
          <br />
          and collaborate with us
        </p>
      </section>
      <section className="content-publication">
        <h3 className="publication-time-content">Sorted by recent</h3>
        {/* Render your articles as needed */}
        <div className="articles">
          {sortedByYearArticles.map((article, index) => (
            <div className="article-detail-wrapper" key={index}>
              {/* Render individual article details */}
              <div className="article-detail-headings">
                <h2>{article.title}</h2>
                <Link href={article.link} rel="noopener noreferrer">
                <button>
                  <Image
                    src="./assets/icons/material-symbols_school-outline.svg"
                    width={24}
                    height={24}
                  />
                  <p>Scholar</p>
                </button>
                </Link>
              </div>
              <div className="article-detail-content">
                <div className="article-per-detail-wrapper">
                <Image
                    src="./assets/icons/material-symbols_person.svg"
                    width={24}
                    height={24}
                  />
                  <p className="p-article-detail">{article.publication}</p>
                </div>
                <div className="article-per-detail-wrapper">
                <Image
                    src="./assets/icons/material-symbols_book.svg"
                    width={24}
                    height={24}
                  />
                <p className="p-article-detail">{article.authors}</p>
                </div>

                
              </div>
              {/* ... other article details ... */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
