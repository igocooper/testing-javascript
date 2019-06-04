const utils = require("../utils");

let result = utils.sum(2, 3);
let expected = 5;

if (result !== expected) {
  throw new Error(`Result is not equal ${expected}`);
}

result = utils.substract(3, 1);
expected = 4;

if (result !== expected) {
  throw new Error(`Result is not equal ${expected}`);
}
