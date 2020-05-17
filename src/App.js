import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import { accounts } from "./data";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [users, setUsers] = useState(accounts);
  const [curUser, setCurUser] = useState(null);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/login">
          <Login users={users} setCurUser={setCurUser} />
        </Route>
        <Route exact path="/home">
          <Home curUser={curUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
