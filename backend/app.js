const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();
const axios = require("axios");

// setup for receiving JSON
app.use(express.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// middleware function to make TFL API requests

async function getLineData(line) {
  try {
    const response = await axios.get(
      `https://api.tfl.gov.uk/Line/${line}/Arrivals?app_id=a5a934e75afb4bc6815e8d5ec9cd0633&app_key=3f65cf90ca3d4e748dc28439c75e8686`
    );
    const responseData = await response.data;
    const transformedData = responseData
      .filter((item) => item.currentLocation === "At Platform")
      .map(
        ({ id, stationName, currentLocation, timestamp, expectedArrival }) => ({
          id,
          stationName,
          currentLocation,
          timestamp: new Date(timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          }),
          expectedArrival: new Date(expectedArrival).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          }),
        })
      );
    console.log(transformedData);
    console.log(transformedData.length);
    return transformedData;
  } catch (error) {
    console.error("An error has occured when making the get request to TFL");
  }
}

getLineData("victoria");

module.exports = getLineData;
