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

  it("should fetch line data successfully", async () => {
    const mockResponse = {
      data: [
        { id: "1", name: "Train A" },
        { id: "2", name: "Train B" },
      ],
    };
    axios.get.mockResolvedValue(mockResponse);

    await getLineData();

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(mockResponse);
    expect(errorSpy).not.toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledTimes(1);
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
