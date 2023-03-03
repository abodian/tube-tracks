import React, { useState, useEffect } from "react";
import AudioEngine from "../audioEngine/AudioEngine";
import Homepage from "../homepage/Homepage";
import Line from "./Line"
import axios from "axios";
import "./App.css";
import Tracklist from "../trackList/Tracklist";

function App() {
  const [lineData, setLineData] = useState([]);
  const [victoriaCheckbox, setVictoriaCheckbox] = useState(false);
  const [jubileeCheckbox, setJubileeCheckbox] = useState(false);
  const [centralCheckbox, setCentralCheckbox] = useState(false);
  const [metropolitanCheckbox, setmetropolitanCheckbox] = useState(false);
  const [northernCheckbox, setNorthernCheckbox] = useState(false);
  const [bakerlooCheckbox, setBakerlooCheckbox] = useState(false);
  const [piccadillyCheckbox, setPiccadillyCheckbox] = useState(false);
  const [districtCheckbox, setDistrictCheckbox] = useState(false);

  const victoriaCheckboxChange = (isChecked) => {
    setVictoriaCheckbox(isChecked);
  };

  const jubileeCheckboxChange = (isChecked) => {
    setJubileeCheckbox(isChecked);
  };
 
  const centralCheckboxChange = (isChecked) => {
    setCentralCheckbox(isChecked);
  };

  const metropolitanCheckboxChange = (isChecked) => {
    setmetropolitanCheckbox(isChecked);
  };  

  const northernCheckboxChange = (isChecked) => {
    setNorthernCheckbox(isChecked);
  };

  const bakerlooCheckboxChange = (isChecked) => {
    setBakerlooCheckbox(isChecked);
  };
 
  const piccadillyCheckboxChange = (isChecked) => {
    setPiccadillyCheckbox(isChecked);
  };

  const districtCheckboxChange = (isChecked) => {
    setDistrictCheckbox(isChecked);
  }; 



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
    <>
    <div className="App">
      <Homepage />
      <Tracklist />
      <AudioEngine lineData={lineData}></AudioEngine>
    </div>
    <div>
    <Tracklist label="Victoria" onCheckboxChange={victoriaCheckboxChange} />
    {victoriaCheckbox && <Line data={lineData} />}
    <Tracklist label="Jubilee" onCheckboxChange={jubileeCheckboxChange} />
      {jubileeCheckbox && <Line data={lineData} />}
    <Tracklist label="Central" onCheckboxChange={centralCheckboxChange} />
      {centralCheckbox && <Line data={lineData} />}
    <Tracklist label="Metropolitan" onCheckboxChange={metropolitanCheckboxChange} />
      {metropolitanCheckbox && <Line data={lineData} />}
    <Tracklist label="Northern" onCheckboxChange={northernCheckboxChange} />
      {northernCheckbox && <Line data={lineData} />}
    <Tracklist label="Bakerloo" onCheckboxChange={bakerlooCheckboxChange} />
      {bakerlooCheckbox && <Line data={lineData} />}
    <Tracklist label="Piccadilly" onCheckboxChange={piccadillyCheckboxChange} />
      {piccadillyCheckbox && <Line data={lineData} />}
    <Tracklist label="District" onCheckboxChange={districtCheckboxChange} />
      {districtCheckbox && <Line data={lineData} />}
  </div>
  </>
  );
}

export default App;
