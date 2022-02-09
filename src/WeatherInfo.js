import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
                  <WeatherIcon code={props.data.icon} size={68} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
            <br />
            <div id="additional-info">
              <ul>
                <li>
                  Feels like:{" "}
                  <span id="feels-like">
                    {Math.round(props.data.FeelsLike)}
                  </span>
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
        </div>
      </div>
    </div>
  );
}
