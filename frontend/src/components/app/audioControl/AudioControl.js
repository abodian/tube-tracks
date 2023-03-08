import React, { useState } from "react";

import styles from "./AudioControl.module.css";

const Tone = require("tone");

const PlayStop = ({ stop, start, onVolumeChange, volume }) => {
  const handleVolumeChange = (event) => {
    onVolumeChange(event.target.value);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.playnpause}>
          <img src="/images/play.png" alt="play button" onClick={start}></img>
        </div>
        <div className={styles.playnpause}>
          <img src="/images/stop.png" alt="pause button" onClick={stop}></img>
        </div>
        <div className={styles.instruct}>
          Press play, then choose an ambience on the left!
        </div>
        <div class={styles.volume}>
          <div className={styles.speaker}>
            <img src="/images/speaker.png" alt="adjust volume"></img>
          </div>
          <div>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
            />
            <div>{volume}%</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayStop;
