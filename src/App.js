import React from "react";
import "./App.css";
import Hero from "./components/hero/hero";
import Team from "./components/team/team";
// import { useEffect, useState } from "react";

// const parseJSON = (resp) => (resp.json ? resp.json() : resp);

// const checkStatus = (resp) => {
//   if (resp.status >= 200 && resp.status < 300) {
//     return resp;
//   }

//   return parseJSON(resp).then((resp) => {
//     throw resp;
//   });
// };

// const headers = { "Content-Type": "application/json" };

const App = () => {
  // const [error, setError] = useState(null);
  // const [restaurants, setRestaurants] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:1337/api/restaurants", { headers, method: "GET" })
  //     .then(checkStatus)
  //     .then(parseJSON)
  //     .then(({ data }) => setRestaurants(data))
  //     .catch((error) => setError(error));
  // }, []);

  // if (error) {
  //   return <div>An error occured: {error.message}</div>;
  // }
  // console.log(restaurants);
  return (
    <div className="App">
      <Hero />
      <Team />
      {/* <ul>
        {restaurants.map(({ id, attributes }) => (
          <h2 key={id}>{attributes.name}</h2>
        ))}
      </ul> */}
    </div>
  );
};

export default App;
