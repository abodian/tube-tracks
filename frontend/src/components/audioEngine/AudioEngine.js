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
          }
        });
        matchingTrains.forEach((train, index) => {
          const keyNotes = ['C4', 'E4', 'G4', 'Bb4', 'C5'];
          const noteLengths = ['8n', '4n', '2n']
          const noteIndex = Math.floor(Math.random() * keyNotes.length);
          const lengthIndex = Math.floor(Math.random() * noteLengths.length);
          const synth = new Tone.AMSynth().toDestination();
          const delay = index * 0.5;
          synth.triggerAttackRelease(keyNotes[noteIndex], noteLengths[lengthIndex], `+${delay}`)
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