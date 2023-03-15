import "./TrainLine.css";
import React, { useEffect } from "react";
import Keyboard from "../app/keyboard/Keyboard";
import stations from "./stations";
import notes from "./notes";

const Tone = require("tone");

function TrainLine({
  lineData,
  checkedLines,
  checkedInstruments,
  isPiano,
  zoom,
}) {
  const playBassNote = (note) => {
    const bassPlayer = new Tone.Player(notes.bass[note]).toDestination();
    bassPlayer.autostart = true;
    bassPlayer.loop = false;
    bassPlayer.volume.value = -20;
  };

  const handlePlayKey = (key) => {
    switch (key) {
      case "1":
        playBassNote("DSBass");
        break;
      case "2":
        playBassNote("FSBass");
        break;
      case "3":
        playBassNote("GSBass");
        break;
      case "4":
        playBassNote("ASBass");
        break;
      case "5":
        playBassNote("BBass");
        break;
      case "6":
        playBassNote("CSBass");
        break;
      default:
        break;
    }
  };

  document.addEventListener("keypress", (event) => {
    handlePlayKey(event.key);
  });

  // this is handling picking random notes and also checking to see if instruments have been
  // switched on or not
  function pickRandomKey(obj, checkedInstruments) {
    const categories = Object.keys(obj);
    const availableCategories = categories.filter(
      (category) => checkedInstruments[category]
    );
    const randomCategory =
      availableCategories[
        Math.floor(Math.random() * availableCategories.length)
      ];
    const notesInCategory = obj[randomCategory];
    const notes = Object.keys(notesInCategory);
    const randomNote = notes[Math.floor(Math.random() * notes.length)];
    return notesInCategory[randomNote];
  }

  useEffect(() => {
    const checkExpectedArrival = () => {
      if (lineData) {
        const now = new Date();
        const matchingTrains = [];
        lineData.forEach((train) => {
          const [hours, minutes, seconds] = train.expectedArrival.split(":");
          const expectedArrival = new Date();
          expectedArrival.setHours(hours);
          expectedArrival.setMinutes(minutes);
          expectedArrival.setSeconds(seconds);
          if (expectedArrival.getTime() === now.getTime()) {
            if (checkedLines[train.lineName.toLowerCase()]) {
              matchingTrains.push(train);
            } else {
              return null;
            }
            const stationName = train.stationName;
            const stationEl = document.querySelectorAll(
              `[id^="${stationName}"]`
            );
            stationEl.forEach((el) => {
              el.classList.add("pulse");
              setTimeout(() => {
                el.classList.remove("pulse");
              }, 3000);
            });
          }
        });

        matchingTrains.forEach((train, index) => {
          const randomKey = pickRandomKey(notes, checkedInstruments);
          const delay = Math.random() * 1000;
          setTimeout(() => {
            const arrivalPlayer = new Tone.Player(randomKey).toDestination();
            arrivalPlayer.autostart = true;
            arrivalPlayer.volume.value = -8;
          }, index * 500 + delay); // delay each sound by 1 second
        });
      }
    };

    const intervalId = setInterval(() => {
      checkExpectedArrival();
    }, 500);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="train-line" style={{ zoom: zoom }}>
      {Object.keys(stations).map(
        (line) =>
          checkedLines[line] && (
            <div key={line} className={`line ${line}`}>
              <svg viewBox="-1230 0 24400 150">
                <line
                  x1="9000"
                  y1="50"
                  x2="23000"
                  y2="50"
                  className="line-color"
                />
                {stations[line].map((station, index) => (
                  <g key={station}>
                    <circle
                      id={station}
                      className={"station"}
                      cx={
                        ((index + 0.2) / stations[line].length) * 13000 + 9800
                      }
                      cy="50"
                      r="20"
                    />
                    <text
                      className="station-name"
                      x={((index + 0.1) / stations[line].length) * 13000 + 9800}
                      y="90"
                      textAnchor="middle"
                    >
                      {station && (
                        <>
                          {station
                            .split(" ")
                            .filter(
                              (word) =>
                                word !== "Underground" && word !== "Station"
                            )
                            .map((word, i) => (
                              <tspan
                                key={i}
                                x={
                                  ((index + 0.2) / stations[line].length) *
                                    13000 +
                                  9800
                                }
                                dy={`${i === 0 ? 0.5 : 1}em`}
                              >
                                {word}
                              </tspan>
                            ))}
                        </>
                      )}
                    </text>
                  </g>
                ))}
              </svg>

              <div className="line-container">
                <h2 className="line-name">{line}</h2>
                <h2 className="line-name">{line}</h2>
                <h2 className="line-name">{line}</h2>
              </div>
            </div>
          )
      )}
      <Keyboard isPiano={isPiano} playNote={handlePlayKey}></Keyboard>
    </div>
  );
}

export default TrainLine;
