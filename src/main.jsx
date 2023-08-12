import React from "react";
import ReactDom from "react-dom";

//react conponents nust be uppercase
/*const Hello = () => {
  return (
    <div>
      <h1>Hello world! Vreactie</h1>
    </div>
  );
};*/

const Hello = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "hello world")
  );
};

//react dom
ReactDom.render(<Hello />, document.getElementById("root"));
