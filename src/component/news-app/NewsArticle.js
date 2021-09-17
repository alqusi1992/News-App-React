import React from "react";

function NewsArticle({ data }) {
  return (
    <div>
      <h1 className="news__title">{data.title}</h1>
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
      <img src={data.urlToImage} alt="" width="300" height="300" />
    </div>
  );
}

export default NewsArticle;
