import React from "react";
import FormattedDate from "./FormattedDate";
import "./App.css";
import WeatherIcon from "./WeatherIcon";

export default function DisplayWeatherInfo(props) {
  return (
    <div className="DisplayWeatherInfo">
      <h1>{props.data.city}</h1>
      <h3>
        <FormattedDate date={props.data.date} />
      </h3>
      <div className="text-center mb-5">
        <WeatherIcon
          iconCode={props.data.iconCode}
          alt={props.data.description}
          size={128}
        />
        <h2>{props.data.temperature}℃</h2>
        <h3 className="text-capitalize">{props.data.description}</h3>
      </div>
      <ul className="d-flex text-center">
        <li className="col-4">
          <i class="fa-solid fa-wind" /> {props.data.wind} km/hr
        </li>
        <li className="col-4">
          <i class="fa-solid fa-droplet" /> {props.data.humidity}%
        </li>
        <li className="col-4">
          <i class="fa-solid fa-temperature-half" />
          {props.data.realFeel}℃
        </li>
      </ul>
    </div>
  );
}
