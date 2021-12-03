const fs = require("fs");

const puzzle: Array<String> = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n");

var zero = 0;
var um = 0;
var gamma: Array<number> = [];
var epsilon: Array<number> = [];

for (var i = 0; i < puzzle[0].length; i++) {
  puzzle.forEach((element) => {
    if (element[i] == "0") {
      zero++;
    }
    if (element[i] == "1") {
      um++;
    }
  });
  if (zero < um) {
    gamma[i] = 1;
    epsilon[i] = 0;
  } else {
    gamma[i] = 0;
    epsilon[i] = 1;
  }
  zero = 0;
  um = 0;
}
console.log(
  "Part 1: ",
  parseInt(gamma.join(""), 2) * parseInt(epsilon.join(""), 2)
);
