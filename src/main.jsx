import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/css/index.css";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { CounterApp } from "./pages/CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
    <Register
      email={"rene.lozano@gmail.com"}
      password={"123456"}
      username={"kiobrs33"}
    />
    <CounterApp />
  </React.StrictMode>
);
