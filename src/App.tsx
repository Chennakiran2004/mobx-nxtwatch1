import React from "react";
import "./App.css";
import Login from "./Profile/components/Login";
import { StoresProvider } from "./Store/StoresProvider";

function App() {
  return (
    <div className="App">
      <StoresProvider>
        <Login />
      </StoresProvider>
    </div>
  );
}

export default App;
