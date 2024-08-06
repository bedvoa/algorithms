const fs = require("fs");
const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const splitNumber = (input) => input[1].split(" ").map(Number);
const multiplyMaxAndMin = (numbers) =>
  Math.max(...numbers) * Math.min(...numbers);
const solve = (input) => (fn1) => (fn2) => fn2(fn1(input));

console.log(solve(input)(splitNumber)(multiplyMaxAndMin));
