import React from "react";
import "./menu.css";

class Menu extends React.Component {
  render() {
    return (
      <ul className="menu_container">
        <li className="menu_items">
          <a>à propos</a>
        </li>
        <li className="menu_items">
          <a>projets</a>
        </li>
        <li className="menu_items">
          <a>nous contacter</a>
        </li>
      </ul>
    );
  }
}

export default Menu;
