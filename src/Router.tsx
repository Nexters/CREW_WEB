import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  ApplicantView,
  LoginView,
  ManageFormView,
  ResumeView,
  SelectPositionView,
  RegisterFormView,
  SignUpView,
  FormView,
  ApplyStep3,
} from "views";

const Router = () => (
  <Switch>
    <Route exact path="/" component={LoginView} />
    <Route exact path="/position" component={SelectPositionView} />
    <Route exact path="/applicants" component={ApplicantView} />
    <Route exact path="/applicants" component={ApplicantView} />
    <Route exact path="/resume" component={ResumeView} />
    <Route exact path="/form/manage" component={ManageFormView} />
    <Route exact path="/signup" component={SignUpView} />
    <Route exact path="/registerForm" component={RegisterFormView} />
    <Route exact path="/form" component={FormView} />
    <Route exact path="/ApplyStep3" component={ApplyStep3} />
  </Switch>
);

export default Router;
