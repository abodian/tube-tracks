import React, { useState } from "react";

import styles from "./PianoControl.module.css";

const PianoControl = ({ initialVisible, toggle }) => {
  const [visible, setVisible] = useState(initialVisible);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.playnpause}>
          <img
            src="/images/play.png"
            width="44px"
            alt="play button"
            onClick={toggle}
          ></img>
        </div>
      </div>
    </>
  );
};

export default PianoControl;
