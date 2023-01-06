import React from "react";
import { useEffect, useState } from "react";
import "./projects-cards.css";
import "../buttons/button.css";

const parseJSON = (resp) => (resp.json ? resp.json() : resp);

const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }

  return parseJSON(resp).then((resp) => {
    throw resp;
  });
};
const headers = { "Content-Type": "application/json" };

const Cards = () => {
  const [error, setError] = useState(null);
  const [contentProjets, setcontentProjets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/projets?populate=*", {
      headers,
      method: "GET",
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(({ data }) => setcontentProjets(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  // console.log(contentProjets);
  return (
    <div id="projects">
      <h2 className="mt-12 mb-12 text-center text-3xl font-semibold">
        <span>Voici les projets sur lesquels je suis intervenu ⚡️</span>
      </h2>
      <div className="global-container">
        <div className="card-container flex-wrap h-full">
          {contentProjets.map(({ id, attributes }) => (
            <div id="card" className="flex flex-col	md:mr-4 mt-4 ">
              <img
                src={`http://localhost:1337${attributes.imageHero.data.attributes.url}`}
                alt="project-visual"
              />
              <div id="content">
                <h3 className="title-card" key={id}>
                  {attributes.title}
                  {/* - Ecoutez La Ville - */}
                </h3>

                <p key={id}>
                  {attributes.mission}
                  <br />
                  {attributes.missionDescription}
                </p>
                <p key={id}></p>
                <br />
                <p key={id}>
                  {attributes.tools}
                  <br />
                  {attributes.toolsDescription}
                </p>
                <div id="visit-button">
                  <a
                    className="button button-2"
                    href={attributes.path}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visiter
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Cards;
