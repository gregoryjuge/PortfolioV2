import React from "react";
import "./App.css";
import Nav from "./components/menus/nav";
import Hero from "./components/hero/hero";
import Cards from "./components/cards/projects-cards";
import ScrollToTop from "./components/buttons/button-back";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <ScrollToTop />
      <Hero />
      <Cards />
    </div>
  );
};

export default App;
