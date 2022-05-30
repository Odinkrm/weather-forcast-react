import React, { useState } from "react";
import axios from "axios";
import DisplayWeatherInfo from "./DisplayWeatherInfo";
import WeatherForecast from "./WeatherForecast";
import ReactAnimatedWeather from "react-animated-weather";
import "./App.css";

export default function Weather() {
  const [weatherData, SetWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState("Istanbul");

  function handleResponse(response) {
    SetWeatherData({
      loaded: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      wind: Math.round((response.data.wind.speed * 18) / 5),
      humidity: response.data.main.humidity,
      realFeel: Math.round(response.data.main.feels_like),
      iconCode: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      cords: response.data.coord,
    });
  }
  function search() {
    const apiKey = "524e8f11afa775e2251f3e8b9020cadd";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.loaded) {
    return (
      <div className="Weather shadow">
        <div className="d-flex flex-row-reverse mb-4 mt-2">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search for a city..."
              autoFocus="on"
              onChange={handleCityChange}
            ></input>
            <button type="submit">
              <i class="fa-solid fa-magnifying-glass" />
            </button>
          </form>
        </div>
        <DisplayWeatherInfo data={weatherData} />
        <hr />
        <WeatherForecast cordinates={weatherData.cords} />
      </div>
    );
  } else {
    search();
    return (
      <div className="d-flex justify-content-center align-items-center">
        <ReactAnimatedWeather icon="WIND" color="#3c628c" animate={true} />
      </div>
    );
  }
}
