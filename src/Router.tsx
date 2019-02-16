import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  ApplicantView,
  LandingView,
  LoginView,
  ManageFormView,
  ResumeView,
  SelectPositionView,
  RegisterFormView,
  ApplyStep1,
  ApplyStep2,
  ApplyStep3
} from 'views';

const Router = () => (
  <Switch>
    <Route exact path="/" component={LandingView} />
    <Route exact path="/login" component={LoginView} />
    <Route exact path="/position" component={SelectPositionView} />
    <Route exact path="/applicants" component={ApplicantView} />
    <Route exact path="/applicants" component={ApplicantView} />
    <Route exact path="/resume" component={ResumeView} />
    <Route exact path="/form/manage" component={ManageFormView} />
    <Route exact path="/registerForm" component={RegisterFormView} />
    <Route exact path="/applyStep1" component={ApplyStep1} />
    <Route exact path="/ApplyStep2" component={ApplyStep2} />
    <Route exact path="/ApplyStep3" component={ApplyStep3} />
  </Switch>
);

export default Router;
