import React from "react";
import styles from "./Homepage.module.css";
import TrainLine from "../line/TrainLine"

const Homepage = ({ lineData }) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <a href="/">
            <img src="/images/logo.webp" alt="logo"></img>
          </a>
        </div>
        <div className={styles.strapline}>
          Tube Tracks <span>Guaranteed to wake you up!</span>
        </div>

        <div className={styles.instructions}>
          <AudioControl />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.tracksNfeatures}>
          <div className={styles.tracks}>
            <h1>Track List</h1>
            <div>
              <div className={styles.tubeicons}>
                <input id="Victoria" type="checkbox"></input>
                <label>Victoria</label>
                <span>
                  <img src="/images/vic.png" alt="line icon"></img>
                </span>
              </div>
              <div>
                <input type="checkbox" name="piccadilly"></input>
                <label>Piccadilly</label>
              </div>
              <div>
                <input id="Victoria" type="checkbox"></input>
                <label>Hammersmith</label>
              </div>
              <div>
                <input type="checkbox" name="piccadilly"></input>
                <label>Circle</label>
              </div>
            </div>
          </div>
          <div className={styles.features}>
            <h1>Features</h1>
            <div>
              <input id="Victoria" type="checkbox"></input>
              <label>Happy</label>
            </div>
            <div>
              <input type="checkbox" name="piccadilly"></input>
              <label>Sad</label>
            </div>
            <div>
              <input id="Victoria" type="checkbox"></input>
              <label>Single Notes</label>
            </div>
            <div>
              <input type="checkbox" name="piccadilly"></input>
              <label>Chords</label>
            </div>
          </div>
        </div>
        <div className={styles.theMap}>
          <TrainLine lineData={lineData} />
        </div>
      </div>
    </>
  );
};

export default Homepage;
