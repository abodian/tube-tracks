import React from "react";

import styles from "./AudioControl.module.css";

const PlayStop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.playnpause}>
        <img src="/images/play.png" alt="play button"></img>
      </div>
      <div className={styles.playnpause}>
        <img src="/images/stop.png" alt="pause button"></img>
      </div>
      <div className={styles.instruct}>
        Turn up your speakers, relax and press play!
      </div>
      <div className={styles.speaker}>
        <img src="/images/speaker.png" alt="adjust volume"></img>
      </div>
    </div>
  );
};

export default PlayStop;
