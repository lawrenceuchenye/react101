import React from "react";
import ReactDom from "react-dom";

const Hello = () => {
  return (
    <div>
      <h1>Hello world! Vreactie</h1>
    </div>
  );
};

ReactDom.render(<Hello />, document.getElementById(("root")));
