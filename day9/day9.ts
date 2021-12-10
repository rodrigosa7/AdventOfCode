import fs from "fs";

const puzzle = fs.readFileSync("input.txt", "utf8").split("\n");
let matrix = puzzle.map((line) => Array.from(line).map(Number));

let candidates: Array<number> = [];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (i == 0 && j == 0) {
      if (matrix[i][j] < matrix[i + 1][j] && matrix[i][j] < matrix[i][j + 1]) {
        candidates.push(matrix[i][j]);
      }
    }
    if (i == matrix.length - 1 && j == 0) {
      if (matrix[i][j] < matrix[i - 1][j] && matrix[i][j] < matrix[i][j + 1]) {
        candidates.push(matrix[i][j]);
      }
    }
    if (i == matrix.length - 1 && j == matrix[i].length - 1) {
      if (matrix[i][j] < matrix[i - 1][j] && matrix[i][j] < matrix[i][j - 1]) {
        candidates.push(matrix[i][j]);
      }
    }
    if (i == 0 && j > 0 && j < matrix[i].length - 1) {
      if (
        matrix[i][j] < matrix[i + 1][j] &&
        matrix[i][j] < matrix[i][j - 1] &&
        matrix[i][j] < matrix[i][j + 1]
      ) {
        candidates.push(matrix[i][j]);
      }
    }
    if (i == matrix.length - 1 && j > 0 && j < matrix[i].length - 1) {
      if (
        matrix[i][j] < matrix[i - 1][j] &&
        matrix[i][j] < matrix[i][j - 1] &&
        matrix[i][j] < matrix[i][j + 1]
      ) {
        candidates.push(matrix[i][j]);
      }
    }
    if (j == 0 && i > 0 && i < matrix.length - 1) {
      if (
        matrix[i][j] < matrix[i - 1][j] &&
        matrix[i][j] < matrix[i + 1][j] &&
        matrix[i][j] < matrix[i][j + 1]
      ) {
        candidates.push(matrix[i][j]);
      }
    }
    if (j == matrix[i].length - 1 && i > 0 && i < matrix.length - 1) {
      if (
        matrix[i][j] < matrix[i - 1][j] &&
        matrix[i][j] < matrix[i + 1][j] &&
        matrix[i][j] < matrix[i][j - 1]
      ) {
        candidates.push(matrix[i][j]);
      }
    }
    if (i > 0 && i < matrix.length - 1 && j > 0 && j < matrix[i].length - 1) {
      if (
        matrix[i][j] < matrix[i - 1][j] &&
        matrix[i][j] < matrix[i + 1][j] &&
        matrix[i][j] < matrix[i][j - 1] &&
        matrix[i][j] < matrix[i][j + 1]
      ) {
        candidates.push(matrix[i][j]);
      }
    }
  }
}
console.log(candidates.map((n) => n + 1).reduce((a, b) => a + b));
