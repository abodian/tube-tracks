const axios = require("axios");

const TflApiController = {
  LineIndex: async (req, res) => {
    try {
      const line = req.params.line;
      const response = await axios.get(
        `https://api.tfl.gov.uk/Line/${line}/Arrivals?app_id=a5a934e75afb4bc6815e8d5ec9cd0633&app_key=3f65cf90ca3d4e748dc28439c75e8686`
      );
      const responseData = await response.data;
      const transformedData = responseData
        .filter((item) => {
          const expectedArrivalTime = new Date(item.expectedArrival);
          const currentTime = new Date();
          return (
            expectedArrivalTime.getTime() >= currentTime.getTime() &&
            expectedArrivalTime.getTime() <= currentTime.getTime() + 180000
          );
        })
        .map(
          ({
            id,
            expectedArrival,
            lineName,
            stationName,
            currentLocation,
            timestamp,
          }) => ({
            expectedArrival: new Date(expectedArrival).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false,
            }),
            id,
            stationName,
            lineName,
            currentLocation,
            timestamp: new Date(timestamp).toLocaleTimeString([], {
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
