import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';

function App() {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000)
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);

  }, [timerOn])

  return (
    <div className="App" style={{backgroundColor: "d3d3d3", height: "100vh", display: "flex", justifyContent: "center", flexDirection: "column"}}>
      <Typography variant="h2" component="div" gutterBottom>
        {time}<br />{time === 1 ? 'second' : 'seconds'}
      </Typography>
      <div>
        <ButtonGroup variant="outlined" aria-label="outlined button group" size="large">
          {!timerOn && time === 0 && (
            <Button onClick={() => setTimerOn(true)}>Start</Button>
          )}
          {timerOn && (
            <Button onClick={() => setTimerOn(false)}>Stop</Button>
          )}
          {!timerOn && time != 0 && (
            <Button onClick={() => setTimerOn(true)}>Resume</Button>
          )}
          {!timerOn && time > 0 && (
            <Button onClick={() => setTime(0)}>Reset</Button>
          )}
        </ButtonGroup>
      </div>
    </div>
  );
}

export default App;
