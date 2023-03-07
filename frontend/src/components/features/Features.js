import React, { useState } from "react";
require('./Features.css')

function Features({backgroundAudio, onBackingChange}) {
  const [selectedTrack, setSelectedTrack] = useState(backgroundAudio.orchestron);
  const handleSelect = (value) => {
    onBackingChange(value);
    setSelectedTrack(value)
  };

  return (
    <div>
      <b>Ambience</b>
      <div>
        <br></br>
        <button
          className={selectedTrack === backgroundAudio.orchestron ? 'ambience-switch active' : 'ambience-switch'}
          id="orchestron"
          onClick={() => {
            if (selectedTrack === backgroundAudio.orchestron) {
              handleSelect(null);
            } else {
              handleSelect(backgroundAudio.orchestron);
            }
          }}
        >
          Orchestron
        </button>
      </div>
      <div>
        <button
          className={selectedTrack === backgroundAudio.cosmicWave ? 'ambience-switch active' : 'ambience-switch'}
          id="cosmic-waves"
          onClick={() => {
            if (selectedTrack === backgroundAudio.cosmicWave) {
              handleSelect(null);
            } else {
              handleSelect(backgroundAudio.cosmicWave);
            }
          }}
        >
          Cosmic Wave
        </button>
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
