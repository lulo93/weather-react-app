import React from "react";
import "./index.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    dateTime: "Saturday 12:50",
    description: "Fog",
    celcius: "7",
    fahrenheit: "47",
    imgLink: "https://openweathermap.org/img/wn/50d@2x.png",
    FeelsLike: "0",
    humidity: "96",
    wind: "2",
    minTemp: "7",
    maxTemp: "2",
  };

  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form id="search-form" className="mb-3">
            <div className="row">
              <div className="col-sm-6">
                <input
                  type="search"
                  placeholder="Type a location.."
                  className="form-control"
                  id="city-input"
                  autoComplete="off"
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
          <div className="overview">
            <h1 className="city">{weatherData.city}</h1>
            <ul>
              <br />
              <li>Last updated: {weatherData.dateTime}</li>
              <li className="description">{weatherData.description}</li>
            </ul>
            <div className="row">
              <div className="col-sm-6">
                <div className="clearfix weather-temperature">
                  <img src={weatherData.imgLink} alt="" />{" "}
                  <div className="float-left">
                    <strong id="temperature"></strong>
                    <span className="units"></span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6" id="additional-info">
                <ul>
                  <li id="celsius-link" className="active">
                    {weatherData.celcius} °C
                  </li>
                  <li>{weatherData.fahrenheit} °F</li>
                </ul>
                <br />
                <ul>
                  <li>
                    Feels like:{" "}
                    <span id="feels-like">{weatherData.FeelsLike}</span>°C
                  </li>
                  <li>
                    Humidity: <span id="humidity">{weatherData.humidity}</span>%
                  </li>
                  <li>
                    Wind: <span id="wind">{weatherData.wind}</span> km/h
                  </li>
                </ul>
              </div>
            </div>

            <div className="weather-forecast" id="forecast">
              <div className="row">
                <div className="col-2">
                  <div className="weather-forecast-date"></div>
                  <img src={weatherData.imgLink} alt="" />{" "}
                  <div className="weather-forecast-temperatures">
                    <span className="weather-forecast-temperature-max">
                      {weatherData.maxTemp}
                    </span>
                    °C
                    <span className="weather-forecast-temperature-min">
                      {weatherData.minTemp}
                    </span>
                    °C
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
