const axios = require("axios");
const API_ID = process.env.REACT_APP_API_ID
const API_KEY = process.env.REACT_APP_API_KEY

const TflApiController = {
  LineIndex: async (req, res) => {
    try {
      const line = req.params.line;
      const response = await axios.get(
        `https://api.tfl.gov.uk/Line/${line}/Arrivals?app_id=${API_ID}app_key=${API_KEY}`
      );
      const responseData = await response.data;
      const transformedData = responseData
        // .filter((item) => item.currentLocation === "At Platform")
        .map(
          ({
            id,
            stationName,
            currentLocation,
            timestamp,
            expectedArrival,
          }) => ({
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
      res.status(200).json({ transformedData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = TflApiController;
