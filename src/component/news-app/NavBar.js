import React, { useContext, useState } from "react";
import Hamburger from "./Hamburger";
import { NewsContext } from "./NewsContext";

const NavBar = () => {
  const { setCategory } = useContext(NewsContext);
  const [query, setQuery] = useState("");
  const searchButton = (e) => {
    e.preventDefault();
    setQuery("");
    setCategory(query);
    validation();
  };

  const validation = () => {
    if (query === "" || query.length < 3) {
      alert("No Data Has Been Entered");
    }
  };
  return (
    <>
      <div className="nav">
        <div className="icon">
          <Hamburger setCategory={setCategory} />
        </div>
        <img
          src="https://cdn3.iconfinder.com/data/icons/news-3/500/news-report-media_7-1024.png"
          alt="img"
        />
        <form className="example" onSubmit={searchButton}>
          <input
            type="text"
            placeholder="Search.."
            name="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>{" "}
      </div>
    </>
  );
};

export default NavBar;
