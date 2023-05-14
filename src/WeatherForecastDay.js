import React from "react";
import WeatherIcon from "./weathericon";

export default function WeatherForcastDay(props){
    function maxTemperature(){
        let temperature= Math.round(props.data.temp.max)
        return `${temperature}°`
    }
     function minTemperature() {
       let temperature = Math.round(props.data.temp.min);
       return `${temperature}°`;
     }
     function day(){
        let date=new Date(props.data.dt *1000)
        let day=date.getDay();
        let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
        return days[day];

     }
    return (
      <div>
        <div className="WeatherForcast-day">{day()}</div>

        <WeatherIcon code={props.data.weather[0].icon} size={34} />
        <div className="Weatherprops-temperatures">
          <span className="Weatherprops-temperatures-max">
            {maxTemperature()}
          </span>
          <span className="Weatherprops-temperatures-min">
            {minTemperature()}
          </span>
        </div>
      </div>
    );
}