import React from "react";

const ZoomControl = ({ zoomIn, zoomOut }) => {
  return (
    <div>
      <button onClick={zoomIn}>zoomin</button>
      <button onClick={zoomOut}>zoomout</button>
    </div>
  );
};

export default ZoomControl;
