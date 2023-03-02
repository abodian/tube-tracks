import React, { useState, useEffect } from "react";
import "./App.css";
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
      <div class="circle"></div> 
      <div class="center">
      <div class="circle pulse orange"></div>
      <div class="circle pulse blue"></div>
      <div class="circle pulse rose"></div>
      <div class="circle pulse green"></div>
      <div class="circle2"></div>

</div>

      {console.log(data)}
    </div>
    
  );
}

export default App;


