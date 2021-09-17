import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";
import NewsArticle from "./NewsArticle";
import NavBar from "./NavBar";

function News() {
  const { data } = useContext(NewsContext);
  return (
    <div>
      {data.map((news) => (
        <NewsArticle data={news} key={news.url} />
      ))}
    </div>
  );
}

export default News;
