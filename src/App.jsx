import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [count, setCounter] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const addCounter = () => {
    setCounter(count + 1);
  };

  useEffect(() => {
    if (window.innerWidth <= 750) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  if (isMobile) {
    return (
      <div className="main-container">
        <h1>Mobile</h1>
      </div>
    );
  }

  return (
    <div className="main-container">
      <h1>Desktop</h1>
    </div>
  );
};

export default App;
