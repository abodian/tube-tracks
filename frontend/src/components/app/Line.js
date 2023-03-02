import React, { Component } from 'react';
import "./Line.css";

//const stationNames = ['Walthamstow Central', 'Blackhorse Road', 'Tottenham Hale', 'Seven Sisters', 'Finsbury Park', 'Highbury & Islington', 'King\'s Cross', 'Euston', 'Warren Street', 'Oxford Circus', 'Green Park', 'Victoria', 'Pimlico', 'Vauxhall', 'Stockwell', 'Brixton']; // an array of station names

class Line extends Component {
    render() {
      const numDots = 16; // number of dots between stations
      const dotsArray = Array.from(Array(numDots).keys());
      const lineName = 'Victoria Line'; // can be set to station name
      const stationNames = ['Walthamstow Central', 'Blackhorse Road', 'Tottenham Hale', 'Seven Sisters', 'Finsbury Park', 'Highbury & Islington', 'King\'s Cross', 'Euston', 'Warren Street', 'Oxford Circus', 'Green Park', 'Victoria', 'Pimlico', 'Vauxhall', 'Stockwell', 'Brixton']; // an array of station names
      const stationElements = stationNames.map((name, index) => <div key={index}>{name}</div>);

      return (
        <>
          <h1 className="station">{lineName}</h1>
          <div className="h_lines">
            {dotsArray.map((dot, index) => (
              <React.Fragment key={index}>
                <div className="dot-container">
                  <span className="dot">&nbsp;</span>
                </div>
                {index < numDots - 1 && <div className="h_line"></div>}
              </React.Fragment>
            ))}
          </div>
          <div className="stations">
            {stationElements}
          </div>
        </>
      );
    }
  }
  
  
  export default Line;