import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [line, setLine] = useState("victoria");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('FETCHING API DATA')
        const response = await axios.get(`http://localhost:8080/line/${line}`);
        const data = await response.data.transformedData
        setData(data);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    
    const intervalId = setInterval(() => {
      fetchData();
    }, 30000);

    return () => clearInterval(intervalId);
  }, [line]);

  useEffect(() => {
    const checkExpectedArrival = () => {
      console.log('CHECK FOR TIME MATCH')
      if (data) {
        const now = new Date();
        data.forEach((obj) => {
          const [hours, minutes, seconds] = obj.expectedArrival.split(':');
          const expectedArrival = new Date();
          expectedArrival.setHours(hours);
          expectedArrival.setMinutes(minutes);
          expectedArrival.setSeconds(seconds);
          if (expectedArrival.getTime() === now.getTime()) {
            console.log(obj);
          }
        });
      }
    };

    const intervalId = setInterval(() => {
      checkExpectedArrival();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [data]);
  
  return (
    <div className="App">
      <h1>Welcome!</h1>
      {console.log(data)}
    </div>
  );
}

export default App;
