import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

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
    <StateProvider initialState={initialState} reducer={reducer}>
      <GlobalStyle />
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
