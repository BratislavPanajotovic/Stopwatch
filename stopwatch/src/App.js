import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState("Start");

  const startTimer = () => {
    if (isActive) {
      const intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      return intervalId; // Return the interval ID
    }
    return null;
  };

  const pauseTimer = () => {
    setIsActive(false);
    setButtonText("Continue");
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(0);
    setButtonText("Start");
  };

  const handleStartContinueClick = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setButtonText("Start");
    } else {
      setButtonText("Continue");
      if (time > 0) {
        const intervalId = startTimer();
        return () => clearInterval(intervalId);
      }
    }
  };

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = startTimer();
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isActive]);

  return (
    <div className="App">
      <h1>{time}</h1>
      <button
        className="start"
        onClick={handleStartContinueClick}
        disabled={isActive}
      >
        {buttonText}
      </button>
      <button className="pause" onClick={pauseTimer} disabled={!isActive}>
        Pause
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default App;
