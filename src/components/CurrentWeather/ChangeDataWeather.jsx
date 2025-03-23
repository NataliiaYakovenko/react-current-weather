import React, { Component } from "react";

class ChangeDataWeather extends Component {
 
    handlerChangeTemperature = (event) => {
    this.props.onChangeTemperature(event);
  };

  handlerChangeWind = (event) => {
    this.props.onChangeWind(event);
  };

  render() {
    return (
      <div>
        <select onChange={this.handlerChangeTemperature}>
          <option value="c">
            °C
          </option>
          <option value="f">°F</option>
        </select>

        <select onChange={this.handlerChangeWind}>
          <option value="kmh">
            Km/h
          </option>
          <option value="ms">M/s</option>
        </select>
      </div>
    );
  }
}

export default ChangeDataWeather;
