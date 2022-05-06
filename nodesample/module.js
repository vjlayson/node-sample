const compute = require("./nodesample");
const fs = require("fs");
const x = 10
const y = 5

const data = fs.readFileSync("message.txt");

// console.log('addition: ' + compute.add(x,y));

// console.log('subtraction: ' + compute.subtract(x,y));

// console.log('multiplication: ' + compute.multiply(x,y));

// console.log('division: ' + compute.divide(x,y));

console.log(data.toString());
console.log("program ended");

