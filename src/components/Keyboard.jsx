import DrumPad from './DrumPad';

const Keyboard = ({ data, active, power, onActivate }) => {
  const drumPads = data.map((pad) => (
    <DrumPad
      key={pad.id}
      id={pad.id}
      classes={`drum-pad ${active === pad.keyCode && 'active'}`}
      keyCode={pad.keyCode}
      sound={pad.audioUrl}
      power={power}
      onActivate={onActivate}
    />
  ));

  return <div className="drum-machine--pads">{drumPads}</div>;
};

export default Keyboard;
