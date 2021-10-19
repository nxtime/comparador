import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Signin from "./Signin";

function App() {
  let [users, setUsers] = useState([
    {
      id: 0,
      name: "admin",
      pw: "1234",
      email: "admin@email.com",
    },
  ]);

  const addUser = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/signin">
            <Signin users={users} addUser={addUser}></Signin>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
