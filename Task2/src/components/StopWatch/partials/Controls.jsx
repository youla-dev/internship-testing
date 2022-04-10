import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Controls = (props) => {
    const {
        startTimer,
        stopTimer,
        resumeTimer,
        resetTimer,
        isTimerActive,
        time,
    } = props;

    return (
        <Stack spacing={2} direction="row">
            {!isTimerActive && time === 0 && (
                <Button
                    onClick={startTimer}
                    variant="contained"
                    color="success"
                >
                    start
                </Button>
            )}

            {isTimerActive && (
                <Button onClick={stopTimer} variant="contained" color="error">
                    stop
                </Button>
            )}

            {!isTimerActive && time > 0 && (
                <Button onClick={resumeTimer} variant="outlined">
                    resume
                </Button>
            )}

            {!isTimerActive && time > 0 && (
                <Button onClick={resetTimer} variant="contained" color="error">
                    reset
                </Button>
            )}
        </Stack>
    );
};

export default Controls;
