import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  let interval = null;

  const startTimer = () => {
    if (isActive && time == 0) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    // } else if (!isActive && time > 0) {
    // }
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className="App">
      <h1>{time}</h1>
      <button onClick={() => setIsActive(!isActive)}>Start</button>
      <button onClick={() => setIsActive(isActive == false)}>Pause</button>
      <button
        onClick={() =>
          setIsActive(isActive == false) && setTime((prev) => prev - prev)
        }
      >
        Reset
      </button>
    </div>
  );
}

export default App;
