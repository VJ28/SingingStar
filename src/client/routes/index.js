import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import Registration from "../components/Registration";
import ContestantList from "../components/ContestantList";
import Winners from "../components/Winners";

class AppRoute extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={Registration} />
        <Route exact path="/contestant" component={ContestantList} />
        <Route exact path="/winners/" component={Winners} />
      </Switch>
    );
  }
}

export default AppRoute;
