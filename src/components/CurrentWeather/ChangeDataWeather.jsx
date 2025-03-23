import React, { Component } from "react";
import styles from "./CurrentWeather.module.css";

class ChangeDataWeather extends Component {
  handlerChangeTemperature = (event) => {
    this.props.onChangeTemperature(event);
  };

  handlerChangeWind = (event) => {
    this.props.onChangeWind(event);
  };

  render() {
    return (
      <article className={styles.indicatorsWrapper}>
        <label>
          Wind speed unit:
          <select onChange={this.handlerChangeWind}>
            <option value="kmh">Km/h</option>
            <option value="ms">M/s</option>
          </select>
        </label>

        <label>
          Temperature unit:
          <select onChange={this.handlerChangeTemperature}>
            <option value="c">°C</option>
            <option value="f">°F</option>
          </select>
        </label>
      </article>
    );
  }
}

export default ChangeDataWeather;
