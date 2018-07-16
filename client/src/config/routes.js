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
import EditProfile from "../components/main/editProfile";
import AddExperience from "../components/main/addExperience";
import AddEducation from "../components/main/addEducation";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <PrivateRoute path="/dashboard" exact component={Dashboard} />
      <PrivateRoute path="/create-profile" exact component={CreateProfile} />
      <PrivateRoute path="/edit-profile" exact component={EditProfile} />
      <PrivateRoute path="/add-experience" exact component={AddExperience} />
      <PrivateRoute path="/add-education" exact component={AddEducation} />
    </Switch>
  </App>
);

export default AppRoutes;
