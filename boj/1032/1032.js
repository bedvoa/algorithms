const fs = require("fs");
const input = fs.readFileSync("./stdin").toString().trim();

const solve = (input) => {
  const lines = input.split("\n");
  const count = ~~lines[0];
  const words = lines.slice(1);

  let pattern = words[0];

  for (let i = 1; i < count; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== words[i][j]) {
        pattern = pattern.substring(0, j) + "?" + pattern.substring(j + 1);
      }
    }
  }
};

solve(input);
