const chalk = require("chalk");
const utils = require("../utils");
const expect = require("./2-expect");

const test = (title, callback) => {
  try {
    callback();
    console.log(chalk.green(`✅ ${title} passed`));
  } catch (err) {
    console.error(chalk.red(`❌ ${title} failed`));
    console.error(chalk.red(err));
  }
};

test("Sum", () => {
  expect(utils.sum(3, 5)).toBe(8);
});

test("Substract", () => {
  expect(utils.substract(5, 3)).toBe(21);
});

