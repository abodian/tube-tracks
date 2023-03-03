import React, { useEffect, useState, useRef } from "react";

import Station from "./Station";
import "./styles.css";

const Line = () => {
  const stationArray = [
    "Bow",
    "Stepney",
    "Stratford",
    "Putney",
    "Mile End",
    "Bank",
  ];
  const [currentStation, setCurrentStation] = useState("");
  const divRef = useRef(null);

  //----- Choose random station ---------------

  function repeatFunction(func, interval) {
    setInterval(func, interval);
  }
  function changeStation() {
    setCurrentStation(
      stationArray[Math.floor(Math.random() * stationArray.length)]
    );
  }
  repeatFunction(changeStation, 2000);

  //--------------------------------------------

  return (
    <div ref={divRef} id="container">
      {stationArray.map((station, index) => (
        <Station
          key={index}
          station={station}
          currentStation={currentStation}
        />
      ))}
    </div>
  );
};

export default Line;
