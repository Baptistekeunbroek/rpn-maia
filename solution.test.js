const getSolution = require("./solution");

describe("getting solutions", () => {
  test("it parses single number", () => {
    const res = getSolution("42");
    expect(res).toEqual([42]);
  });
});
