const fs = require("fs");
const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const callbackFn = (input) => {
  const numbers = input[1].split(" ").map(Number);
  const maxNumber = Math.max(...numbers);
  const minNumber = Math.min(...numbers);

  console.log(maxNumber * minNumber);
};

const solve = (input) => (fn) => fn(input);

solve(input)(callbackFn);
