import React, { Component } from "react";
import {
  Route,
  Switch,
  withRouter,
  RouteComponentProps
} from "react-router-dom";
import { LandingView, LoginView } from "views";

export interface Props extends RouteComponentProps {}
interface State {}

class App extends Component<Props, State> {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingView} />
          <Route exact path="/login" component={LoginView} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
