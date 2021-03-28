import React, { Component } from "react";

import { WeatherContainer, WeatherLeft, WeatherRight } from "./styles.weather";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeather: {
        coord: { lon: -80.19, lat: 25.77 },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        base: "stations",
        main: {
          temp: 303.18,
          feels_like: 300.71,
          temp_min: 302.04,
          temp_max: 304.26,
          pressure: 1016,
          humidity: 52,
        },
        visibility: 10000,
        wind: { speed: 8.2, deg: 60, gust: 11.8 },
        clouds: { all: 75 },
        dt: 1600802014,
        sys: {
          type: 1,
          id: 4896,
          country: "US",
          sunrise: 1600772971,
          sunset: 1600816626,
        },
        timezone: -14400,
        id: 4164138,
        name: "Miami",
        cod: 200,
      },
    };
  }

  render() {
    return (
      <WeatherContainer>
        <WeatherLeft>
          <div>{this.state.currentWeather.name}</div>
          <div>
            {this.state.currentWeather.coord["lon"] +
              ", " +
              this.state.currentWeather.coord["lat"]}
          </div>
        </WeatherLeft>
        <WeatherRight>
          <div>
            <img
              alt=""
              src={
                "http://openweathermap.org/img/wn/" +
                this.state.currentWeather.weather[0].icon +
                "@2x.png"
              }
            />
          </div>
          <div>
            {this.state.currentWeather.weather[0].description.toUpperCase()}
          </div>
          <div> {this.state.currentWeather.main.temp}</div>
        </WeatherRight>
      </WeatherContainer>
    );
  }
}

export default Weather;
