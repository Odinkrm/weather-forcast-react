import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./App.css";

export default function DailyForecast(props) {
  function formatDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day + 1];
  }

  return (
    <div className="text-center">
      <div className="forecastDay">{formatDay()}</div>
      <WeatherIcon iconCode={props.data.weather[0].icon} size={32} />
      <div className="forecastTemp">
        <span className="highestTemp">{Math.round(props.data.temp.max)}°</span>
        <span className="lowestTemp text-muted">
          {" "}
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
