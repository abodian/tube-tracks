import React, {useState} from "react";
import styles from "./Homepage.module.css";
import TrainLine from "../line/TrainLine"
import TrackList from "../trackList/TrackList"
import AudioControl from "../app/audioControl/AudioControl"

const Homepage = ({ lineData }) => {
  const [checkedLines, setCheckedLines] = useState({
    victoria: true,
    jubilee: true,
    central: true,
    metropolitan: true,
    northern: true,
    bakerloo: true,
    piccadilly: true,
    district: true,
  });

  const handleCheckboxChange = (event) => {
    const line = event.target.name;
    const isChecked = event.target.checked;
    setCheckedLines({ ...checkedLines, [line]: isChecked });
  };


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
            <TrackList handleCheckboxChange={handleCheckboxChange} checkedLines={checkedLines} />
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
          <TrainLine checkedLines={checkedLines} lineData={lineData} />
        </div>
      </div>
    </>
  );
};

export default Homepage;
