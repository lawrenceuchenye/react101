import "./App.css";
//import "./Form.css";

import { useContext, useState, useReducer } from "react";
import React from "react";

const ValueContext = React.createContext();

const Display = ({ val }) => {
  return (
    <div className="display">
      <h1>Messages</h1>
      <h2>
        Hello !!! <span>{val}</span>
      </h2>
    </div>
  );
};

const Buttons = () => {
  const [val, setValue] = useState(0);
  const data = useContext(ValueContext);
  console.log(data);

  return (
    <div>
      <div>
        <Display val={val} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="btn" onClick={() => setValue(val + 1)}>
          +
        </button>
        <button className="btn" onClick={() => setValue(val - 1)}>
          -
        </button>
      </div>
    </div>
  );
};
const App = () => {
  return (
    <ValueContext.Provider value="Ello">
      <div className="main-container">
        <Buttons />
        <div></div>
      </div>
    </ValueContext.Provider>
  );
};

export default App;
