import React from "react";
import "./hero.css";
import Logo from "../logo/logo";
import Menu from "../menus/menu";
import MainTitle from "../titles/main-title";

class Hero extends React.Component {
  render() {
    return (
      <div class="hero">
        <div class="hero-container">
          <div class="header-logo">
            <Logo />
          </div>
          <div class="menu">
            <Menu />
          </div>
          <div class="text-bloc">
            <MainTitle />
          </div>
        </div>
      </div>
    );
  }
}
export default Hero;
