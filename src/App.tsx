import React, { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Router from "./Router";

export interface Props extends RouteComponentProps {}
interface State {}

class App extends Component<Props, State> {
  public render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default withRouter(App);
