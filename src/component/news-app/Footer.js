import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">NEWS APP MADE BY - Mo Al-Qusi</span>
      <hr style={{ width: "80%" }} />
      <div className="icons">
        <a href="/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mohammad-al-qusi-984463176/"
          target="__blank"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.facebook.com/mohammad.quci/" target="__blank">
          <i className="fab fa-facebook-square fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
