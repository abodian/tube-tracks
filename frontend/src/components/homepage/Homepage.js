import React, { useState, useEffect } from "react";
import styles from "./Homepage.module.css";
import TrainLine from "../line/TrainLine";
import TrackList from "../trackList/TrackList";
import AudioControl from "../app/audioControl/AudioControl";
import Features from "../features/Features"
const Tone = require('tone')

const Homepage = ({ lineData }) => {
  const backgroundAudio = {
    orchestron: "https://res.cloudinary.com/did9lgedz/video/upload/v1678200859/tube-tracks/Backing_Track_1_von8kt.wav",
    cosmicWave: "https://res.cloudinary.com/did9lgedz/video/upload/v1678202659/tube-tracks/Backing_Track_2_l2ibki.wav",
  };
  const [backingTrack, setBackingTrack] = useState()

  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (player) {
      player.stop();
      player.dispose();
    }

    const newPlayer = new Tone.Player(backingTrack).toDestination();
    newPlayer.loop = true;
    newPlayer.autostart = true;
    newPlayer.volume.value = -20;

    setPlayer(newPlayer);

    return () => {
      newPlayer.stop();
      newPlayer.dispose();
    };
  }, [backingTrack]);

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

  const [checkedInstruments, setCheckedInstruments] = useState({
    piano: true,
    strings: true,
    marimba: true,
  })
  
  const [isRunning, setIsRunning] = useState(false);
 
  
  const handleStop = () => {
    setIsRunning(false);
    setBackingTrack(null)
  };

  const handleStart = () => {
    setIsRunning(true);
    setBackingTrack(backgroundAudio.orchestron)
  };

  const handleCheckboxChange = (line, isChecked) => {
    setCheckedLines({ ...checkedLines, [line]: isChecked });
  };

  const handleBackingChange = (value) => {
    setBackingTrack(value)
  }
  
  const handleInstrumentChange = (instrument, isChecked) => {
    setCheckedInstruments({...checkedInstruments, [instrument]: isChecked})
  }
  console.log(checkedInstruments)

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
          <AudioControl stop={handleStop} start={handleStart} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.tracksNfeatures}>
          <div className={styles.tracks}>
            <h1>Track List</h1>
            <TrackList
              handleCheckboxChange={handleCheckboxChange}
              checkedLines={checkedLines}
            />
          </div>
          <div className={styles.features}>
            <h1>Features</h1>
            <Features backgroundAudio={backgroundAudio} onBackingChange={handleBackingChange} checkedInstruments={checkedInstruments} handleInstrumentChange={handleInstrumentChange} />
          </div>
        </div>

        {isRunning ? (
          <div className={styles.theMap}>
            <TrainLine checkedLines={checkedLines} lineData={lineData} />
          </div>
        ) : (
          <div className={styles.jumbo}>
            <h1>Click the play button to open the map</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Homepage;
