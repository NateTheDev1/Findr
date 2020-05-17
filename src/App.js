import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import { accounts } from "./data";

function App() {
  const [users, setUsers] = useState(accounts);
  const [curUser, setCurUser] = useState();

  return (
    <div className="App">
      <Header />
      <Login users={users} setCurUser={setCurUser} />
    </div>
  );
}

export default App;
