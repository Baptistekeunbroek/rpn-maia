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

  test("test two operation", () => {
    const res = getSolution("4 2 + 3 -");
    expect(res).toEqual(3);
  });

  test("test empty", () => {
    expect(() => getSolution(" ")).toThrow(TypeError);
  });

  test("test sqrt", () => {
    const res = getSolution("9 sqrt");
    expect(res).toEqual(3);
  });

  test("test max", () => {
    const res = getSolution("12 10 14 9 max");
    expect(res).toEqual(14);
  });

  test("test addition float", () => {
    const res = getSolution("42.5 20.5 +");
    expect(res).toEqual(63);
  });
});
