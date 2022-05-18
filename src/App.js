import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Asal Karimi and is open-sourced on GitHub
          and hosted on Netlify
        </footer>
      </div>
    </div>
  );
}
