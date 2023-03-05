// no longer required but keeping it here just in case for now

import React, { useEffect } from "react";
const Tone = require('tone')

function AudioEngine({ lineData }) {

useEffect(() => {
  const checkExpectedArrival = () => {
    console.log('CHECK FOR TIME MATCH')
    if (lineData) {
      const now = new Date();
      const matchingTrains = [];
      lineData.forEach((train) => {
        const [hours, minutes, seconds] = train.expectedArrival.split(':');
        const expectedArrival = new Date();
        expectedArrival.setHours(hours);
        expectedArrival.setMinutes(minutes);
        expectedArrival.setSeconds(seconds);
        if (expectedArrival.getTime() === now.getTime()) {
          console.log(train);
          matchingTrains.push(train);
          const stationName = train.stationName.split(' ')[0];
          console.log(stationName)
          const stationEl = document.querySelectorAll(`[id^='${stationName}']`)
          console.log(stationEl)
          stationEl.forEach((el) => {
            el.style.fill = "red";
            setTimeout(() => {
              el.style.fill = "";
            }, 1000);
          });

          // Use different scales or modes for different train lines
          let scale = 'C major';
          if (train.lineName === 'Central') {
            scale = 'D dorian';
          } else if (train.lineName === 'Victoria') {
            scale = 'E phrygian';
          } else if (train.lineName === 'Piccadilly') {
            scale = 'F lydian';
          } else if (train.lineName === 'Jubilee') {
            scale = 'G mixolydian';
          } else if (train.lineName === 'Metropolitan') {
            scale = 'A aeolian';
          } else if (train.lineName === 'Northern') {
            scale = 'B locrian';
          } else if (train.lineName === 'Bakerloo') {
            scale = 'C# phrygian';
          } else if (train.lineName === 'District') {
            scale = 'D# mixolydian';
          }
          const notes = Tone.Frequency(scale).harmonize([0, 2, 4, 5, 7, 9, 11]);
          

          // Vary the tempo and rhythm based on the frequency of train arrivals
          const bpm = 120 + (matchingTrains.length * 10);
          const noteLengths = ['16n', '8n', '4n', '2n']
          const noteIndex = Math.floor(Math.random() * notes.length);
          const lengthIndex = Math.floor(Math.random() * noteLengths.length);
          const synth = new Tone.AMSynth().toDestination();
          synth.set({
            envelope: {
              attack: 0.05,
              decay: 0.1,
              // sustain: 0.4,
              release: 1
            }
          });
          const delay = matchingTrains.length * 0.5;
          synth.triggerAttackRelease(notes[noteIndex], noteLengths[lengthIndex], `+${delay}`);
        }
      });
    }
  };

    const intervalId = setInterval(() => {
      checkExpectedArrival();
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <div>
    </div>
  );
}


export default AudioEngine;