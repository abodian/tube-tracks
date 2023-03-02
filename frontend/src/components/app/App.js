import React, { useState, useEffect } from "react";
import Homepage from "../homepage/Homepage";
import ArrivalData from "../arrivalData/ArrivalData";
import "./App.css";

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
      <ArrivalData line="victoria" noteLength="4n" />
      <ArrivalData line="central" noteLength="2n" />
      <ArrivalData line="jubilee" noteLength="8n" />
      <ArrivalData line="northern" noteLength ="1m" />
    </div>
  );
}

export default App;
