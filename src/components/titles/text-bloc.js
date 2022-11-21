import * as React from "react";
import "./text-bloc.css";
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

const TextBloc = () => {
  const [error, setError] = useState(null);
  const [contentTextBlocs, setcontentTextBlocs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/text-blocs", { headers, method: "GET" })
      .then(checkStatus)
      .then(parseJSON)
      .then(({ data }) => setcontentTextBlocs(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  // console.log(contentTextBlocs);
  return (
    <div>
      <div className="text-bloc">
        {contentTextBlocs.map(({ id, attributes }) => (
          <p key={id}>{attributes.bloc}</p>
        ))}
        {contentTextBlocs.map(({ id, attributes }) => (
          <p key={id}>{attributes.bloc2}</p>
        ))}
      </div>
    </div>
  );
};

export default TextBloc;
