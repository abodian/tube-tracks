import "./TrainLine.css";
import React, { useEffect, useState } from "react";
const Tone = require('tone')

function TrainLine({ lineData, checkedLines }) {
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

  const notes = {
  CS3Piano: "https://res.cloudinary.com/did9lgedz/video/upload/v1678117938/tube-tracks/C_3_1_z6dqvg.wav",
  DS3Piano: "https://res.cloudinary.com/did9lgedz/video/upload/v1678117938/tube-tracks/D_3_1_aghaaz.wav",
  FS3Piano: "https://res.cloudinary.com/did9lgedz/video/upload/v1678117939/tube-tracks/F_3_1_xienr0.wav",
  GS3Piano: "https://res.cloudinary.com/did9lgedz/video/upload/v1678117939/tube-tracks/G_3_1_atwwuv.wav",
  AS3Piano: "https://res.cloudinary.com/did9lgedz/video/upload/v1678117938/tube-tracks/A_3_1_o0knhr.wav",
  CS2Pizz: "https://res.cloudinary.com/did9lgedz/video/upload/v1678126419/tube-tracks/C_2_Pizz_1_n5g82j.wav",
  DS2Pizz: "https://res.cloudinary.com/did9lgedz/video/upload/v1678126425/tube-tracks/D__Pizz_1_x6r7vr.wav",
  FS2Pizz: "https://res.cloudinary.com/did9lgedz/video/upload/v1678126436/tube-tracks/F__Pizz_2_1_dejk1j.wav",
  GS2Pizz: "https://res.cloudinary.com/did9lgedz/video/upload/v1678126446/tube-tracks/G_2_Pizz_1_fyhh7e.wav",
  AS2Pizz: "https://res.cloudinary.com/did9lgedz/video/upload/v1678127131/A_2_Pizz_1_ptxiqf.wav",
  }

  const bass = {
    EBass: "https://res.cloudinary.com/did9lgedz/video/upload/v1678189276/tube-tracks/Bass%20Samples/E_Bass_bip_1_qzgqbn.wav",
    ESBass: "https://res.cloudinary.com/did9lgedz/video/upload/v1678189276/tube-tracks/Bass%20Samples/ES_Bass_bip_1_qj6wgi.wav",
    FSBass: "https://res.cloudinary.com/did9lgedz/video/upload/v1678189276/tube-tracks/Bass%20Samples/FS_Bass_bip_1_j6rwcm.wav",
    GSBass: "https://res.cloudinary.com/did9lgedz/video/upload/v1678189276/tube-tracks/Bass%20Samples/GS_Bass_bip_1_zam6i0.wav",
    ASBass: "https://res.cloudinary.com/did9lgedz/video/upload/v1678189275/tube-tracks/Bass%20Samples/AS_Bass_bip_1_nm1fec.wav",
    BBass: "https://res.cloudinary.com/did9lgedz/video/upload/v1678189276/tube-tracks/Bass%20Samples/B_Bass_bip_1_si5hac.wav",
    CSBass: "https://res.cloudinary.com/did9lgedz/video/upload/v1678189276/tube-tracks/Bass%20Samples/C_Bass_bip_1_dhhlfd.wav",
  }

  document.addEventListener('keypress', function (event) {
    if (event.key === '1') {
    const player = new Tone.Player(bass.ESBass).toDestination()
    player.autostart = true;
    player.volume.value = -20
    player.loop = false;
    }
  });
  
  document.addEventListener('keypress', function (event) {
    if (event.key === '2') {
    const player = new Tone.Player(bass.FSBass).toDestination()
    player.autostart = true;
    player.volume.value = -20
    player.loop = false;
    }
  });
  
  document.addEventListener('keypress', function (event) {
    if (event.key === '3') {
    const player = new Tone.Player(bass.GSBass).toDestination()
    player.autostart = true;
    player.volume.value = -20
    player.loop = false;
    }
  });
  
  document.addEventListener('keypress', function (event) {
    if (event.key === '4') {
    const player = new Tone.Player(bass.ASBass).toDestination()
    player.autostart = true;
    player.volume.value = -10
    player.loop = false;
    }
  });

  document.addEventListener('keypress', function (event) {
    if (event.key === '5') {
    const player = new Tone.Player(bass.BBass).toDestination()
    player.autostart = true;
    player.volume.value = -15
    player.loop = false;
    }
  });
  
  document.addEventListener('keypress', function (event) {
    if (event.key === '6') {
    const player = new Tone.Player(bass.CSBass).toDestination()
    player.autostart = true;
    player.volume.value = -15
    player.loop = false;
    }
  });


  const backgroundAudio = {tense: "https://res.cloudinary.com/did9lgedz/video/upload/v1678102464/tube-tracks/Ambient_Audio_jwpg3a.wav"}
  const player = new Tone.Player(backgroundAudio.tense).toDestination();
  player.loop = true;
  player.autostart = true;
  player.volume.value = -40

  function pickRandomKey(obj) {
    const keys = Object.keys(obj);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex]
    const randomValue = obj[randomKey]
    return randomValue
  }

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
            if (checkedLines[train.lineName.toLowerCase()]) {
            console.log(train);
            matchingTrains.push(train);
            } else {
              return null
            }
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
          const randomKey = pickRandomKey(notes)
          const delay = Math.random() * 1000;
          setTimeout(() => {
            const player = new Tone.Player(randomKey).toDestination()
            player.autostart = true;
          }, index * 1000 + delay); // delay each sound by 1 second
        });
      }
    };

    const intervalId = setInterval(() => {
      checkExpectedArrival();
    }, 500);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="train-line">
      {Object.keys(stations).map((line) => (
        checkedLines[line] && (
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
        )
      ))}
    </div>
  );
}

export default TrainLine;
