import React from "react";
import style from "./client/styles/homepage.scss";
import { loadableReady } from "@loadable/component";
import { hydrate } from "react-dom";

import { BrowserRouter } from "react-router-dom";
import App from "./client/containers/App";
loadableReady(() => {
  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );
});
