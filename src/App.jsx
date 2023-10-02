import "./App.css";
import { useFetch } from "./Hooks/";
import { useState, useEffect } from "react";

const url = "https://dummyjson.com/carts";

const App = () => {
  const { loading, data } = useFetch(url);

  console.log(data);
  console.log("we're here");

  return (
    <div className="main-container">
      <div>
        <h1>{loading ? "laoding..." : "loaded"}</h1>
      </div>
    </div>
  );
};

export default App;
