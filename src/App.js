import "./App.css";
import { useCallback, useState } from "react";
import DurationExercise from "./components/DurationExercise/index.js";
import RepetitionExercise from "./components/RepetitionExercise/index.js";
import RepetitionDurationExercise from "./components/RepititionDurationExercise/index.js";

const MENU_SCREEN = "menu";
const EXERCISE_SCREEN = "exercise";
const DURATION_EXERCISE = "duration";
const REPITITION_EXERCISE = "repetition";
const REPITITION_DURATION_EXERCISE = "repetitionDuration";

let exerciseList = [
  { type: DURATION_EXERCISE, name: "Running" },
  { type: REPITITION_EXERCISE, name: "Push Ups" },
  { type: DURATION_EXERCISE, name: "Plank" },
  { type: DURATION_EXERCISE, name: "Rowing" },
  { type: DURATION_EXERCISE, name: "Swimming" },
  { type: REPITITION_DURATION_EXERCISE, name: "Weight Training - Squats" },
  { type: REPITITION_DURATION_EXERCISE, name: "Weight Training - Deadlifts" },
  { type: REPITITION_DURATION_EXERCISE, name: "Weight Training - Bench Press" },
  {
    type: REPITITION_DURATION_EXERCISE,
    name: "Weight Training - Biceps Arm Curl",
  },
  { type: DURATION_EXERCISE, name: "Cool Down" },
];

function App() {
  let [currentScreen, setCurrentScreen] = useState(MENU_SCREEN);
  let [currentExercise, setCurrentExercise] = useState(exerciseList[3]);
  let screenComponent = undefined;
  let buttonClick = useCallback((exercise) => {
    setCurrentExercise(exercise);
    setCurrentScreen(EXERCISE_SCREEN);
  });

  if (currentScreen === MENU_SCREEN) {
    screenComponent = (
      <div>
        <h1 style={{ fontSize: "2.5em" }}>Take a break.</h1>
        <p style={{ fontSize: "1.3em" }}>
          Choose an exercise to begin your workout.
        </p>
        <ul>
          {exerciseList.map((exercise) => {
            return (
              <li
                style={{ display: "flex", justifyContent: "center" }}
                key={exercise.name}
              >
                <button
                  style={{ fontSize: "1em", margin: "5px" }}
                  onClick={() => buttonClick(exercise)}
                >
                  {exercise.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else if (currentScreen === EXERCISE_SCREEN) {
    switch (currentExercise.type) {
      case DURATION_EXERCISE:
        screenComponent = (
          <DurationExercise
            exercise={currentExercise}
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          />
        );
        break;
      case REPITITION_EXERCISE:
        screenComponent = (
          <RepetitionExercise
            exercise={currentExercise}
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          />
        );
        break;
      case REPITITION_DURATION_EXERCISE:
        screenComponent = (
          <RepetitionDurationExercise
            exercise={currentExercise}
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          />
        );
        break;

      default:
        screenComponent = undefined;
    }
  }

  return (
    <div className="App">
      <header className="App-header">{screenComponent}</header>
    </div>
  );
}

export default App;
