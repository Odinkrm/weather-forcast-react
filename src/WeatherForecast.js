import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./App.css";

export default function WeatherForecast(props) {
  const [forcastData, SetForcastData] = useState({ loaded: false });

  function handleResponse(response) {
    SetForcastData({
      loaded: true,
      iconCode: response.data.daily[0].weather[0].icon,
      date: new Date(response.data.daily[0].dt * 1000),
      minTemp: Math.round(response.data.daily[0].temp.min),
      maxTemp: Math.round(response.data.daily[0].temp.max),
    });
  }
  function formatDay(props) {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[props.getDay()];
  }

  if (forcastData.loaded) {
    return (
      <div className="WeatherForcast row">
        <div className="col text-center">
          <div className="forecastDay">{formatDay(forcastData.date)}</div>
          <WeatherIcon iconCode={forcastData.iconCode} size={32} />
          <div className="forcastTemp">
            <span className="highestTemp">{forcastData.maxTemp}°</span>
            <span className="lowestTemp text-muted">
              {" "}
              {forcastData.minTemp}°
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    let longitude = props.cordinates.lon;
    let latitude = props.cordinates.lat;
    let apiKey = "524e8f11afa775e2251f3e8b9020cadd";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
