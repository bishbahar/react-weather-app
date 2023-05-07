import React from "react";
import FormattedDate from "./formatteddate";
import WeatherIcon from "./weathericon";



export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>

          <span className="temperature">
            {Math.round(props.data.temprature)}
          </span>
          <span className="unit">°C | F</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
