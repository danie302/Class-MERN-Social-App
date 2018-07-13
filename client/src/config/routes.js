// Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import App from "../components/app";
import Home from "../components/home";
import Login from "../components/login";
import Register from "../components/register";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Switch>
  </App>
);

export default AppRoutes;
