import React, { useState, useEffect, createContext } from "react";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("general");

  // const API_KEY = process.env.REACT_NEWS_APP_API_KEY;

  const value = {
    data,
    setCategory,
    category,
  };
  const API = "9c3733b2527641a4aac4447732331e4a";
  const fetchNewsData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API}&category=${category}`
      );
      const requestData = await response.json();
      setData(requestData.articles);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, [category]);
  return (
    <NewsContext.Provider value={value}>{props.children}</NewsContext.Provider>
  );
};
