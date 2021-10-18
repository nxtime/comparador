import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Signin from "./Signin";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/signin" component={Signin}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
