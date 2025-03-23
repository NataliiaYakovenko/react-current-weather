import React, { Component } from "react";
import DisplayWeather from "./DisplayWeather";
import ChangeDataWeather from "./ChangeDataWeather";

class CurrentWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperatureValue: "c",
      windValue: "kmh",
    };
  }

  handlerChangeTemperature = (event) => {
    this.setState({
      temperatureValue: event.target.value,
    });
  };

  handlerChangeWind = (event) => {
    this.setState({
      windValue: event.target.value,
    });
  };

  render() {
    const { temperatureValue, windValue } = this.state;
    return (
      <div>
        <DisplayWeather
          temperatureValue={temperatureValue}
          windValue={windValue}
        />

        <ChangeDataWeather
          onChangeTemperature={this.handlerChangeTemperature}
          onChangeWind={this.handlerChangeWind}
        />
      </div>
    );
  }
}

export default CurrentWeather;
