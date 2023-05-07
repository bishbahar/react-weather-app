import React,{useState} from "react";
import axios from "axios";
import "./weather.css";
import FormattedDate from "./formatteddate";

export default function Weather() {
  const [weatherData,setWeatherData]=useState({ready:false})
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready:true,
      temprature:response.data.main.temp,
      humidity:response.data.main.humidity,
      description:response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind:response.data.wind.speed,
      city:response.data.name
    })
  }
  
  if(weatherData.ready){
return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li><FormattedDate date={weatherData.date}/></li>
        <li>{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src={weatherData.iconUrl}
            alt={weatherData.description}
          />
          <span className="temperature">{Math.round(weatherData.temprature)}</span>
          <span className="unit">°C | F</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {Math.round(weatherData.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
  }else{
const apiKey = "a62bf47452d78ba41c221fd3cb539691";
let city = "London";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return "Loding..."
  }
}
