import React from "react";
import ReactDom from "react-dom";
import App from "./App";

//react dom
ReactDom.render(
  <React.StrictMode>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&family=Phudu&display=swap"
        rel="stylesheet"
      />
    </head>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
