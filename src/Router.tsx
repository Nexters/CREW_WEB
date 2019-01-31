import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  ApplicantView,
  LandingView,
  LoginView,
  SelectPositionView
} from 'views'

const Router = () => (
  <Switch>
    <Route exact path="/" component={LandingView} />
    <Route exact path="/login" component={LoginView} />
    <Route exact path="/position" component={SelectPositionView} />
    <Route exact path="/applicants" component={ApplicantView} />
  </Switch>
)

export default Router
