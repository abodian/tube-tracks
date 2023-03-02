import React, { useState, useEffect } from "react";
import axios from "axios";
const Tone = require('tone')

function ArrivalData({ line, noteLength }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('FETCHING API DATA')
        const response = await axios.get(`http://localhost:8080/line/${line}`);
        const data = await response.data.transformedData
        setData(data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 30000);

    return () => clearInterval(intervalId);
  }, [line]);

  useEffect(() => {
    const checkExpectedArrival = () => {
      console.log('CHECK FOR TIME MATCH')
      if (data) {
        const now = new Date();
        data.forEach((obj) => {
          const [hours, minutes, seconds] = obj.expectedArrival.split(':');
          const expectedArrival = new Date();
          expectedArrival.setHours(hours);
          expectedArrival.setMinutes(minutes);
          expectedArrival.setSeconds(seconds);
          if (expectedArrival.getTime() === now.getTime()) {
            console.log(obj);
            // dorian mode
            const keyNotes = ['C4', 'D4', 'Eb4', 'F4', 'G4', 'A4', 'Bb4', 'C5'];
            const noteIndex = Math.floor(Math.random() * keyNotes.length);
            const synth = new Tone.AMSynth().toDestination();
            synth.triggerAttackRelease(keyNotes[noteIndex], noteLength)
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


export default ArrivalData;