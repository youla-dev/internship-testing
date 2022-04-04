import { useEffect, useState } from "react";
import "./App.css";

function App() {
    let [timer, setTimer] = useState(0);
    let [isTimerWorking, setTimerWorking] = useState(false);
    let [isPause, setIsPause] = useState(false);

    let working;
    useEffect(() => {
        if (isTimerWorking) {
            working = setInterval(timerIncrease, 1000);
        } else {
            clearInterval(working);
        }
    }, [isTimerWorking]);

    const startTimer = () => {
        setTimerWorking(true);
        console.log(isTimerWorking);
    };

    const destroyTimer = () => {
        setTimer(0);
        setTimerWorking(false);
        setTimerWorking(false);
    };

    let timegg = 0;
    let timerIncrease = () => {
        timegg = timegg + 1;
        setTimer(timegg);
        // timer = timer + 1
    };

    return (
        <div className="App">
            <div>Значение таймера: {timer}</div>
            <div>
                <button onClick={() => startTimer()}>Запустить таймер</button>

                {isTimerWorking ? <button> ПАУЗА </button> : null}

                <button onClick={() => destroyTimer()}>Завершить таймер</button>
            </div>
        </div>
    );
}

export default App;
