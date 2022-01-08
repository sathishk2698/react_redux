import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MealsDetails from "./components/mealDetails";
import App from "./App";

//Global routes component
class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/detail-view/:id" component={MealsDetails} />
        </Switch>
      </Router>
    );
  }
}

export default RouterComponent;
