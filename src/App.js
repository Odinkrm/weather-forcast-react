import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer className="text-center mt-2 text-muted">
          This project was coded by Asal Karimi and is open-sourced on{" "}
          <a
            href="https://github.com/Odinkrm/weather-forcast-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://weather-forcast-react-app.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
