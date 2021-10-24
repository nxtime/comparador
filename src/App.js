import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Signin from "./Signin";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  let [users, setUsers] = useState([
    {
      id: 0,
      key: Math.random() * 0.821,
      name: "admin",
      singleName: "admin",
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
    <Router>
      <AnimatePresence initial={true} exitBeforeEnter>
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
            <div
              className="users"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                maxWidth: "800px",
                width: "80%",
                margin: "auto",
              }}
            >
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
                    {e.singleName}
                  </h2>
                );
              })}
            </div>
          </Route>
          <Route exact path="/signin">
            <Signin users={users} addUser={addUser}></Signin>
          </Route>
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
