import React from "react";
import "./hero.css";
import Logo from "../logo/logo";
import Menu from "../menus/menu";
// import BurgerMenu from "../menus/burger-menu";
import TextBloc from "../titles/text-bloc";

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
            {/* <BurgerMenu /> */}
          </div>
          <div class="text-bloc">
            <TextBloc />
          </div>
        </div>
      </div>
    );
  }
}
export default Hero;
