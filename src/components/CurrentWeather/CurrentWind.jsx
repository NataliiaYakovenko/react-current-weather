import React, { Component } from "react";

  
const windKm = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=wind_speed_10m&current=wind_speed_10m'

const windMs = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=wind_speed_10m&current=wind_speed_10m&wind_speed_unit=ms'



class CurrentWind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataWind: windMs

    };
  }

  componentDidMount = () => {
    const {dataWind}= this.state
    fetch(dataWind)
      .then((response) => response.json())
      .then((data) => this.displayWeather(data))
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  displayWeather = (data) => {
    this.setState({
        windSpeed: `${data.current.wind_speed_10m} ${data.hourly_units.wind_speed_10m}`,
    });
  };

  render() {
    const { windSpeed } = this.state;
    return (
      <article>
        {windSpeed ? (
          <p>
            wind speed: {windSpeed} 
          </p>
        ) : (
          <p>Error...</p>
        )}
      </article>
    );
  }
}

export default CurrentWind;
