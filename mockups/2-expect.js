// const utils = require("../utils");

const expect = actual => {
  return {
    toBe(expected) {
      if (expected !== actual) {
        throw new Error(`${actual} is not equal ${expected}`);
      }
    },
    toEqual(expected) {
      const strExpected = JSON.stringify(expected);
      const strActual = JSON.stringify(actual);
      if (strActual !== strExpected) {
        throw new Error(`${strActual} is not equal ${strExpected}`);
      }
    },
  };
};

// expect(utils.sum(3, 5)).toBe(8);
// expect(utils.substract(5, 3)).toBe(21);


module.exports = expect;
