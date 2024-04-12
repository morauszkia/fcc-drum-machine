import { useEffect } from 'react';

const DrumPad = (props) => {
  useEffect(() => {
    document.addEventListener('keydown', keyPressHandler);
    return () => document.removeEventListener('keydown', keyPressHandler);
  }, []);

  // TODO: useCallback playSound function
  function playSound() {
    console.log(props.power);
    if (!props.power) return;

    const sound = document.getElementById(props.id);
    sound.currentTime = 0;
    sound.play();

    // Forward upwards
    props.onActivate(props.id);
  }

  const keyPressHandler = (event) => {
    if (event.keyCode === props.keyCode && props.power) {
      playSound();
    }
  };

  const clickHandler = (event) => {
    playSound();
    event.target.blur();
  };

  return (
    <button
      className={props.classes}
      id={props.keyCode}
      key={props.id}
      onClick={clickHandler}
    >
      <p>{props.id}</p>
      <audio
        src={props.power ? props.sound : '#'}
        className="clip"
        id={props.id}
      />
    </button>
  );
};

export default DrumPad;
