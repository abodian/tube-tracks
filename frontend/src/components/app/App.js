import React, { useState, useEffect } from "react";
import Homepage from "../homepage/Homepage";
import axios from "axios";
import "./App.css";

function App() {
  // this hook contains and sets the array of train objects and their arrival times etc
  const [lineData, setLineData] = useState([]);

  const fetchData = async () => {
    try {
      // Fetch data for lines
      // We could write some logic here in the future that handles the user interaction of turning lines on and off
      const fetchedData = await fetchLineData("victoria, jubilee, central, metropolitan, northern, bakerloo, piccadilly, district");
  
      // Combine all train line data arrays into one


      setLineData(fetchedData);
      
    } catch (error) {
      console.error(error);
    }
    console.log(lineData)
  };

  // this is what is being called in fetchData. An instance for each line making a request to our backend
  const fetchLineData = async (line) => {
    try {
      console.log('FETCHING API DATA')
      const response = await axios.get(`http://localhost:8080/line/${line}`);
      return response.data.transformedData;

    } catch (error) {
      console.error(error);
    }
  };


  // this is handling how frequently we make the requests to the backend
  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 175000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // this console.logs the array of arrival times when it is updated. Just for dev purposes
  useEffect(() => {
    console.log(lineData);
  }, [lineData]);

  return (
    <div className="App">
      <Homepage lineData={lineData} />
    </div>
  );
}

export default App;
