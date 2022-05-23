import React from "react";
import FormattedDate from "./FormattedDate";
import "./App.css";

export default function DisplayWeatherInfo(props) {
  return (
    <div className="DisplayWeatherInfo">
      <h1>{props.city}</h1>
      <h3>
        <FormattedDate date={props.date} />
      </h3>
      <div className="text-center mb-5">
        <img alt={props.description} src={props.iconUrl} />
        <h2>{props.temperature}℃</h2>
        <h3 className="text-capitalize">{props.description}</h3>
      </div>
      <ul className="d-flex text-center">
        <li className="col-4">
          <i class="fa-solid fa-wind" /> {props.wind} km/hr
        </li>
        <li className="col-4">
          <i class="fa-solid fa-droplet" /> {props.humidity}%
        </li>
        <li className="col-4">
          <i class="fa-solid fa-temperature-half" />
          {props.realFeel}℃
        </li>
      </ul>
    </div>
  );
}
