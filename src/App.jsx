import React from "react";
import UserProvider from "./context/UserContext";
import Parent from "./components/Parent";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <Parent />
    </UserProvider>
  );
}

export default App;
