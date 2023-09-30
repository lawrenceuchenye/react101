import "./App.css";
//import "./Form.css";

import { useState, useReducer } from "react";

const defaultState = {
  NAME: "CODER",
  PLATFORM: "TWIITER",
};
const reducer = (state, action) => { };

const App = () => {
  const [state, Dispatch] = useReducer(reducer, defaultState);
  return (
    <div className="main-container">
      <h1>useReducers</h1>
    </div>
  );
};

export default App;
