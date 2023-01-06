import React from "react";
import "./button.css";
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

const Button = () => {
  const [error, setError] = useState(null);
  const [contentButtons, setcontentButtons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/buttons", {
      headers,
      method: "GET",
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(({ data }) => setcontentButtons(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  // console.log(contentButtons);
  return (
    <div>
      {contentButtons.map(({ id, attributes }) => (
        <a
          className="button button-2"
          href={attributes.path_button}
          key={id}
          target="_blank"
          rel="noopener noreferrer"
        >
          {attributes.content_button} <i className="fas fa-download" />
        </a>
      ))}
    </div>
  );
};

export default Button;
