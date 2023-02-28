import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [line, setLine] = useState("victoria");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/line/${line}`);
      setData(response.data);
    };
    fetchData();
  }, [line]);

  return (
    <div className="App">
      <h1>Welcome!</h1>
      <h2>Line {line} Data:</h2>
      {data ? (
        <p>{data}</p>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
