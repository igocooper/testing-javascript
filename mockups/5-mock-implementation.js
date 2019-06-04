const expect = require("./2-expect");
let getWinner = require("../utils/get-winner");

function fn(implFn) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return implFn(...args);
  };
  mockFn.mock = {calls: []};
  return mockFn;
};

const originalWinner = getWinner;
getWinner = fn((p1, p2) => p2);

expect(getWinner("Oleg", "Dima")).toBe("Dima");
expect(getWinner("Oleg", "Dima")).toBe("Dima");

expect(getWinner.mock.calls).toEqual([
  ["Oleg", "Dima"],["Oleg", "Dima"]
]);

getWinner = originalWinner;
