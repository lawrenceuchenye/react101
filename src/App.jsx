import "./App.css";
//import "./Form.css";

import { useState, useReducer } from "react";

const defaultState = {
  NAME: "CODER",
  PLATFORM: "TWITTER",
};
const reducer = (state, action) => {
  if (action.TYPE == "CHANGE") {
    //when an actiom is excuted it returns a mutated state.
    return { ...state, NAME: "LAW", PLATFORM: "X(EVERYTHING APP)" };
  }

  if (action.TYPE == "NEW NAME") {
    return { ...state, NAME: action.PAYLOAD };
  }

  //error exist.
  throw Error("TYPE EXCUTED DOE NOT EXIST");
};

const App = () => {
  const [state, Dispatch] = useReducer(reducer, defaultState);
  return (
    <div className="main-container">
      <h1>useReducers</h1>
      <div style={{ marginTop: "20px" }}>
        <h1>NAME:{state.NAME}</h1>
        <h1>PLATFORM:{state.PLATFORM}</h1>
        <button
          className="btn"
          onClick={() => Dispatch({ TYPE: "NENAME", PAYLOAD: "ELON MUSK" })}
        >
          CHANGE
        </button>
      </div>
    </div>
  );
};

export default App;
