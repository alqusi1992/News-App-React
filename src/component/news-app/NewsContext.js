import React, { useState, useEffect, createContext } from "react";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("general");

  const value = {
    data,
    setCategory,
    category,
  };
  const API = "57cb959843874702ad14bc7f36a70471";
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
