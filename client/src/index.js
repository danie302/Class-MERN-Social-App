// Dependecies
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// Components
import AppRoutes from "./config/routes";

render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById("root")
);
