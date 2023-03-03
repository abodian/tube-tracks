import React, { useState, useEffect } from "react";
import styles from "./Homepage.module.css";
import Tracklist from "../trackList/Tracklist";

function Homepage() {
  const [victoriaCheckbox, setVictoriaCheckbox] = useState(true);
  const [jubileeCheckbox, setJubileeCheckbox] = useState(false);
  const [centralCheckbox, setCentralCheckbox] = useState(false);
  const [metropolitanCheckbox, setmetropolitanCheckbox] = useState(false);
  const [northernCheckbox, setNorthernCheckbox] = useState(false);
  const [bakerlooCheckbox, setBakerlooCheckbox] = useState(false);
  const [piccadillyCheckbox, setPiccadillyCheckbox] = useState(false);
  const [districtCheckbox, setDistrictCheckbox] = useState(false);

  const victoriaCheckboxChange = (isChecked) => {
    setVictoriaCheckbox(isChecked);
  };

  const jubileeCheckboxChange = (isChecked) => {
    setJubileeCheckbox(isChecked);
  };
 
  const centralCheckboxChange = (isChecked) => {
    setCentralCheckbox(isChecked);
  };

  const metropolitanCheckboxChange = (isChecked) => {
    setmetropolitanCheckbox(isChecked);
  };  

  const northernCheckboxChange = (isChecked) => {
    setNorthernCheckbox(isChecked);
  };

  const bakerlooCheckboxChange = (isChecked) => {
    setBakerlooCheckbox(isChecked);
  };
 
  const piccadillyCheckboxChange = (isChecked) => {
    setPiccadillyCheckbox(isChecked);
  };

  const districtCheckboxChange = (isChecked) => {
    setDistrictCheckbox(isChecked);
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
          <div className={styles.playnpause}>
            <img src="/images/playnstop.png" alt="play button"></img>
          </div>
          <div className={styles.instruct}>
            Turn up your speakers, relax and press play!
          </div>
          <div className={styles.speaker}>
            <img src="/images/speaker.png" alt="adjust volume"></img>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.tracksNfeatures}>
          <div className={styles.tracks}>
            <h1>Track List</h1>
            <div>
              <div>
                <Tracklist label="Victoria" onCheckboxChange={victoriaCheckboxChange} /> {victoriaCheckbox}
                <Tracklist label="Jubilee" onCheckboxChange={jubileeCheckboxChange} /> {jubileeCheckbox}
                <Tracklist label="Central" onCheckboxChange={centralCheckboxChange} /> {centralCheckbox}
                <Tracklist label="Metropolitan" onCheckboxChange={metropolitanCheckboxChange} /> {metropolitanCheckbox}
                <Tracklist label="Northern" onCheckboxChange={northernCheckboxChange} /> {northernCheckbox}
                <Tracklist label="Bakerloo" onCheckboxChange={bakerlooCheckboxChange} /> {bakerlooCheckbox}
                <Tracklist label="Piccadilly" onCheckboxChange={piccadillyCheckboxChange} /> {piccadillyCheckbox}
                <Tracklist label="District" onCheckboxChange={districtCheckboxChange} /> {districtCheckbox}
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
          <h1>The Map</h1>
          {victoriaCheckbox && <p>The Victoria Line</p>}
          {jubileeCheckbox && <p>The Jubilee Line</p>}
          {centralCheckbox && <p>The Central Line</p>}
          {metropolitanCheckbox && <p>The Metropolitan Line</p>}
          {northernCheckbox && <p>The Northern Line</p>}
          {bakerlooCheckbox && <p>The Bakerloo Line</p>}
          {piccadillyCheckbox && <p>The Piccadilly Line</p>}
          {districtCheckbox && <p>The District Line</p>}
        </div>
      </div>
    </>
  );
};


export default Homepage;
