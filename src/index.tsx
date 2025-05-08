import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import rootStore from "./Common/stores";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider {...rootStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
