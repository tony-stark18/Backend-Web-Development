const fs = require("fs");
setTimeout(() => {
  console.log("Timer 1 finised");
}, 0);
setImmediate(() => console.log("Immediate 1 finised"));

fs.readFile("test-file.txt", () => {
  console.log("I/O finised");
});

console.log("Top level code");