import "./TrainLine.css";
import React, { useEffect } from "react";
const Tone = require('tone')

function TrainLine({ lineData, checkedLines }) {
  const stations = {
    victoria: ["Brixton", "Stockwell", "Vauxhall", "Pimlico", "Victoria", "Green Park", "Oxford Circus", "Warren Street", "Euston", "King's Cross", "Highbury", "Finsbury Park", "Seven Sisters", "Tottenham Hale", "Blackhorse Road", "Walthamstow Central"],
    jubilee: ["Stanmore", "Canons Park", "Queensbury", "Kingsbury", "Wembley Park", "Neasden", "Dollis Hill", "Willesden Green", "Kilburn", "West Hampstead", "Finchley Road", "Swiss Cottage", "St. Johns Wood", "Baker Street", "Bond Street", "Green Park", "Westminster", "Waterloo", "Southwark", "London Bridge", "Bermondsey", "Canada Water", "Canary Wharf", "North Greenwich", "Canning Town", "West Ham", "Stratford"],
    central: ["Ealing", "West Acton", "North Acton", "East Acton", "White City", "Shepherd's Bush", "Holland Park", "Notting Hill", "Queensway", "Lancaster Gate", "Marble Arch", "Bond Street", "Oxford Circus", "Tottenham Court", "Holborn", "Chancery", "St. Paul's", "Bank", "Liverpool Street", "Bethnal Green", "Mile End", "Stratford", "Leyton", "LeytonStone", "Snaresbrook", "South Woodford", "Woodford", "Buckhurst Hill", "Loughton", "Debden", "Theydon", "Epping"],
    metropolitan: ["Amersham", "Chalfont", "Chorleywood", "Rickmansworth", "Moor Park", "Northwood", "Northwood Hills", "Pinner", "North Harrow", "Harrow-on-the-Hill", "Northwick Park", "Preston Road", "Wembley Park", "Willesden Green", "Finchley Road", "Baker Street", "Great Portland Street", "Euston Square", "King's Cross", "Farringdon", "Barbican", "Moorgate", "Liverpool Street", "Aldgate"],
    northern: ["High Barnet", "Totteridge & Whetstone", "Woodside Park", "West Finchley", "Finchley Central", "East Finchley", "Highgate", "Archway", "Tufnell Park", "Kentish Town", "Camden Town", "Mornington Crescent", "Euston", "King's Cross St Pancras", "Angel", "Old Street", "Moorgate", "Bank", "London Bridge", "Borough", "Elephant & Castle", "Kennington", "Oval", "Stockwell", "Clapham North", "Clapham Common", "Clapham South", "Balham", "Tooting Bec", "Tooting Broadway", "Colliers Wood", "South Wimbledon", "Morden", "Mill Hill East", "Edgeware", "Burnt Oak", "Colindale", "Hendon Central", "Brent Cross", "Golders Green", "Hampstead", "Belsize Park", "Chalk Farm", "Warren Street", "Goodge Street", "Tottenham Court Road", "Leicester Square", "Charing Cross", "Embankment", "Waterloo"],
    bakerloo: ["Harrow & Wealdstone", "Kenton", "South Kenton", "North Wembley", "Wembley Central", "Stonebridge Park", "Harlesden", "Willesden Junction", "Kensal Green", "Queen's Park", "Kilburn Park", "Warwick Avenue", "Paddington", "Edgware Road", "Marylebone", "Baker Street", "Regent's Park", "Oxford Circus", "Piccadilly Circus", "Charing Cross", "Embankment", "Waterloo", "Lambeth North", "Elephant & Castle"],
    piccadilly: ["Uxbridge", "Hillingdon", "Ickenham", "Ruislip", "Ruislip Manor", "Eastcote", "Rayners Lane", "South Harrow", "Sudbury Hill", "Sudbury Town", "Alperton", "Park Royal", "North Ealing", "Ealing Common", "Heathrow", "Hatton Cross", "Hounslow West", "Hounslow Central", "Hounslow East", "Osterley", "Boston Manor", "Southfields", "South Ealing", "Acton Town", "Turnham Green", "Hammersmith", "Barons Court", "Earl's Court", "Gloucester Road", "South Kensington", "Knightsbridge", "Hyde Park Corner", "Green Park", "Piccadilly Circus", "Leicester Square", "Covent Garden", "Holborn", "Russell Square", "King's Cross St Pancras", "Caledonian Road", "Holloway Road", "Arsenal", "Finsbury Park", "Manor House", "Turnpike Lane", "Wood Green", "Bounds Green", "Arnos Grove", "Southgate", "Oakwood", "Cockfosters"],
    district: ["Ealing Broadway", "Ealing Common", "Acton Town", "Chiswick Park", "Turnham Green", "Stamford Brook", "Ravenscourt Park", "Hammersmith", "Barons Court", "West Kensington", "Earl's Court", "Gloucester Road", "South Kensington", "Sloane Square", "Victora", "St James's Park", "Westminster", "Embankment", "Temple", "Blackfriars", "Mansion House", "Cannon Street", "Monument", "Tower Hill", "Aldgate East", "Whitechapel", "Stepney Green", "Mile End", "Bow Road", "Bromley-by-Bow", "West Ham", "Plaistow", "Upton Park", "East Ham", "Barking", "Upney", "Becontree", "Dagenham Heathway", "Dagenham East", "Elm Park", "Hornchurch", "Upminster Bridge", "Upminster", "Richmond", "Kew Gardens", "Gunnersbury", "Wimbledon", "Wimbledon Park", "Southfields", "East Putney", "Putney Bridge", "Parsons Green", "Fulham Broadway", "West Brompton"]
  };
  
  const backgroundAudio = {tense: "https://res.cloudinary.com/did9lgedz/video/upload/v1678102464/tube-tracks/Ambient_Audio_jwpg3a.wav"}
  const player = new Tone.Player(backgroundAudio.tense).toDestination();
  player.loop = true;
  player.autostart = true;
  player.volume.value = -20

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
              el.classList.add('pulse');
              setTimeout(() => {
                el.classList.remove('pulse');
              }, 3000);
            });
          }
        });
        matchingTrains.forEach((train, index) => {
          // const keyNotes = ['C4', 'E4', 'G4', 'Bb4', 'C5'];
          // const noteLengths = ['8n', '4n', '2n']
          // const noteIndex = Math.floor(Math.random() * keyNotes.length);
          // const lengthIndex = Math.floor(Math.random() * noteLengths.length);
          // const synth = new Tone.AMSynth().toDestination();
          // const delay = index * 0.5;
          // synth.triggerAttackRelease(keyNotes[noteIndex], noteLengths[lengthIndex], `+${delay}`)
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
