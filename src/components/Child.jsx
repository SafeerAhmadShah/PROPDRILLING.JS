

// function Child({ name }) {
//   return <GrandGrand name={name} />;
// }


import React from "react";
import GrandGrand from "./GrandGrand";

function Child({ name }) {
  return <GrandGrand name={name} />;
}

export default Child;