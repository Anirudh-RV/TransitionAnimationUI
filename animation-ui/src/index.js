import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import VideoApp from "./VideoApp";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <h1> Image comparision </h1>
    <App />
    <h1> Video comparision </h1>
    <VideoApp />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
