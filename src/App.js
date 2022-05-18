import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Asal Karimi and is{" "}
          <a
            href="https://github.com/Odinkrm/weather-forcast-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on Netlify
        </footer>
      </div>
    </div>
  );
}
