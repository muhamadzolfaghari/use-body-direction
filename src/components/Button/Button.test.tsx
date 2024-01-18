function checkAgeRestriction(age: number) {
  if (age < 18) {
    console.error("under legal age");
  } else {
    console.log("is permitted")
  }
}

describe("check age restriction", () => {
  beforeEach(() => {
    jest.spyOn(global.console, "log").mockImplementation(() => {});
    jest.spyOn(global.console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should log is permitted", () => {
    checkAgeRestriction(20);
    expect(console.log).toHaveBeenCalledWith("is permitted");
  });

  it("should log error", () => {
    checkAgeRestriction(16);
    expect(console.error).toHaveBeenCalledWith("under legal age");
  });
});