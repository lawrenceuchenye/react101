import "./App.css";
import { useState } from "react";

const App = () => {
  let [text, setText] = useState("text");
  console.log(useState("bread"));

  const changeText = () => {
    setText("Hello twitter");
  };

  return (
    <div>
      <h1>{text}</h1>
      <button className="btn" onClick={() => changeText()}>
        Click me!
      </button>
    </div>
  );
};

export default App;
