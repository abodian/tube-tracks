import React, { useState } from "react";

import styles from "./AudioControl.module.css";

const Tone = require("tone");

const PlayStop = () => {
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.playnpause}>
        <img
          src="/images/play.png"
          alt="play button"
          onClick={Tone.start}
        ></img>
      </div>
      <div className={styles.playnpause}>
        <img
          src="/images/stop.png"
          alt="pause button"
          onClick={Tone.Transport.pause}
        ></img>
      </div>
      <div className={styles.instruct}>
        Turn up your speakers, relax and press play!
      </div>
      <div class={styles.volume}>
        <div className={styles.speaker}>
          <img src="/images/speaker.png" alt="adjust volume"></img>
        </div>
        <div className={styles.slider}>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayStop;
