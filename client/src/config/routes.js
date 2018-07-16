// Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import App from "../components/app";
import Home from "../components/home";
import Login from "../components/login";
import Register from "../components/register";
import Dashboard from "../components/main/dashboard";
import PrivateRoute from "../utils/privateRoutes";
import CreateProfile from "../components/main/createProfile";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <PrivateRoute path="/dashboard" exact component={Dashboard} />
      <PrivateRoute path="/create-profile" exact component={CreateProfile} />
    </Switch>
  </App>
);

export default AppRoutes;
