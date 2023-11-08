const getSolution = require("./solution");

describe("getting solutions", () => {
  test("it parses single number", () => {
    const res = getSolution("42");
    expect(res).toEqual(42);
  });

  test("test addition", () => {
    const res = getSolution("42 20 +");
    expect(res).toEqual(62);
  });

  test("test soustraction", () => {
    const res = getSolution("42 20 -");
    expect(res).toEqual(22);
  });

  test("test multiplication", () => {
    const res = getSolution("42 20 *");
    expect(res).toEqual(840);
  });

  test("test division", () => {
    const res = getSolution("42 20 /");
    expect(res).toEqual(2.1);
  });
});
