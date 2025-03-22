import React, { Component } from "react";

const temperatureCelsiusKm =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=wind_speed_10m,temperature_2m&current=wind_speed_10m,temperature_2m";

const temperatureFahrenheitKm =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=wind_speed_10m,temperature_2m&current=wind_speed_10m,temperature_2m&temperature_unit=fahrenheit";

const temperatureCelsiusMs =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=wind_speed_10m,temperature_2m&current=wind_speed_10m,temperature_2m&wind_speed_unit=ms";

const temperatureFahrenheitMs =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=wind_speed_10m,temperature_2m&current=wind_speed_10m,temperature_2m&wind_speed_unit=ms&temperature_unit=fahrenheit";

class DisplayWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: null,
      wind: null,
      temperatureValue: "c",
      windValue: "kmh",
    };
  }

  componentDidMount = () => {
    this.getTemperature();
  };

  getTemperature = () => {
    const { temperatureValue, windValue } = this.state;
    let api = "";

    if (temperatureValue === "c" && windValue === "kmh") {
      api = temperatureCelsiusKm;
    } else if (temperatureValue === "f" && windValue === "kmh") {
      api = temperatureFahrenheitKm;
    } else if (temperatureValue === "c" && windValue === "ms") {
      api = temperatureCelsiusMs;
    } else if (temperatureValue === "f" && windValue === "ms") {
      api = temperatureFahrenheitMs;
    }

    fetch(api)
      .then((response) => response.json())
      .then((data) => this.displayData(data))
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  displayData = (data) => {
    this.setState({
      temperature: `${data.current.temperature_2m} ${data.hourly_units.temperature_2m}`,
      wind: `${data.current.wind_speed_10m} ${data.hourly_units.wind_speed_10m}`,
    });
  };

  handlerChangeTemperature = ({ target: { value } }) => {
    this.setState({
      temperatureValue: value,
    });
    setTimeout(() => {
      this.getTemperature();
    }, 0);
  };

  handlerChangeWind = ({ target: { value } }) => {
    this.setState({
      windValue: value,
    });
    setTimeout(() => {
      this.getTemperature();
    }, 0);
  };

  render() {
    const { temperature, wind } = this.state;
    return (
      <>
        <article>
          {temperature ? <p> 🌡️{temperature}</p> : <p>Error...</p>}
          {wind ? <p> 💨 {wind}</p> : <p>Error...</p>}
        </article>

        <select onChange={this.handlerChangeTemperature}>
          <option selected value="c">
            °C
          </option>
          <option value="f">°F</option>
        </select>

        <select onChange={this.handlerChangeWind}>
          <option selected value="kmh">
            Km/h
          </option>
          <option value="ms">M/s</option>
        </select>
      </>
    );
  }
}

export default DisplayWeather;
