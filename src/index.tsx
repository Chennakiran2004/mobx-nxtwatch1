// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// index.tsx (Root of your application)
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
