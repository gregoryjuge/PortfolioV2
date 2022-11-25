import React from "react";
import "./App.css";
import Hero from "./components/hero/hero";
import Team from "./components/team/team";
import Cards from "./components/cards/projects-cards";
import ScrollToTop from "./components/buttons/button-back";

const App = () => {
  return (
    <div className="App">
      <ScrollToTop />
      <Hero />
      <Team />
      <Cards />
    </div>
  );
};

export default App;
