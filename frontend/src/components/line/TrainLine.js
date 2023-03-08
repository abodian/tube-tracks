import "./TrainLine.css";
import React, { useEffect, useState } from "react";
const Tone = require("tone");

function TrainLine({ lineData, checkedLines, newZoom }) {
  const [zoom, setZoom] = useState(newZoom);

  useEffect(() => {
    function handleZoom() {
      setZoom(newZoom);
    }

    handleZoom();
  }, [newZoom]);

  const stations = {
    victoria: [
      "Brixton",
      "Stockwell",
      "Vauxhall",
      "Pimlico",
      "Victoria",
      "Green Park",
      "Oxford Circus",
      "Warren Street",
      "Euston",
      "King's Cross",
      "Highbury",
      "Finsbury Park",
      "Seven Sisters",
      "Tottenham Hale",
      "Blackhorse Road",
      "Walthamstow Central",
    ],
    jubilee: [
      "Stanmore",
      "Canons Park",
      "Queensbury",
      "Kingsbury",
      "Wembley Park",
      "Neasden",
      "Dollis Hill",
      "Willesden Green",
      "Kilburn",
      "West Hampstead",
      "Finchley Road",
      "Swiss Cottage",
      "St. Johns Wood",
      "Baker Street",
      "Bond Street",
      "Green Park",
      "Westminster",
      "Waterloo",
      "Southwark",
      "London Bridge",
      "Bermondsey",
      "Canada Water",
      "Canary Wharf",
      "North Greenwich",
      "Canning Town",
      "West Ham",
      "Stratford",
    ],
    central: [
      "Ealing",
      "West Acton",
      "North Acton",
      "East Acton",
      "White City",
      "Shepherd's Bush",
      "Holland Park",
      "Notting Hill",
      "Queensway",
      "Lancaster Gate",
      "Marble Arch",
      "Bond Street",
      "Oxford Circus",
      "Tottenham Court",
      "Holborn",
      "Chancery",
      "St. Paul's",
      "Bank",
      "Liverpool Street",
      "Bethnal Green",
      "Mile End",
      "Stratford",
      "Leyton",
      "LeytonStone",
      "Snaresbrook",
      "South Woodford",
      "Woodford",
      "Buckhurst Hill",
      "Loughton",
      "Debden",
      "Theydon",
      "Epping",
    ],
    metropolitan: [
      "Amersham",
      "Chalfont",
      "Chorleywood",
      "Rickmansworth",
      "Moor Park",
      "Northwood",
      "Northwood Hills",
      "Pinner",
      "North Harrow",
      "Harrow-on-the-Hill",
      "Northwick Park",
      "Preston Road",
      "Wembley Park",
      "Willesden Green",
      "Finchley Road",
      "Baker Street",
      "Great Portland Street",
      "Euston Square",
      "King's Cross",
      "Farringdon",
      "Barbican",
      "Moorgate",
      "Liverpool Street",
      "Aldgate",
    ],
    northern: [
      "High Barnet",
      "Totteridge & Whetstone",
      "Woodside Park",
      "West Finchley",
      "Finchley Central",
      "East Finchley",
      "Highgate",
      "Archway",
      "Tufnell Park",
      "Kentish Town",
      "Camden Town",
      "Mornington Crescent",
      "Euston",
      "King's Cross St Pancras",
      "Angel",
      "Old Street",
      "Moorgate",
      "Bank",
      "London Bridge",
      "Borough",
      "Elephant & Castle",
      "Kennington",
      "Oval",
      "Stockwell",
      "Clapham North",
      "Clapham Common",
      "Clapham South",
      "Balham",
      "Tooting Bec",
      "Tooting Broadway",
      "Colliers Wood",
      "South Wimbledon",
      "Morden",
      "Mill Hill East",
      "Edgeware",
      "Burnt Oak",
      "Colindale",
      "Hendon Central",
      "Brent Cross",
      "Golders Green",
      "Hampstead",
      "Belsize Park",
      "Chalk Farm",
      "Warren Street",
      "Goodge Street",
      "Tottenham Court Road",
      "Leicester Square",
      "Charing Cross",
      "Embankment",
      "Waterloo",
    ],
    bakerloo: [
      "Harrow & Wealdstone",
      "Kenton",
      "South Kenton",
      "North Wembley",
      "Wembley Central",
      "Stonebridge Park",
      "Harlesden",
      "Willesden Junction",
      "Kensal Green",
      "Queen's Park",
      "Kilburn Park",
      "Warwick Avenue",
      "Paddington",
      "Edgware Road",
      "Marylebone",
      "Baker Street",
      "Regent's Park",
      "Oxford Circus",
      "Piccadilly Circus",
      "Charing Cross",
      "Embankment",
      "Waterloo",
      "Lambeth North",
      "Elephant & Castle",
    ],
    piccadilly: [
      "Uxbridge",
      "Hillingdon",
      "Ickenham",
      "Ruislip",
      "Ruislip Manor",
      "Eastcote",
      "Rayners Lane",
      "South Harrow",
      "Sudbury Hill",
      "Sudbury Town",
      "Alperton",
      "Park Royal",
      "North Ealing",
      "Ealing Common",
      "Heathrow",
      "Hatton Cross",
      "Hounslow West",
      "Hounslow Central",
      "Hounslow East",
      "Osterley",
      "Boston Manor",
      "Southfields",
      "South Ealing",
      "Acton Town",
      "Turnham Green",
      "Hammersmith",
      "Barons Court",
      "Earl's Court",
      "Gloucester Road",
      "South Kensington",
      "Knightsbridge",
      "Hyde Park Corner",
      "Green Park",
      "Piccadilly Circus",
      "Leicester Square",
      "Covent Garden",
      "Holborn",
      "Russell Square",
      "King's Cross St Pancras",
      "Caledonian Road",
      "Holloway Road",
      "Arsenal",
      "Finsbury Park",
      "Manor House",
      "Turnpike Lane",
      "Wood Green",
      "Bounds Green",
      "Arnos Grove",
      "Southgate",
      "Oakwood",
      "Cockfosters",
    ],
    district: [
      "Ealing Broadway",
      "Ealing Common",
      "Acton Town",
      "Chiswick Park",
      "Turnham Green",
      "Stamford Brook",
      "Ravenscourt Park",
      "Hammersmith",
      "Barons Court",
      "West Kensington",
      "Earl's Court",
      "Gloucester Road",
      "South Kensington",
      "Sloane Square",
      "Victora",
      "St James's Park",
      "Westminster",
      "Embankment",
      "Temple",
      "Blackfriars",
      "Mansion House",
      "Cannon Street",
      "Monument",
      "Tower Hill",
      "Aldgate East",
      "Whitechapel",
      "Stepney Green",
      "Mile End",
      "Bow Road",
      "Bromley-by-Bow",
      "West Ham",
      "Plaistow",
      "Upton Park",
      "East Ham",
      "Barking",
      "Upney",
      "Becontree",
      "Dagenham Heathway",
      "Dagenham East",
      "Elm Park",
      "Hornchurch",
      "Upminster Bridge",
      "Upminster",
      "Richmond",
      "Kew Gardens",
      "Gunnersbury",
      "Wimbledon",
      "Wimbledon Park",
      "Southfields",
      "East Putney",
      "Putney Bridge",
      "Parsons Green",
      "Fulham Broadway",
      "West Brompton",
    ],
  };

  const notes = {
    CS3Piano:
      "https://res.cloudinary.com/did9lgedz/video/upload/v1678117938/tube-tracks/C_3_1_z6dqvg.wav",
    DS3Piano:
      "https://res.cloudinary.com/did9lgedz/video/upload/v1678117938/tube-tracks/D_3_1_aghaaz.wav",
    FS3Piano:
      "https://res.cloudinary.com/did9lgedz/video/upload/v1678117939/tube-tracks/F_3_1_xienr0.wav",
    GS3Piano:
      "https://res.cloudinary.com/did9lgedz/video/upload/v1678117939/tube-tracks/G_3_1_atwwuv.wav",
    AS3Piano:
      "https://res.cloudinary.com/did9lgedz/video/upload/v1678117938/tube-tracks/A_3_1_o0knhr.wav",
    CS2Pizz:
      "https://res.cloudinary.com/did9lgedz/video/upload/v1678126419/tube-tracks/C_2_Pizz_1_n5g82j.wav",
    DS2Pizz:
      "https://res.cloudinary.com/did9lgedz/video/upload/v1678126425/tube-tracks/D__Pizz_1_x6r7vr.wav",
    FS2Pizz:
      "https://res.cloudinary.com/did9lgedz/video/upload/v1678126436/tube-tracks/F__Pizz_2_1_dejk1j.wav",
    GS2Pizz:
      "https://res.cloudinary.com/did9lgedz/video/upload/v1678126446/tube-tracks/G_2_Pizz_1_fyhh7e.wav",
    AS2Pizz:
      "https://res.cloudinary.com/did9lgedz/video/upload/v1678127131/A_2_Pizz_1_ptxiqf.wav",
    FSDSChMarimba:
      "https://res.cloudinary.com/did9lgedz/video/upload/v1678198048/tube-tracks/marimba/FSDSChMarimba_1_uoj8d1.wav",
    GSESChMarimba:
      "https://res.cloudinary.com/did9lgedz/video/upload/v1678198048/tube-tracks/marimba/GSESChMarimba_1_qsue3n.wav",
    CSDSClusterMarimba:
      "https://res.cloudinary.com/did9lgedz/video/upload/v1678198048/tube-tracks/marimba/CSDSClusterMarimba_1_bgjpeh.wav",
  };

  const bass = {
    EBass:
      "https://res.cloudinary.com/did9lgedz/video/upload/v1678189276/tube-tracks/Bass%20Samples/E_Bass_bip_1_qzgqbn.wav",
    DSBass:
      "https://res.cloudinary.com/did9lgedz/video/upload/v1678189276/tube-tracks/Bass%20Samples/ES_Bass_bip_1_qj6wgi.wav",
    FSBass:
      "https://res.cloudinary.com/did9lgedz/video/upload/v1678189276/tube-tracks/Bass%20Samples/FS_Bass_bip_1_j6rwcm.wav",
    GSBass:
      "https://res.cloudinary.com/did9lgedz/video/upload/v1678189276/tube-tracks/Bass%20Samples/GS_Bass_bip_1_zam6i0.wav",
    ASBass:
      "https://res.cloudinary.com/did9lgedz/video/upload/v1678190334/tube-tracks/Bass%20Samples/AS_Bass_bip_1_etl9hi.wav",
    BBass:
      "https://res.cloudinary.com/did9lgedz/video/upload/v1678189276/tube-tracks/Bass%20Samples/B_Bass_bip_1_si5hac.wav",
    CSBass:
      "https://res.cloudinary.com/did9lgedz/video/upload/v1678189276/tube-tracks/Bass%20Samples/C_Bass_bip_1_dhhlfd.wav",
  };

  const playBassNote = (note) => {
    const player = new Tone.Player(bass[note]).toDestination();
    player.autostart = true;
    player.volume.value = -25;
    player.loop = false;
  };

  document.addEventListener("keypress", (event) => {
    switch (event.key) {
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
  });

  // change line 36 backgroundAudio.(choose which backing track here - orchestron or cosmicWave)
  const backgroundAudio = {
    orchestron:
      "https://res.cloudinary.com/did9lgedz/video/upload/v1678200859/tube-tracks/Backing_Track_1_von8kt.wav",
    cosmicWave:
      "https://res.cloudinary.com/did9lgedz/video/upload/v1678202659/tube-tracks/Backing_Track_2_l2ibki.wav",
  };
  const player = new Tone.Player(backgroundAudio.cosmicWave).toDestination();
  player.loop = true;
  player.autostart = true;
  player.volume.value = -40;

  function pickRandomKey(obj) {
    const keys = Object.keys(obj);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];
    const randomValue = obj[randomKey];
    return randomValue;
  }

  useEffect(() => {
    const checkExpectedArrival = () => {
      console.log("CHECK FOR TIME MATCH");
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
              console.log(train);
              matchingTrains.push(train);
            } else {
              return null;
            }
            const stationName = train.stationName.split(" ")[0];
            console.log(stationName);
            const stationEl = document.querySelectorAll(
              `[id^='${stationName}']`
            );
            console.log(stationEl);
            stationEl.forEach((el) => {
              el.classList.add("pulse");
              setTimeout(() => {
                el.classList.remove("pulse");
              }, 3000);
            });
          }
        });
        matchingTrains.forEach((train, index) => {
          const randomKey = pickRandomKey(notes);
          const delay = Math.random() * 1000;
          setTimeout(() => {
            const player = new Tone.Player(randomKey).toDestination();
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
    <div className="train-line" style={{ zoom: zoom }}>
      {Object.keys(stations).map(
        (line) =>
          checkedLines[line] && (
            <div key={line} className={`line ${line}`}>
              <svg viewBox="-1230 0 24450 150">
                <line
                  x1="9550"
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
                      <tspan
                        x={
                          ((index + 0.2) / stations[line].length) * 13000 + 9800
                        }
                        dy="0.5em"
                      >
                        {station.split(" ")[0]}
                      </tspan>
                      <tspan
                        x={
                          ((index + 0.2) / stations[line].length) * 13000 + 9800
                        }
                        dy="1em"
                      >
                        {station.split(" ")[1]}
                      </tspan>
                      <tspan
                        x={
                          ((index + 0.2) / stations[line].length) * 13000 + 9800
                        }
                        dy="1em"
                      >
                        {station.split(" ")[2]}
                      </tspan>
                    </text>
                  </g>
                ))}
              </svg>
              <h2 className="line-name">{line}</h2>
            </div>
          )
      )}
    </div>
  );
}

export default TrainLine;
