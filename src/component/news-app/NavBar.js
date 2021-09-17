import React, { useContext } from "react";
import Hamburger from "./Hamburger";
import { NewsContext } from "./NewsContext";

const NavBar = () => {
  const { setCategory } = useContext(NewsContext);

  return (
    <div className="nav">
      <div className="icon">
        <Hamburger setCategory={setCategory} />
      </div>
      <img
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        alt="img"
      />
    </div>
  );
};

export default NavBar;
