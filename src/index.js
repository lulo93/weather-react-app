import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <div className="credits">
          <small>
            <a
              href="https://github.com/lulo93/weather-react-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code
            </a>
            {""} by Luisa Rua Estrada
          </small>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
