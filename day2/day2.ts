const fs = require("fs");

const input: Array<String> = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n");
var x = 0;
var y = 0;
var newY = 0;
var aim = 0;
input.forEach((line) => {
  var linha = line.split(" ") as Array<String>;
  var valor = parseInt(linha[1].toString());

  if (linha[0] == "forward") {
    x += valor;
    newY += aim * valor;
  }
  if (linha[0] == "up") {
    y -= valor;
    aim -= valor;
  }
  if (linha[0] == "down") {
    y += valor;
    aim += valor;
  }
});
var result = x * y;
var result2 = x * newY;

console.log("Resposta 1: ", result);
console.log("Resposta 2: ", result2);
