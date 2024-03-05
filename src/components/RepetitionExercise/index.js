import { useState } from "react";

export default function RepetitionExercise({ exercise, setMenuScreen }) {
  let [count, setCount] = useState(0);
  return (
    <div>
      <h1>{exercise.name}</h1>
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
      <button style={{ fontSize: "1em" }} onClick={setMenuScreen}>
        Return to Main
      </button>
    </div>
  );
}
