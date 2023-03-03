import "./TrainLine.css";

function TrainLine({ lineData }) {
  const stations = {
    victoria: ["Brixton", "Stockwell", "Vauxhall", "Pimlico", "Victoria", "Green Park", "Oxford Circus", "Warren Street", "Euston", "King's Cross", "Highbury", "Finsbury Park", "Seven Sisters", "Tottenham Hale", "Blackhorse Road", "Walthamstow Central"],
    jubilee: ["Stanmore", "Canons Park", "Queensbury", "Kingsbury", "Wembley Park", "Neasden", "Dollis Hill", "Willesden Green", "Kilburn", "West Hampstead", "Finchley Road", "Swiss Cottage", "St. Johns Wood", "Baker Street", "Bond Street", "Green Park", "Westminster", "Waterloo", "Southwark", "London Bridge", "Bermondsey", "Canada Water", "Canary Wharf"],
    central: ["Notting Hill Gate", "Oxford Circus", "Bank", "Stratford"],
    metropolitan: ["Baker Street", "Liverpool Street", "Moorgate", "Aldgate"],
    northern: ["London Bridge", "Waterloo", "Charing Cross", "Camden Town"],
    bakerloo: ["Baker Street", "Oxford Circus", "Piccadilly Circus", "Charing Cross"],
    piccadilly: ["Earl's Court", "South Kensington", "Piccadilly Circus", "Leicester Square", "Covent Garden"],
    district: ["Notting Hill Gate", "South Kensington", "Westminster", "Tower Hill"]
  };

  return (
    <div className="train-line">
      {Object.keys(stations).map((line) => (
        <div key={line} className={`line ${line}`}>
          <svg viewBox="0 0 5200 100">
            <line x1="0" y1="50" x2="5200" y2="50" className="line-color" />
            {stations[line].map((station, index) => (
              <g key={station}>
                <circle
                  className={lineData.some((train) => train.stationName === station) ? "station active" : "station"}
                  cx={((index + 0.5) / stations[line].length) * 5200}
                  cy="50"
                  r="20"
                />
                <text className="station-name" x={((index + 0.5) / stations[line].length) * 5200} y="100" textAnchor="middle">
                  {station}
                </text>
              </g>
            ))}
          </svg>
          <h2 className='line-name'>{line}</h2>
        </div>
      ))}
    </div>
  );
}

export default TrainLine;
