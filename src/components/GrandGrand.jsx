import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function GrandGrand() {
  const { user } = useContext(UserContext);

  return <h1>{user}</h1>;
}

export default GrandGrand;