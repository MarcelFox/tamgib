import React from "react";
import ReactDOM from "react-dom";
import App from "@Domain/example/App";
import Routes from "@Domain/example/Router";


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
