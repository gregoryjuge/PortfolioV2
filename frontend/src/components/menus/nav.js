import React from "react";
import "./nav.css";
import { useState } from "react";

function Nav() {
  const [showLinks, setshowLinks] = useState(false);
  const handleShowLinks = () => {
    setshowLinks(!showLinks);
  };
  return (
    <nav
      className={` navbar ${showLinks ? "show-nav" : "hide-nav"} md:invisible `}
    >
      <ul className="navbar__links">
        <li className="navbar__item slideInDown-1">
          <a href="/" className="navbar__link">
            Projets
          </a>
        </li>
        <li className="navbar__item slideInDown-2">
          <a href="/" className="navbar__link">
            Me contacter
          </a>
        </li>
      </ul>
      <button className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
}
export default Nav;
