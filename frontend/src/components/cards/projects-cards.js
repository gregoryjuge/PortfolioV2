import React from "react";
import "./projects-cards.css";
import project1 from "./ecoutez-la-ville.gif";
import "../buttons/button.css";

const Cards = () => {
  return (
    <div id="projects" className="global-container">
      <div className="card-container">
        <div id="card">
          <img src={project1} alt="project-visual" />
          <div id="content">
            <h3 class="title-card"> - Ecoutez La Ville -</h3>
            <p>
              Mission:
              <br /> Création d'un site vitrine
            </p>
            <p>
              Framework:
              <br /> Vue.js
            </p>
            <div id="visit-button">
              <a
                className="button button-2"
                href="http://ecoutez-la-ville.fr"
                target="_blank"
                rel="noreferrer"
              >
                Visiter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
