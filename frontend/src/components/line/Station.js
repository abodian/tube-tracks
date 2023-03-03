import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const Station = ({ station, currentStation }) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);
  const divRef = useRef(null);

  useEffect(() => {
    ref.current = document.getElementById(currentStation);
    if (ref.current) {
      ref.current.className = "active";
    }
  }, [currentStation]);

  return (
    <div id={station} ref={ref}>
      {station}
    </div>
  );
};

export default Station;
