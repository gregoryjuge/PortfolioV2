import React from "react";
import "./App.css";
import Hero from "./components/hero/hero";
import Cards from "./components/cards/projects-cards";
import ScrollToTop from "./components/buttons/button-back";

const App = () => {
  return (
    <div className="App">
      <ScrollToTop />
      <Hero />
      <Cards />
    </div>
  );
};

export default App;
