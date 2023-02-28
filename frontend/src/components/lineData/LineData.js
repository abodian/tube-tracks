import React, { useState, useEffect } from "react";
import axios from "axios";

function LineData({ line }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/${line}`);
      setData(response.data);
    };
    fetchData();
  }, [line]);

  return (
    <div>
      {data ? (
        <div>
          <h2>Line {line} Data:</h2>
          <p>{data}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

module.exports = LineData