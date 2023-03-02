import React from "react";
import styles from "./Homepage.module.css";
const Homepage = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <a>
            <img src="/images/logo.webp"></img>
          </a>
        </div>
        <div className={styles.strapline}>
          Tube Tracks <span>Guaranteed to wake you up!</span>
        </div>

        <div className={styles.instructions}>
          <div className={styles.playnpause}>
            <img src="/images/playnstop.png"></img>
          </div>
          <div className={styles.instruct}>
            Turn up your speakers, relax and press play!
          </div>
          <div className={styles.speaker}>
            <img src="/images/speaker.png"></img>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.tracksNfeatures}>
          <div className={styles.tracks}>
            <h1>Track List</h1>
            <div>
              <div className={styles.tubeicons}>
                <input id="Victoria" type="checkbox"></input>
                <label for="Victoria">Victoria</label>
                <span>
                  <img src="/images/vic.png"></img>
                </span>
              </div>
              <div>
                <input type="checkbox" name="piccadilly"></input>
                <label for="piccadilly">Piccadilly</label>
              </div>
              <div>
                <input id="Victoria" type="checkbox"></input>
                <label for="Victoria">Hammersmith</label>
              </div>
              <div>
                <input type="checkbox" name="piccadilly"></input>
                <label for="piccadilly">Circle</label>
              </div>
            </div>
          </div>
          <div className={styles.features}>
            <h1>Features</h1>
            <div>
              <input id="Victoria" type="checkbox"></input>
              <label for="Victoria">Happy</label>
            </div>
            <div>
              <input type="checkbox" name="piccadilly"></input>
              <label for="piccadilly">Sad</label>
            </div>
            <div>
              <input id="Victoria" type="checkbox"></input>
              <label for="Victoria">Single Notes</label>
            </div>
            <div>
              <input type="checkbox" name="piccadilly"></input>
              <label for="piccadilly">Chords</label>
            </div>
          </div>
        </div>
        <div className={styles.theMap}>
          <h1>The Map</h1>
        </div>
      </div>
    </>
  );
};

export default Homepage;
