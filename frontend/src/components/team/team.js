import React from "react";
import "./team.css";
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
  // console.log(contentTeam[0].attributes.name);
  return (
    <span id="team">
      <div className="main-container">
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
            <div className="name" key={i}>
              {contentTeam[0].attributes.name}
            </div>
          ))}
        </div>
      </div>
    </span>
  );
};

export default Team;
