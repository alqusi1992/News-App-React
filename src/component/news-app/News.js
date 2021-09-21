import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";
import NewsArticle from "./NewsArticle";
import NoDataFound from "./NoDataFound";

function News() {
  const { data } = useContext(NewsContext);
  const dataDisplay = () => {
    if (typeof data !== "undefined" && data.length === 0) {
      return <NoDataFound />;
    } else {
      return data?.map((news) => <NewsArticle data={news} key={news.url} />);
    }
  };
  return <div>{dataDisplay()}</div>;
}

export default News;
