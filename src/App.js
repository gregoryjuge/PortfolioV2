import React from "react";
import "./App.css";
import Hero from "./components/hero/hero";
import Team from "./components/team/team";
import Cards from "./components/cards/projects-cards";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Team />
      <Cards />
    </div>
  );
};

export default App;
