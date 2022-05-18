import React from "react";
import "./App.css";

export default function Weather() {
  return (
    <div>
      <h1>City Name</h1>
      <h2>mostly clear</h2>
      <h2>21℃</h2>
      <h3>time</h3>
      <img alt="weather"></img>
      <ul>
        <li>wind</li>
        <li>humidity</li>
        <li>feels like</li>
      </ul>
    </div>
  );
}
