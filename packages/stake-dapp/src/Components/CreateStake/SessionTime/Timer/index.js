import React, { useState, useEffect, useRef } from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";

const Timer = ({ startTime, endTime, interval, handleTimerCompletion }) => {
  const classes = useStyles();

  // Make sure that the endTime > startTime
  const [displayTime, setDisplayTime] = useState(
    parseInt(endTime) - parseInt(startTime) > 0 ? parseInt(endTime) - parseInt(startTime) : 0
  );
  const [delay, setDelay] = useState(interval);

  useInterval(() => {
    // Time decrement
    setDisplayTime(displayTime > 0 ? displayTime - 1 : 0);
    if (displayTime === 0) {
      handleTimerCompletion();
      setDelay(null);
    }
  }, delay);

  const convertSectoDays = n => {
    const day = Math.floor(n / (24 * 3600));

    n = n % (24 * 3600);
    const hour = Math.floor(n / 3600);

    n %= 3600;
    const minutes = Math.floor(n / 60);

    n %= 60;
    const seconds = n;

    return (
      <div className={classes.time}>
        <div>
          <Typography className={classes.number}>{day}</Typography>
          <Typography className={classes.title}>d</Typography>
        </div>
        <div>
          <Typography className={classes.number}>{hour}</Typography>
          <Typography className={classes.title}>h</Typography>
        </div>
        <div>
          <Typography className={classes.number}>{minutes}</Typography>
          <Typography className={classes.title}>m</Typography>
        </div>
        <div>
          <Typography className={classes.number}>{seconds}</Typography>
          <Typography className={classes.title}>s</Typography>
        </div>
      </div>
    );
  };

  return <div>{convertSectoDays(displayTime)}</div>;
};

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Timer;
