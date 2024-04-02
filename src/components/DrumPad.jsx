const DrumPad = (props) => {
  return (
    <button
      className={props.classes}
      id={props.keyCode}
      key={props.id}
      data-description={props.description}
      onClick={props.onClick}
    >
      <p>{props.id}</p>
      <audio
        src={props.power ? props.sound : '#'}
        className="clip"
        id={props.id}
      />{' '}
    </button>
  );
};

export default DrumPad;
