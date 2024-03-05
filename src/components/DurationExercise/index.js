import StopWatch from "../StopWatch.js";

export default function DurationExercise({ exercise, setMenuScreen }) {
  let { name } = exercise;
  return (
    <div>
      <h1>{name}</h1>
      <StopWatch />
      <button style={{ fontSize: "1em" }} onClick={setMenuScreen}>
        Return to Main
      </button>
    </div>
  );
}
