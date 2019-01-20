import React from "react";
import { Route, Switch } from "react-router-dom";
import { LandingView, LoginView, SelectPositionView } from "views";

const Router = () => (
  <Switch>
    <Route exact path="/" component={LandingView} />
    <Route exact path="/login" component={LoginView} />
    <Route exact path="/position" component={SelectPositionView} />
  </Switch>
);

export default Router;
