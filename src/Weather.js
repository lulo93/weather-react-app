import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import "./index.css";
import "./App.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      fahrenheit: "47",
      icon: response.data.weather[0].icon,
      FeelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      minTemp: "7",
      maxTemp: "2",
    });
  }

  function search() {
    const apiKey = "24be2a5d0560b29769b34e4136c9cb1f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form onSubmit={handleSubmit} id="search-form" className="mb-3">
              <div className="row">
                <div className="col-sm-6">
                  <input
                    type="search"
                    placeholder="Type a location.."
                    className="form-control"
                    id="city-input"
                    autoComplete="off"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-sm-2">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary"
                    id="search-button"
                  />
                </div>
                <div className="col-sm-2">
                  <input
                    type="submit"
                    value="Current Location"
                    className="btn btn-primary"
                    id="location-button"
                  />
                </div>
              </div>
            </form>
            <WeatherInfo data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
