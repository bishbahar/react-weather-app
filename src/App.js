import React from "react";
import './App.css';
import Weather from "./weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by
          <a href="https://github.com/bishbahar"> Narges Bishbahar </a> and is
          <a
            href="https://github.com/bishbahar/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}


