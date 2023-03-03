import "./TrainLine.css";

function TrainLine({ lineData }) {
  const stations = {
    victoria: ["Brixton", "Stockwell", "Vauxhall", "Pimlico", "Victoria", "Green Park", "Oxford Circus", "Warren Street", "Euston", "King's Cross", "Highbury", "Finsbury Park", "Seven Sisters", "Tottenham Hale", "Blackhorse Road", "Walthamstow Central"],
    // jubilee: ["Baker Street", "Bond Street", "Green Park", "Westminster", "Canary Wharf"],
    // central: ["Notting Hill Gate", "Oxford Circus", "Bank", "Stratford"],
    // metropolitan: ["Baker Street", "Liverpool Street", "Moorgate", "Aldgate"],
    // northern: ["London Bridge", "Waterloo", "Charing Cross", "Camden Town"],
    // bakerloo: ["Baker Street", "Oxford Circus", "Piccadilly Circus", "Charing Cross"],
    // piccadilly: ["Earl's Court", "South Kensington", "Piccadilly Circus", "Leicester Square", "Covent Garden"],
    // district: ["Notting Hill Gate", "South Kensington", "Westminster", "Tower Hill"]
  };

  return (
    <div className="train-line">
      {Object.keys(stations).map((line) => (
        <div key={line} className={`line ${line}`}>
          <svg viewBox="0 0 5000 100">
            <line x1="0" y1="50" x2="5000" y2="50" className="line-color" />
            {stations[line].map((station, index) => (
              <circle
                key={station}
                className={lineData.some((train) => train.stationName === station) ? "station active" : "station"}
                cx={(index / stations[line].length) * 5000}
                cy="50"
                r="20"
              />
            ))}
          </svg>
          <h2>{line}</h2>
        </div>
      ))}
    </div>
  );
}

export default TrainLine;

