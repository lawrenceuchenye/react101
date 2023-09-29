import "./App.css";
import "./Form.css";

import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("coder");
  const [password, setPassword] = useState("password");

  const onSubmit = (e) => {
    e.preventDefault();
    alert("hello");
  };

  return (
    <div className="main-form-container">
      <form className="form-container" onSubmit={(e) => onSubmit(e)}>
        <div className="input-container">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChnage={(e) => setPassword(e.target.value)}
          />
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
