import * as React from "react";
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

const Logo = () => {
  const [error, setError] = useState(null);
  const [contentLogo, setcontentLogo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/logo", { headers, method: "GET" })
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
      {Object.keys(contentLogo).map((item, i) => (
        <h1 className="logo" key={i}>
          {contentLogo[item].name}
        </h1>
      ))}
    </div>
  );
};

export default Logo;
