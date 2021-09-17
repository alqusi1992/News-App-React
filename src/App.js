import "./App.css";
import { NewsContextProvider } from "./component/news-app/NewsContext";
import React, { useState } from "react";
import News from "./component/news-app/News";
import NavBar from "./component/news-app/NavBar";

function App() {
  return (
    <div>
      <NewsContextProvider>
        <NavBar />
        <News />
      </NewsContextProvider>
    </div>
  );
}

export default App;
