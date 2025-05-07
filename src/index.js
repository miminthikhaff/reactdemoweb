import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  /*   <>
  <h1>Hello World!</h1>
  <h2>Welcome to React</h2>
  <h3>Let's build something amazing together!</h3>
  <h4>Happy Coding!</h4>  
  <App />
  </> */

  // React Fragment is used to group multiple elements without adding extra nodes to the DOM

  <React.Fragment>
    <App />
  </React.Fragment>
);
