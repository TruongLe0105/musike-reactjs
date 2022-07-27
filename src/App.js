import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import "./index.css";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
