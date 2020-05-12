const fs = require('fs');
const file = process.argv[2];
const readFileOutput = fs.readFileSync(file)
const string = readFileOutput.toString()
const lineTotal = (string.split('\n').length) - 1

console.log(lineTotal)
