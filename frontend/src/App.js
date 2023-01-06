import React from "react";
import "./App.css";
import DarkMode from "./components/darkmode/DarkMode";
import Nav from "./components/menus/nav";
import Hero from "./components/hero/hero";
import Cards from "./components/cards/projects-cards";
import Contact from "./components/contact/contact";
import ScrollToTop from "./components/buttons/button-back";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <DarkMode />
      <ScrollToTop />
      <Hero />
      <Cards />
      <Contact />
    </div>
  );
};

export default App;
