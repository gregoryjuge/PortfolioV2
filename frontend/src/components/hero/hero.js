import React from "react";
import "./hero.css";
import Logo from "../logo/logo";
import Menu from "../menus/menu";
import TextBloc from "../text-bloc/text-bloc";

class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-container">
          <Logo /> <TextBloc />
          <div className="menu">
            <Menu />
          </div>
        </div>
      </div>
    );
  }
}
export default Hero;
