import React from "react";
import "./Header.css";

const logo = require("./logo.svg");

const Header = ({ ...props }) => {
  return (
    <header className="header">
      <img
        className="header-logo"
        src={logo}
        alt="letters a and c to represent first and last name"
      />
      <div className="header-icons">
        <a
          href="https://github.com/ashleighc207"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github-alt"></i>
        </a>
        <a
          href="https://codepen.io/ashleighc207"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-codepen"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ashleighchristopher/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
