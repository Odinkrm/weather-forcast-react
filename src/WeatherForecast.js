import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import DailyForecast from "./DailyForecast";

export default function WeatherForecast(props) {
  const [forecastData, SetForecastData] = useState(null);
  const [loaded, SetLoaded] = useState(false);

  function handleResponse(response) {
    SetForecastData(response.data.daily);
    SetLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForcast row">
        {forecastData.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <DailyForecast data={dailyForecast} />
              </div>
            );
          }
        })}
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
