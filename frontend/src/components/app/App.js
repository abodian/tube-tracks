import React, { useState, useEffect } from "react";
import Homepage from "../homepage/Homepage";
import "./App.css";
import axios from "axios";

function App() {
  const [line, setLine] = useState("victoria");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/line/${line}`);
        const data = await response.data.transformedData;
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [line]);

  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
