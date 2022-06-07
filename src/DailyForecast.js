import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./App.css";

export default function DailyForecast(props) {
  function formatDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    if (day === 6) {
      return days[0];
    } else {
      return days[day + 1];
    }
  }

  return (
    <div className="WeatherForecastItem text-center">
      <div className="forecastDay mb-3">{formatDay()}</div>
      <WeatherIcon iconCode={props.data.weather[0].icon} size={34} />
      <div className="forecastTemp mt-3">
        <span className="highestTemp me-2">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="lowestTemp"> {Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
