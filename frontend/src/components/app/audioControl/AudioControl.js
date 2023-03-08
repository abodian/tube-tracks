import React, { useState } from "react";

import styles from "./AudioControl.module.css";

const PlayStop = ({ stop, start, onZoomChange, zoom }) => {
  const handleZoomChange = (event) => {
    onZoomChange(event.target.value);
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
          Turn up your speakers, relax and press play!
        </div>

        <div class={styles.volume}>
          <div className={styles.speaker}>
            <img src="/images/zoom.png" alt="adjust volume"></img>
          </div>
          <div>
            <input
              type="range"
              min="-1"
              max="2"
              value={zoom}
              onChange={handleZoomChange}
            />
            <div className={styles.volumeText}>{zoom}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayStop;
