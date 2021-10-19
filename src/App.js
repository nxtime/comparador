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
            <h1
              className="usuarios"
              style={{
                textAlign: "center",
                color: "#effefe",
              }}
            >
              Usuários Cadastrados:
            </h1>
            <div className="users" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", maxWidth: "800px", width: "80%", margin: "auto" }}>
              {users.map((e) => {
                return (
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#defefe",
                      backgroundColor: "var(--primary)",
                      // width: "fit-content",
                      margin: "10px",
                      padding: ".75rem 1.25rem",
                      borderRadius: "50px",
                    }}
                  >
                    {e.name}
                  </h2>
                );
              })}
            </div>
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
