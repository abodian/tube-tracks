import React, { useEffect, useRef } from "react";
import "./styles.css";

const Station = ({ station, currentStation }) => {
  const ref = useRef(null);

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
