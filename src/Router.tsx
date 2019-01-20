import React from "react";
import { Route, Switch } from "react-router-dom";
import { LandingView, LoginView } from "views";

const Router = () => (
  <Switch>
    <Route exact path="/" component={LandingView} />
    <Route exact path="/login" component={LoginView} />
  </Switch>
);

export default Router;
