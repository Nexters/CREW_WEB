import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  ApplicantView,
  LandingView,
  LoginView,
  ManageFormView,
  ResumeView,
  SelectPositionView
} from "views";

const Router = () => (
  <Switch>
    <Route exact path='/' component={LandingView} />
    <Route exact path='/login' component={LoginView} />
    <Route exact path='/position' component={SelectPositionView} />
    <Route exact path='/resume' component={ResumeView} />
    <Route exact path='/applicants' component={ApplicantView} />
    <Route exact path='/form/manage' component={ManageFormView} />
  </Switch>
);

export default Router;
