import "./TrainLine.css";
import React, { useEffect } from "react";
const Tone = require('tone')

function TrainLine({ lineData }) {
  const stations = {
    victoria: ["Brixton", "Stockwell", "Vauxhall", "Pimlico", "Victoria", "Green Park", "Oxford Circus", "Warren Street", "Euston", "King's Cross", "Highbury", "Finsbury Park", "Seven Sisters", "Tottenham Hale", "Blackhorse Road", "Walthamstow Central"],
    jubilee: ["Stanmore", "Canons Park", "Queensbury", "Kingsbury", "Wembley Park", "Neasden", "Dollis Hill", "Willesden Green", "Kilburn", "West Hampstead", "Finchley Road", "Swiss Cottage", "St. Johns Wood", "Baker Street", "Bond Street", "Green Park", "Westminster", "Waterloo", "Southwark", "London Bridge", "Bermondsey", "Canada Water", "Canary Wharf", "North Greenwich", "Canning Town", "West Ham", "Stratford"],
    central: ["Ealing", "West Acton", "North Acton", "East Acton", "White City", "Shepherd's Bush", "Holland Park", "Notting Hill", "Queensway", "Lancaster Gate", "Marble Arch", "Bond Street", "Oxford Circus", "Tottenham Court", "Holborn", "Chancery", "St. Paul's", "Bank", "Liverpool Street", "Bethnal Green", "Mile End", "Stratford", "Leyton", "LeytonStone", "Snaresbrook", "South Woodford", "Woodford", "Buckhurst Hill", "Loughton", "Debden", "Theydon", "Epping"],
    metropolitan: ["Amersham", "Chalfont", "Chorleywood", "Rickmansworth", "Moor Park", "Northwood", "Northwood Hills", "Pinner", "North Harrow", "Harrow-on-the-Hill", "Northwick Park", "Preston Road", "Wembley Park", "Willesden Green", "Finchley Road", "Baker Street", "Great Portland Street", "Euston Square", "King's Cross", "Farringdon", "Barbican", "Moorgate", "Liverpool Street", "Aldgate"],
    northern: ["London Bridge", "Waterloo", "Charing Cross", "Camden Town"],
    bakerloo: ["Baker Street", "Oxford Circus", "Piccadilly Circus", "Charing Cross"],
    piccadilly: ["Earl's Court", "South Kensington", "Piccadilly Circus", "Leicester Square", "Covent Garden"],
    district: ["Notting Hill Gate", "South Kensington", "Westminster", "Tower Hill"]
  };

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
          }
        });
        matchingTrains.forEach((train, index) => {
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

          const keyNotes = ['C4', 'E4', 'G4', 'Bb4', 'C5'];
          const noteLengths = ['16n', '8n', '4n', '2n']
          const noteIndex = Math.floor(Math.random() * notes.length);
          const lengthIndex = Math.floor(Math.random() * noteLengths.length);
          const synth = new Tone.AMSynth().toDestination();
          synth.set({
            envelope: {
              attack: 0.05,
              decay: 0.1,
              sustain: 0.4,
              release: 1
            }
          });
          const delay = matchingTrains.length * 0.5;
          synth.triggerAttackRelease(keyNotes[noteIndex], noteLengths[lengthIndex], `+${delay}`);

          const delayEffect = new Tone.Reverb({
            wet: 1.0
          });
          synth.connect(delayEffect);
          delayEffect.toDestination();
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
      {Object.keys(stations).map((line) => (
        <div key={line} className={`line ${line}`}>
          <svg viewBox="-3800 0 10000 120">
            <line
              x1="0"
              y1="50"
              x2="6000"
              y2="50"
              className="line-color"
            />
            {stations[line].map((station, index) => (
              <g key={station}>
                <circle
                  id={station}
                  className={"station"}
                  cx={((index + 0.5) / stations[line].length) * 6000}
                  cy="50"
                  r="20"
                />
                <text
                  className="station-name"
                  x={((index + 0.5) / stations[line].length) * 6000}
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
