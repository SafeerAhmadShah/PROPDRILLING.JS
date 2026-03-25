
import React from "react";
import Parent from "./components/Parent";

function App() {
  const name = "Safeer Ahmad Shah";

  return (
    <div>
      <Parent name={name} /> 
    </div>
  );
}

export default App;