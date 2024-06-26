import { useState, useEffect } from 'react';

import './App.css';
import Keyboard from './components/Keyboard';
import Display from './components/Display';
import OnSwitch from './components/OnSwitch';

const padsData = [
  {
    id: 'Q',
    description: 'Heater 1',
    keyCode: 81,
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    id: 'W',
    description: 'Heater 2',
    keyCode: 87,
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    id: 'E',
    description: 'Heater 3',
    keyCode: 69,
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    id: 'A',
    description: 'Heater 4',
    keyCode: 65,
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    id: 'S',
    description: 'Clap',
    keyCode: 83,
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    id: 'D',
    description: 'Open HH',
    keyCode: 68,
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    id: 'Z',
    description: "Kick-n'-Hat",
    keyCode: 90,
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    id: 'X',
    description: 'Kick',
    keyCode: 88,
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    id: 'C',
    description: 'Closed HH',
    keyCode: 67,
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];

const App = () => {
  const [playing, setPlaying] = useState(true);
  const [displayTxt, setDisplayTxt] = useState('');
  // TODO: Add function to clear display

  useEffect(() => setDisplayTxt(playing ? 'Press a Key!' : ''), [playing]);

  const onActivate = (id) => {
    const { description } = padsData.find((pad) => pad.id === id);
    if (playing) setDisplayTxt(description);
  };

  const switchHandler = () => {
    console.log(playing);
    setPlaying(() => !playing);
  };

  return (
    <div id="drum-machine">
      <Keyboard data={padsData} onActivate={onActivate} power={playing} />
      <div className="controls">
        <OnSwitch playing={playing} onActivate={switchHandler} />
        <Display text={displayTxt} />
      </div>
    </div>
  );
};

export default App;
