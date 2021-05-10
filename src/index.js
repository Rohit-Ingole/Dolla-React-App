import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Poppins, sans-serif;
    }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
