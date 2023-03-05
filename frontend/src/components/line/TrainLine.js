import React, { useEffect, useState } from "react";

import "./TrainLine.css";
import { stations } from "./stations";

const Tone = require("tone");

function TrainLine({ lineData }) {
  const [lines, setLines] = useState(stations.victoria);

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
            matchingTrains.push(train);
            const stationName = train.stationName.split(" ")[0];
            const stationEl = document.querySelectorAll(
              `[id^='${stationName}']`
            );
            stationEl.forEach((el) => {
              el.style.fill = "red";
              setTimeout(() => {
                el.style.fill = "";
              }, 1000);
            });
          }
        });
        matchingTrains.forEach((train, index) => {
          const keyNotes = ["C4", "E4", "G4", "Bb4", "C5"];
          const noteLengths = ["8n", "4n", "2n"];
          const noteIndex = Math.floor(Math.random() * keyNotes.length);
          const lengthIndex = Math.floor(Math.random() * noteLengths.length);
          const synth = new Tone.AMSynth().toDestination();
          const delay = index * 0.5;
          synth.triggerAttackRelease(
            keyNotes[noteIndex],
            noteLengths[lengthIndex],
            `+${delay}`
          );
        });
      }
    };

    const intervalId = setInterval(() => {
      checkExpectedArrival();
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="train-line">
      {Object.keys(lines).map((line) => (
        <div key={line} className={`line ${line}`}>
          <svg viewBox="-1000 0 10000 120">
            <line x1="0" y1="50" x2="6000" y2="50" className="line-color" />
            {lines[line].map((station, index) => (
              <g key={station}>
                <circle
                  id={station}
                  className={"station"}
                  cx={((index + 0.5) / lines[line].length) * 6000}
                  cy="50"
                  r="20"
                />
                <text
                  className="station-name"
                  x={((index + 0.5) / lines[line].length) * 6000}
                  y="100"
                  textAnchor="middle"
                >
                  {station}
                </text>
              </g>
            ))}
          </svg>
          <h2 className="line-name">{line}</h2>
        </div>
      ))}
    </div>
  );
}

export default TrainLine;
