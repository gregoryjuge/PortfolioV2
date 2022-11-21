import React from "react";
import "./menu.css";
import { useEffect, useState } from "react";

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

const Menu = () => {
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
  console.log(contentMenus);
  return (
    <ul className="menu_container">
      <li className="menu_items">
        {contentMenus.map(({ id, attributes }) => (
          <a href={attributes.menu_link} key={id}>
            {attributes.menu_item}
          </a>
        ))}
      </li>
      <li className="menu_items">
        {contentMenus.map(({ id, attributes }) => (
          <a href={attributes.menu_link2} key={id}>
            {attributes.menu_item2}
          </a>
        ))}{" "}
      </li>
      <li className="menu_items">
        {contentMenus.map(({ id, attributes }) => (
          <a href={attributes.menu_link3} key={id}>
            {attributes.menu_item3}
          </a>
        ))}{" "}
      </li>
    </ul>
  );
};

export default Menu;
