import React, { useState } from "react";

function ZoomControl({ handleZoom }) {
  const [zoom, setZoom] = useState(50);

  const handleZoomChange = (event) => {
    setZoom(event.target.value);
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={zoom}
        onChange={handleZoomChange}
      />
      <p>Volume: {zoom}</p>
    </div>
  );
}

export default ZoomControl;
