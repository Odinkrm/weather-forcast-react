import React from "react";
import "./App.css";

export default function Weather() {
  return (
    <div className="Weather shadow">
      <div className="d-flex flex-row-reverse mb-5">
        <form>
          <input
            type="text"
            placeholder="Search For a City..."
            autoFocus="on"
          ></input>
          <button className="btn btn-light" type="submit">
            <i class="fa-solid fa-magnifying-glass" />
            Search
          </button>
        </form>
      </div>
      <h1>New York</h1>
      <h3>Sunday, 10:31</h3>
      <div className="text-center mb-5 mt-2">
        <img
          alt="weather condition"
          src="http://openweathermap.org/img/wn/10d@2x.png"
        />
        <h2>21℃</h2>
        <h3>mostly clear</h3>
      </div>
      <ul className="d-flex text-center">
        <li className="col-4">
          <i class="fa-solid fa-wind" /> 2 km/hr
        </li>
        <li className="col-4">
          <i class="fa-solid fa-droplet" /> 20%
        </li>
        <li className="col-4">
          <i class="fa-solid fa-temperature-half" />
          19℃
        </li>
      </ul>
      <hr />
    </div>
  );
}
