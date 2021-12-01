const fs = require("fs");
const { parse } = require("path");

function increment(input) {
  var increment = 0;
  var array = input.split("\n");
  for (var i = 0; i < array.length - 1; i++) {
    if (parseInt(array[i]) < parseInt(array[i + 1])) {
      increment += 1;
    }
  }
  return increment;
}

function triples(input) {
  count = 0;
  var array = input.split("\n");
  valor = parseInt(array[0]) + parseInt(array[1]) + parseInt(array[2]);
  for (var i = 1; i < array.length - 2; i++) {
    var temp =
      parseInt(array[i]) + parseInt(array[i + 1]) + parseInt(array[i + 2]);
    if (temp > valor) {
      count++;
    }
    valor = temp;
  }
  return count;
}

input = fs.readFileSync("input.txt", "utf8");
console.log("The correct result for question one is:", increment(input));
console.log("The correct result for question two is:", triples(input));
