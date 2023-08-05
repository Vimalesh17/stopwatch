import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let interval: any;
    if (isRunning) {
      interval = setInterval(() => setTime(time + 1), 10);
      return () => clearInterval(interval);
    }
  }, [isRunning, time]);
  // hrs:
  const hours = Math.floor(time / 360000);
  // mints:
  const minutes = Math.floor((time % 360000) / 6000);
  // seconds:
  const seconds = Math.floor((time % 6000) / 100);
  // milliseconds:
  const milliseconds = Math.floor(time % 100);
  const stopAndStart = () => {
    setIsRunning(!isRunning);
  };
  const reset = () => {
    setTime(0);
  };

  return (
    <div>
      <h1>Stop Watch</h1>
      <p>
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      <div>
        <button onClick={() => stopAndStart()}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={() => reset()}>Reset</button>
      </div>
    </div>
  );
};

export default StopWatch;
