const randomIntFromInterval = (min,max) => Math.floor(Math.random()*(max-min+1)+min);

const getWinner = (p1, p2) => {
  const random = randomIntFromInterval(0,10);
  return random <= 5 ? p1 : p2;
} 

module.exports = getWinner;