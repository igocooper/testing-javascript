const chalk = require('chalk');
let getWinner = require('../utils/get-winner');

const originalWinner = getWinner;
getWinner = (p1, p2) => p2; 


console.log(getWinner('Oleg', "Dima"));
console.log(getWinner('Oleg', "Dima"));
console.log(getWinner('Oleg', "Dima"));
console.log(getWinner('Oleg', "Dima"));
console.log(getWinner('Oleg', "Dima"));

getWinner = originalWinner;
console.log(chalk.yellow('_________________'));
console.log(chalk.yellow('___📦unmocked___'));
console.log(chalk.yellow('_________________\n'));

console.log(getWinner('Oleg', "Dima"));
console.log(getWinner('Oleg', "Dima"));
console.log(getWinner('Oleg', "Dima"));
console.log(getWinner('Oleg', "Dima"));
console.log(getWinner('Oleg', "Dima"));

