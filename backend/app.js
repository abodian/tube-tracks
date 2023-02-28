const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();
const axios = require("axios");
const PORT = process.env.PORT || 3030; //required for Render

// setup for receiving JSON
app.use(express.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// middleware function to make TFL API requests

async function getLineData() {
  try {
    const response = await axios.get(
      "https://api.tfl.gov.uk/Line/victoria/Arrivals?app_id=a5a934e75afb4bc6815e8d5ec9cd0633&app_key=3f65cf90ca3d4e748dc28439c75e8686"
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

getLineData();

//required for render
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`); 
});
