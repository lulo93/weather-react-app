import React, { useState } from "react";
import WeatherForecast from "./WeatherForecast";
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
      icon: response.data.weather[0].icon,
      FeelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      coords: response.data.coord,
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
      <div className="flex">
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
                </div>
              </form>
              <WeatherInfo data={weatherData} />
              <WeatherForecast coords={weatherData.coords} />
            </div>
          </div>
          <div className="credits">
            <small>
              <a
                href="https://github.com/lulo93/weather-react-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open-source code
              </a>
              {""} by Luisa Rua Estrada
            </small>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
