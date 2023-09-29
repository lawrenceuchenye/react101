import "./App.css";
import "./Form.css";

import { useState, useRef } from "react";

const Form = () => {
  const ref = useRef(null);
  const container = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(ref);
    console.log(container);
  };

  return (
    <div className="main-form-container">
      <form className="form-container" onSubmit={(e) => onSubmit(e)}>
        <div className="input-container">
          <label>Name:</label>
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input type="password" placeholder="Password" />
        </div>
        <div ref={container}>
          <label>Developer</label>
          <input ref={ref} type="checkbox" />
        </div>
        <button type="submit" className="btn-container">
          Login
        </button>
      </form>
    </div>
  );
};

const App = () => {
  return (
    <div className="main-container">
      <Form />
    </div>
  );
};

export default App;
