import React from "react";
import "./logo.css";
import { useEffect, useState } from "react";

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

const Team = () => {
  const [error, setError] = useState(null);
  const [contentTeam, setcontentTeam] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/teams?populate=*", {
      headers,
      method: "GET",
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(({ data }) => setcontentTeam(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  // console.log(contentTeam[0].attributes.icon1.data.attributes.url);
  return (
    <span id="team">
      <div className="main-container flex md:flex-col">
        <div className="person">
          <div className="container">
            <div className="container-inner">
              {Object.keys(contentTeam).map((i) => (
                <img
                  className="circle"
                  alt="circle-avatar"
                  key={i}
                  src={`http://localhost:1337${contentTeam[0].attributes.backgroundImage.data.attributes.url}`}
                />
              ))}
              {Object.keys(contentTeam).map((i) => (
                <img
                  className="img img2"
                  alt="avatar"
                  key={i}
                  src={`http://localhost:1337${contentTeam[0].attributes.avatarImage.data.attributes.url}`}
                />
              ))}
            </div>
          </div>

          <div className="divider"></div>
          {Object.keys(contentTeam).map((item, i) => (
            <div className="name pb-4" key={i}>
              {contentTeam[0].attributes.name}
            </div>
          ))}
          <div className="logos flex justify-center space-x-6">
            {Object.keys(contentTeam).map((id) => (
              <a href={contentTeam[0].attributes.path2} key={id}>
                <img
                  alt="depo-icon"
                  className="h-6"
                  src={`http://localhost:1337${contentTeam[0].attributes.icon2.data.attributes.url}`}
                />
              </a>
            ))}
            {Object.keys(contentTeam).map((id) => (
              <a href={`mailto:${contentTeam[0].attributes.mailto}`} key={id}>
                <img
                  alt="mail-icon"
                  className="h-6 animate-pulse"
                  src={`http://localhost:1337${contentTeam[0].attributes.icon1.data.attributes.url}`}
                />
              </a>
            ))}
            {Object.keys(contentTeam).map((id) => (
              <a href={contentTeam[0].attributes.path3} key={id}>
                <img
                  alt="social-icon"
                  className="h-6"
                  src={`http://localhost:1337${contentTeam[0].attributes.icon3.data.attributes.url}`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </span>
  );
};

export default Team;
