import React from "react";
import CurrentTemperature from "./CurrentTemperature";
import CurrentWind from "./CurrentWind";

function CurrentWeather() {
  return (
    <div>
      <CurrentTemperature />
      <CurrentWind />
    </div>
  );
}

export default CurrentWeather;
