import React from "react";

import styles from "../audioControl/AudioControl.module.css";

const ZoomControl = ({ onZoomChange, zoom }) => {
  return (
    <div class={styles.zoom}>
      <div className={styles.speaker}>
        <img src="/images/zoom.png" alt="adjust volume"></img>
      </div>
      <div>
        <input
          type="range"
          min="0"
          max="100"
          value={zoom}
          onChange={onZoomChange}
        />
        <div className={styles.volumeText}>{zoom}%</div>
      </div>
    </div>
  );
};

export default ZoomControl;
