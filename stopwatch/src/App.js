import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);

  let id = useRef();

  useEffect(() => {
    // Kod sporednog efekta ovde
    id.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id.current);

    // Kod za čišćenje ovde (opciono)
  }, []);

  const incrementTime = () => {};

  return (
    <div className="App">
      <h1>{time}</h1>
      <button onClick={incrementTime}>Start</button>
      <button onClick={clearInterval()}>Pause</button>
      <button>Reset</button>
    </div>
  );
}

export default App;
