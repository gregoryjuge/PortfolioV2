import React from "react";
import "./hero.css";
import Logo from "../logo/logo";
import Menu from "../menus/menu";
// import BurgerMenu from "../menus/burger-menu";
import TextBloc from "../text-bloc/text-bloc";
import Button from "../buttons/button";

class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-container">
          <div className="header-logo">
            <Logo />
          </div>
          <div className="menu">
            <Menu />
            {/* <BurgerMenu /> */}
          </div>
          <div className="text-bloc">
            <TextBloc />
          </div>
          <div className="contact-button">
            <Button />
          </div>
        </div>
      </div>
    );
  }
}
export default Hero;
