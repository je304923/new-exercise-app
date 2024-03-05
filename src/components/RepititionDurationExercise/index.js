import { useState } from "react";
import StopWatch from "../StopWatch.js";

export default function RepetitionDurationExercise({
  exercise,
  setMenuScreen,
}) {
  let { name } = exercise;
  let [count, setCount] = useState(0);
  return (
    <div>
      <h1>{name}</h1>
      <p style={{ fontSize: "5em" }}>{count}</p>
      <button
        style={{ fontSize: "2em" }}
        onClick={() => setCount((count) => count + 1)}
      >
        Increase Reps
      </button>
      <button style={{ fontSize: "2em" }} onClick={() => setCount(0)}>
        Reset
      </button>
      <br />
      <hr></hr>
      <StopWatch />
      <button style={{ fontSize: "1.5em" }} onClick={setMenuScreen}>
        Return to Main
      </button>
    </div>
  );
}
