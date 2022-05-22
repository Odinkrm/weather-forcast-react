import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, SetWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    SetWeatherData({
      loaded: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      wind: Math.round((response.data.wind.speed * 18) / 5),
      humidity: response.data.main.humidity,
      realFeel: Math.round(response.data.main.feels_like),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  const apiKey = "524e8f11afa775e2251f3e8b9020cadd";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  if (weatherData.loaded) {
    return (
      <div className="Weather shadow">
        <div className="d-flex flex-row-reverse mb-4 mt-2">
          <form>
            <input
              type="text"
              placeholder="Search for a city..."
              autoFocus="on"
            ></input>
            <button type="submit">
              <i class="fa-solid fa-magnifying-glass" />
            </button>
          </form>
        </div>
        <h1>{weatherData.city}</h1>
        <h3>
          <FormattedDate date={weatherData.date} />
        </h3>
        <div className="text-center mb-5">
          <img alt={weatherData.description} src={weatherData.iconUrl} />
          <h2>{weatherData.temperature}℃</h2>
          <h3 className="text-capitalize">{weatherData.description}</h3>
        </div>
        <ul className="d-flex text-center">
          <li className="col-4">
            <i class="fa-solid fa-wind" /> {weatherData.wind} km/hr
          </li>
          <li className="col-4">
            <i class="fa-solid fa-droplet" /> {weatherData.humidity}%
          </li>
          <li className="col-4">
            <i class="fa-solid fa-temperature-half" />
            {weatherData.realFeel}℃
          </li>
        </ul>
        <hr />
      </div>
    );
  } else {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <ReactAnimatedWeather icon="WIND" color="#1d3045" animate={true} />
      </div>
    );
  }
}
