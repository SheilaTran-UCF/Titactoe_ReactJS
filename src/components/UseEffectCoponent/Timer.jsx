import React, { useState } from "react";
import { useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  // lan render dau tien clean up func khong duoc goi
  // tu lan re-render thu 2 thi clean up duoc goi truoc phan than cua useEffect
  useEffect(() => {
    const timeout = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    // clean up funtion
    return () => {
      console.log("clean up");
      clearInterval(timeout);
    };
  }, []);
  return (
    <div className="timer" style={{ marginTop: "2rem" }}>
      <h2>Timer counter : {count}</h2>
    </div>
  );
};

export default Timer;
