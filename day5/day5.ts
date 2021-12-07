const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const input = data.split(",").map(Number);
  console.log("not done yet");
});
