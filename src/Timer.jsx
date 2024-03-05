import React, { useState, useEffect, useCallback } from 'react';

export default function Timer() {
    let [timer, setTimer] = useState(0);
    let [curTime, setCurTime] = useState(Date.now());
    let [time, setTime] = useState(0)
    let [running, setRunning] = useState(false);
    
    let formatTime = (milliseconds) => {
        let mins = Math.floor(milliseconds / (1000 * 60));
        let secs = Math.floor((milliseconds % (1000 * 60)) / 1000);
        let ms = milliseconds % 1000;
        return `${mins < 10 ? '0' + mins : mins}:${mins < 10 ? '0' + secs : secs}.${ms < 100 ? (ms < 10 ? '00' + ms : '0' + ms) : ms}`;
    };

    useEffect(() => {
        if(running) {
        let newTimer = setInterval(() => {
            setCurTime(prev => prev + 1)}, 1);
        setTimer(newTimer);
        return () => clearInterval(newTimer); 
    }
    }, [running]);

 // Had to make many adjustments to the code from timer video in order to get the reset button to work properly.
let startTimer = useCallback(() => {
    setRunning(true)
;
setCurTime(Date.now())
let newInterval = setInterval(() => setCurTime (prev => prev + 1), 1000 / 30 );
setTimer(newInterval);
}, []);

let stopTimer = useCallback(() => {
    setTime(Date.now() - curTime)
    clearInterval(timer);
    setRunning(false);
}, [timer, curTime]);

let resetTimer = useCallback(() => {
    setTime(0);
    clearInterval(timer);
    setRunning(false);
}, [timer]);

    return (
        <div>
        <p style={{ fontSize: "5em" }}>
        {running ? formatTime(Date.now() - curTime) : formatTime(time)}
            </p>
            <div> 
            <button style={{ fontSize: "2em" }} onClick={running ? stopTimer : startTimer }> 
            {running ? "Stop" : "Start"}
            </button>
            <button style={{fontSize: "2em"}} onClick={resetTimer}>Reset</button>
            </div>
            </div>
    );
}