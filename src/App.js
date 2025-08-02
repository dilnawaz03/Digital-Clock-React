// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer); // Clean up on unmount
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString(); // "HH:MM:SS AM/PM"
  };

  return (
    <div className="clock-container">
      <h1>🕒 Digital Clock</h1>
      <div className="clock">{formatTime(time)}</div>
    </div>
  );
}

export default App;
