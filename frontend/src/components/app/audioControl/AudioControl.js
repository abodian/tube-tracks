import React, { useState } from "react";

import styles from "./AudioControl.module.css";

const Tone = require("tone");

const PlayStop = ({ stop, start }) => {
  const [volume, setVolume] = useState(50);


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
          Press play, and have fun!
        </div>
        <div class={styles.volume}>
          {/* <div className={styles.speaker}>
            <img src="/images/speaker.png" alt="adjust volume"></img>
          </div> */}
          <div className={styles.jumbo}>
            {/* <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
            />
            <span>{volume}%</span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayStop;
