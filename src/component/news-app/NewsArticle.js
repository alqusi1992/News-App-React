import React from "react";
import { Container } from "@mui/material";

function NewsArticle({ data }) {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="card">
          <h1 className="news__title">{data.title}</h1>
          <p className="news__desc">{data.description}</p>
          <p className="news__author">{data.author}</p> <br />
          <p className="news__published">{data.publishedAt}</p>
          <p className="news__source">{data.source.name}</p>
          <p>
            <a href={data.url} target="_blank" className="news__url">
              Read More
            </a>
          </p>
        </div>
        <div className="content-img">
          <img className="content-img" src={data.urlToImage} alt="" />
        </div>
      </div>
    </Container>
    /* <div> */

    // </div>
  );
}

export default NewsArticle;
