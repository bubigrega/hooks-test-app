import React from "react";
import Count from "./Count";
import CustomHook from "./CustomHook";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hooks test components</h1>
      <h3>useState()</h3>
      <Count />
      <h3>Custom hook with useState()</h3>
      <CustomHook />
    </div>
  );
}

export default App;
