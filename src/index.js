import React from "react";
import ReactDOM from "react-dom/client";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    < CurrentWeather />
  </React.StrictMode>
);
