const numberOfGoodPaths = require("./index");

describe("best paths", () => {
  it("should pass test case 1", () => {
    let paths = numberOfGoodPaths(
      [1, 3, 2, 1, 3],
      [
        [0, 1],
        [0, 2],
        [2, 3],
        [2, 4],
      ]
    );
    expect(paths).toBe(6);
  });

  it("should pass test case 2", () => {
    let paths = numberOfGoodPaths(
      [1, 1, 2, 2, 3],
      [
        [0, 1],
        [1, 2],
        [2, 3],
        [2, 4],
      ]
    );
    expect(paths).toBe(7);
  });

  it("should pass test case 2", () => {
    let paths = numberOfGoodPaths([1], []);
    expect(paths).toBe(1);
  });
});
