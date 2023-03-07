function Features({backgroundAudio, onBackingChange}) {
  const handleSelect = (value) => {
    onBackingChange(value);
  };

  return (
    <div>
      <b>Ambience</b>
      <div>
        <br></br>
        <button className="ambience-switch" id="orchestron" onClick={() => handleSelect(backgroundAudio.orchestron)}>Orchestron</button>
      </div>
      <div>
        <button className="ambience-switch" id="cosmic-waves" onClick={() => handleSelect(backgroundAudio.cosmicWave)}>Cosmic Wave</button>
      </div>
      <b>Instruments</b>

      <div>
        <br></br>
        <input id="piano" type="checkbox" className="feature-switch" checked></input>
        <label for="piano">Piano</label>
      </div>
      <div>
        <input
          id="pizzicato-strings"
          type="checkbox"
          className="feature-switch"
          checked
        ></input>
        <label for="pizzicato-strings">Pizzicato Strings</label>
      </div>
      <div>
        <input
          id="marimba"
          type="checkbox"
          className="feature-switch"
          checked
        ></input>
        <label for="marimba">Marimba</label>
      </div>
    </div>
  );
}

export default Features;
