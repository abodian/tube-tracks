const axios = require("axios");
const getLineData = require("./app.js");

jest.mock("axios");

describe("getLineData", () => {
  let logSpy, errorSpy;
  const jestConsole = console;

  beforeEach(() => {
    global.console = require("console");
    logSpy = jest.spyOn(global.console, "log");
    errorSpy = jest.spyOn(global.console, "error");
  });

  afterEach(() => {
    jest.restoreAllMocks();
    global.console = jestConsole;
  });

  it("should return transformed data", async () => {
    const data = [
      {
        id: "1",
        stationName: "Station A",
        currentLocation: "At Platform",
        timestamp: new Date().toISOString(),
        expectedArrival: new Date().toISOString(),
      },
      {
        id: "2",
        stationName: "Station B",
        currentLocation: "In Service",
        timestamp: new Date().toISOString(),
        expectedArrival: new Date().toISOString(),
      },
    ];

    axios.get.mockResolvedValue({ data });

    const line = "Bakerloo";
    const transformedData = await getLineData(line);

    expect(transformedData).toEqual([
      {
        id: "1",
        stationName: "Station A",
        currentLocation: "At Platform",
        timestamp: new Date(data[0].timestamp).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
        expectedArrival: new Date(data[0].expectedArrival).toLocaleTimeString(
          [],
          {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          }
        ),
      },
    ]);
  });

  it("should throw an error if the request fails", async () => {
    const mockError = "An error has occured when making the get request to TFL";
    axios.get.mockRejectedValue(mockError);

    await getLineData();

    expect(logSpy).not.toHaveBeenCalled();
    expect(errorSpy).toHaveBeenCalledTimes(1);
    expect(errorSpy).toHaveBeenCalledWith(mockError);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
