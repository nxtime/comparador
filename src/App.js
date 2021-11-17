import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./Signin";
import Login from "./Login";

import Menu from "./Menu";
import { AnimatePresence } from "framer-motion";

function App() {
  let [isLogged, setIsLogged] = useState({
    state: false,
    user: "",
  });
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

  const loggedIn = (state) => {
    setIsLogged(state);
  };

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
            {isLogged.state ? (
              <Menu user={isLogged.user}/>
            ) : (
              <>
                <Home />
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
                        key={Math.random() * 0.821}
                      >
                        {e.singleName}
                      </h2>
                    );
                  })}
                </div>
              </>
            )}
          </Route>
          <Route exact path="/signin">
            <Signin users={users} addUser={addUser}></Signin>
          </Route>
          <Route exact path="/login">
            <Login users={users} loggedIn={loggedIn}></Login>
          </Route>
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
