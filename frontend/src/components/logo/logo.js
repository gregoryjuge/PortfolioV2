import * as React from "react";
import "./logo.css";
import Team from "../team/team";
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

const Logo = () => {
  const [error, setError] = useState(null);
  const [contentLogo, setcontentLogo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/logo?populate=*", {
      headers,
      method: "GET",
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(({ data }) => setcontentLogo(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  // console.log(contentLogo);
  return (
    <div id="container">
      {/* {Object.keys(contentLogo).map((item, i) => (
        <h1 className="logo" key={i}>
          {contentLogo.attributes.mailto}
        </h1>
      ))} */}
      {Object.keys(contentLogo).map((id) => (
        <a href={`mailto:${contentLogo.attributes.mailto}`} key={id}>
          <img
            alt="mail-icon"
            className="h-8"
            src={`http://localhost:1337${contentLogo.attributes.icon.data[0].attributes.url}`}
          />
        </a>
      ))}
      <Team />
    </div>
  );
};

export default Logo;
