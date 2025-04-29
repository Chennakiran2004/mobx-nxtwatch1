// // import "@cypress/code-coverage/support";

// // import React from "react";

// import { StrictMode } from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// const rootElement = document.getElementById("root")!;
// const root = ReactDOM.createRoot(rootElement);

// // root.render(
// //   <StrictMode>
// //     <Provider store={store}>
// //       <App />
// //     </Provider>
// //   </StrictMode>
// // );

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
