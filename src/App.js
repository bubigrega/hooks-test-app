import React from "react";
import Count from "./Count";
import CustomHook from "./CustomHook";
import CustomInputHook from "./CustomInputHook";
import ApiUseEffect from "./ApiUseEffect";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hooks test components</h1>
      <h3>useState()</h3>
      <Count />
      <h3>Custom hook with useState()</h3>
      <CustomHook />
      <h3>Custom input hook</h3>
      <CustomInputHook />
      <h3>useEffect() api fetch</h3>
      <ApiUseEffect />
    </div>
  );
}

export default App;
