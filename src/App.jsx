import "./App.css";
//import "./Form.css";

import { useContext, useState, useReducer }, React from "react";

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
    <ValueContext.Provider value="Ello">    <div className="main-container">
      <Buttons />
    </div>
    </ValueContext.Provider>

  );
};

export default App;
