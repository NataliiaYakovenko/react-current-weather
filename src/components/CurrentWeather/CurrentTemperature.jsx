import React, { Component } from "react";


const temperatureCelsius ="https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current=temperature_2m";

const temperatureFahrenheit ="https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current=temperature_2m&temperature_unit=fahrenheit";

class CurrentTemperature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataTemperature: temperatureFahrenheit,
      //degrees: celsius
    };
  }

  componentDidMount = () => {
    const { dataTemperature } = this.state;
    fetch(dataTemperature)
      .then((response) => response.json())
      .then((data) => this.displayWeather(data))
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  displayWeather = (data) => {
    this.setState({
      temperature: `${data.current.temperature_2m} ${data.hourly_units.temperature_2m}`,
    });
  };

  render() {
    const { temperature } = this.state;
    return (
      <article>
        {temperature ? <p>temperature: {temperature}</p> : <p>Error...</p>}
      </article>
    );
  }
}

export default CurrentTemperature;
