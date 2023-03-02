import React, { useState, useEffect } from "react";
import "./App.css";
import Line from './Line.js';
import axios from "axios";

function App() {
  const [line, setLine] = useState("victoria");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/line/${line}`);
        const data = await response.data.transformedData
        setData(data);
        
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [line]);

  return (

      <div className="App">
        <h1>Welcome!</h1>
        {console.log(data)}
        <Line numDots={16} lineName="Victoria Line" /> 
      </div>

  );
  
}

export default App;
