const fs = require("fs");

var puzzle: Array<number> = [];
fs.readFile("input.txt", "utf8", (err: string, data: string) => {
  if (err) {
    console.log(err);
  }
  puzzle = data.split(",").map(Number);

  const mid = Math.floor(puzzle.length / 2),
    nums = [...puzzle].sort((a, b) => a - b);
  var median =
    puzzle.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  var gas = 0;
  puzzle.forEach((element) => {
    if (element != median) {
      gas += Math.abs(element - median);
    }
  });
  var part2 = 0;
  var acc = 1;

  var media = Math.floor(
    puzzle.reduce((acc, curr) => acc + curr, 0) / puzzle.length
  );

  part2 = puzzle.reduce((acc, val) => {
    const distance = Math.abs(val - media);
    const consumption = (distance * (distance + 1)) / 2;

    return acc + consumption;
  }, 0);
  console.info("PART2", part2);
});
