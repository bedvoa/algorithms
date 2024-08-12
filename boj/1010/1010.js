const fs = require("fs");
const input = fs.readFileSync("./stdin").toString().trim();

const solve = () => {
  const lines = input.split("\n");
  const count = ~~lines[0];
  const testCases = lines.slice(1);

  for (let i = 0; i < count; i++) {
    const [n, m] = testCases[i].split(" ").map(Number);
    console.log(Math.round(combination(m, n)));
  }
};

const combination = (n, k) => {
  return factorial(n) / (factorial(k) * factorial(n - k));
};

const factorial = (number) => {
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
};

solve();
