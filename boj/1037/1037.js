const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solve = (input) => {
  const numbers = input[1].split(" ").map(Number);
  const maxNumber = Math.max(...numbers);
  const minNumber = Math.min(...numbers);

  console.log(maxNumber * minNumber);
};

solve(input);
