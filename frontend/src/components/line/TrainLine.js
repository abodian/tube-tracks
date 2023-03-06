import React, { useEffect, useState } from "react";
import { Interval, Note, Scale } from "tonal";

import "./TrainLine.css";
import { stations } from "./stations";

import A4 from "../../samples/A4.mp3";
import C4 from "../../samples/C4.mp3";
import A5 from "../../samples/A5.mp3";
import C5 from "../../samples/C5.mp3";
import D5 from "../../samples/D5.mp3";
import D4 from "../../samples/D4.mp3";
import E5 from "../../samples/E5.mp3";
import G5 from "../../samples/G5.mp3";

const Tone = require("tone");

function TrainLine({ lineData }) {
  const [lines, setLines] = useState(stations.victoria);
  const [zoom, setZoom] = useState(1);
  const [samplesLoaded, setSamplesLoaded] = useState(false);

  const notes = [
    { name: "G5", url: G5 },
    { name: "C4", url: C4 },
    { name: "E5", url: E5 },
  ];

  // const [buffers, setBuffers] = useState([]);

  const [players] = useState([
    new Tone.Player(A4).toDestination(),
    new Tone.Player(C4).toDestination(),
  ]);
  const handleZoomIn = () => {
    setZoom(zoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoom(zoom - 0.1);
  };

  function shiftPitch(note) {
    const shiftedNote = Note.transpose(C4, "5P");
    return shiftedNote;
  }

  async function loadAudioBuffers() {
    const buffer1 = await Tone.Buffer.fromUrl(E5);
    const buffer2 = await Tone.Buffer.fromUrl(C4);
    const buffer3 = await Tone.Buffer.fromUrl(G5);

    const buffer4 = await Tone.Buffer.fromUrl(A5);
    const buffer5 = await Tone.Buffer.fromUrl(D4);
    const buffer6 = await Tone.Buffer.fromUrl(E5);

    // return {
    //   victoria: [buffer1, buffer2, buffer3],
    //   central: [buffer1, buffer2, buffer3],
    //   jubile: [buffer1, buffer2, buffer3],
    //   metropolitan: [buffer1, buffer2, buffer3],
    //   northern: [buffer1, buffer2, buffer3],
    //   bakerloo: [buffer1, buffer2, buffer3],
    //   piccadilly: [buffer1, buffer2, buffer3],
    //   district: [buffer1, buffer2, buffer3],
    // };
    return [buffer1, buffer2, buffer3, buffer4, buffer5, buffer6];
  }

  const handlePlay = async (line) => {
    const buffers = await loadAudioBuffers();

    const players = buffers.map((buffer) =>
      new Tone.Player(buffer).toDestination()
    );
    if (
      line === "victoria" ||
      line === "central" ||
      line === "district" ||
      line === "hammersmith" ||
      line === "piccadilly"
    ) {
      players.slice(0, 1).forEach((player) => player.start());
    } else {
      players.slice(0, 3).forEach((player) => player.start());
    }
  };

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
          handlePlay(train.lineName);

          // const keyNotes = ["C4", "E4", "G4", "Bb4", "C5"];
          // const noteLengths = ["8n", "4n", "2n"];
          // const noteIndex = Math.floor(Math.random() * keyNotes.length);
          // const lengthIndex = Math.floor(Math.random() * noteLengths.length);
          // const synth = new Tone.AMSynth().toDestination();
          // const delay = index * 0.5;
          // synth.triggerAttackRelease(
          //   keyNotes[noteIndex],
          //   noteLengths[lengthIndex],
          //   `+${delay}`
          // );
        });
      }
    };

    const intervalId = setInterval(() => {
      checkExpectedArrival();
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="train-line" style={{ zoom: zoom }}>
      <button onClick={handleZoomIn}>Zoom In</button>
      <button onClick={handleZoomOut}>Zoom Out</button>
      <button onClick={handlePlay}>play Out</button>

      {Object.keys(lines).map((line) => (
        <div key={line} className={`line ${line}`}>
          <svg viewBox="-3000 0 10000 120">
            <line x1="0" y1="50" x2="5800" y2="50" className="line-color" />
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
