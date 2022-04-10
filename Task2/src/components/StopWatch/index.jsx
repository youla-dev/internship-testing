import React, { useEffect, useState } from "react";
import { TimerDisplay, Controls } from "./partials";
import { styled } from "@mui/material/styles";

const StopWatch = () => {
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let intervalId;

        if (isTimerActive) {
            intervalId = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isTimerActive]);

    const startTimer = () => {
        setIsTimerActive(true);
    };

    const stopTimer = () => {
        setIsTimerActive(false);
    };

    const resumeTimer = () => {
        setIsTimerActive(true);
    };

    const resetTimer = () => {
        setTime(0);
    };

    const StopWatchWrapper = styled("div")(() => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }));

    return (
        <StopWatchWrapper>
            <TimerDisplay time={time} />
            <Controls
                time={time}
                stopTimer={stopTimer}
                startTimer={startTimer}
                resumeTimer={resumeTimer}
                resetTimer={resetTimer}
                isTimerActive={isTimerActive}
            />
        </StopWatchWrapper>
    );
};

export default StopWatch;
