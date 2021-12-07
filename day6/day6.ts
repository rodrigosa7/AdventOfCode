const fs = require("fs");

const puzzle: Array<number> = fs
  .readFileSync("input.txt")
  .toString()
  .split(",")
  .map(Number);

const solver = (input: Array<number>, days: number) => {
  var fish: Array<number> = input;

  for (var i = 0; i < days; i++) {
    const length = fish.length;
    for (var j = 0; j < length; j++) {
      if (fish[j] === 0) {
        fish.push(8);
        fish[j] = 6;
      } else {
        fish[j]--;
      }
    }
  }
  return fish.length;
};

const solver2 = (input: Array<number>, days: number) => {
  const fish = new Array(9).fill(0);

  //Guardar os timers de cada peixe no novo array
  input.forEach((x) => fish[x]++);

  for (let i = 0; i < days; i++) {
    const temp = fish[0];
    fish[0] = fish[1];
    fish[1] = fish[2];
    fish[2] = fish[3];
    fish[3] = fish[4];
    fish[4] = fish[5];
    fish[5] = fish[6];
    fish[6] = fish[7] + temp;
    fish[7] = fish[8];
    fish[8] = temp;
  }

  return fish.reduce((a, b) => a + b);
};

//console.log("Result 1: ", solver(puzzle, 80));
//console.log("Result 2: ", solver(puzzle, 256));
console.log("Result 2: ", solver2(puzzle, 256));
