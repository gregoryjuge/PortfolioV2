import React from "react";
import "./nav.css";
import { useState, useEffect } from "react";
const parseJSON = (resp) => (resp.json ? resp.json() : resp);

const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }

  return parseJSON(resp).then((resp) => {
    throw resp;
  });
};
const headers = { "Content-Type": "application/json" };

function Nav() {
  const [showLinks, setshowLinks] = useState(false);
  const handleShowLinks = () => {
    setshowLinks(!showLinks);
  };
  const [error, setError] = useState(null);
  const [contentMenus, setcontentMenus] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1337/api/menus", { headers, method: "GET" })
      .then(checkStatus)
      .then(parseJSON)
      .then(({ data }) => setcontentMenus(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <nav
      className={` navbar ${showLinks ? "show-nav" : "hide-nav"} md:invisible `}
    >
      <ul className="navbar__links" onClick={handleShowLinks}>
        <li className="navbar__item slideInDown-1">
          {contentMenus.map(({ id, attributes }) => (
            <a href={attributes.menu_link} key={id} className="navbar__link">
              {attributes.menu_item}
            </a>
          ))}
        </li>
        <li className="navbar__item slideInDown-2">
          {contentMenus.map(({ id, attributes }) => (
            <a href={attributes.menu_link2} key={id} className="navbar__link">
              {attributes.menu_item2}
            </a>
          ))}
        </li>
      </ul>
      <button className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
}
export default Nav;
