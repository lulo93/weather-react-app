import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <h1 className="city">{props.data.city}</h1>
        <ul>
          <br />
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="description">{props.data.description}</li>
        </ul>
        <div className="row">
          <div className="col-sm-6">
            <div className="clearfix weather-temperature">
              <div className="weatherIcon">
                <div className="float-left">
                  <WeatherIcon code={props.data.icon} />
                </div>
              </div>
              <div className="float-left">
                <strong id="temperature"></strong>
                <span className="units"></span>
              </div>
            </div>
          </div>
          <div className="col-sm-6" id="additional-info">
            <ul>
              <li id="celsius-link" className="active">
                {Math.round(props.data.temperature)} °C
              </li>
              <li>{props.data.fahrenheit} °F</li>
            </ul>
            <br />
            <ul>
              <li>
                Feels like:{" "}
                <span id="feels-like">{Math.round(props.data.FeelsLike)}</span>
                °C
              </li>
              <li>
                Humidity: <span id="humidity">{props.data.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{props.data.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>

        <div className="weather-forecast" id="forecast">
          <div className="row">
            <div className="col-2">
              <div className="weather-forecast-date"></div>
              <img src={props.data.imgLink} alt="" />{" "}
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-temperature-max">
                  {props.data.maxTemp}
                </span>
                °C
                <span className="weather-forecast-temperature-min">
                  {props.data.minTemp}
                </span>
                °C
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
