import "./App.css";

import { Container, IconButton, Paper, Typography } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import { useState, useEffect } from "react";
import { css } from "@emotion/css";
function App() {
  const [count, setCount] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [timer, setTimer] = useState();
  const pauseHandler = () => {
    setIsPause(!isPause);
  };
  const playHandler = () => {
    setIsPlay(true);
  };
  const stopHandler = () => {
    setIsPlay(false);
    setIsPause(false);
    setCount(0);
  };
  useEffect(() => {
    if (isPlay && !isPause) {
      setTimer(
        setInterval(() => {
          setCount((prevCount) => prevCount + 1);
        }, 1000)
      );
    } else {
      clearInterval(timer);
    }
  }, [isPlay, isPause]);
  return (
    <div className="App">
      <div
        className={css`
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
       
        }`}
      >
        <Paper
          elevation={3}
          className={css`
            margin:  0 100px;
            height: 200px;
            padding: 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }`}
        >
          <Typography variant="h2" gutterBottom component="div">
            {new Date(count * 1000).toISOString().slice(11, 19)}
          </Typography>
          <div className="buttons">
            {isPlay ? (
              <>
                <IconButton aria-label="pause" onClick={pauseHandler}>
                  {isPause ? <PlayArrowIcon /> : <PauseIcon />}
                </IconButton>
                <IconButton aria-label="stop" onClick={stopHandler}>
                  <StopIcon />
                </IconButton>
              </>
            ) : (
              <IconButton aria-label="play" onClick={playHandler}>
                <PlayArrowIcon />
              </IconButton>
            )}
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default App;
