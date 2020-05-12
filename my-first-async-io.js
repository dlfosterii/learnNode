const fs = require('fs');
const file = process.argv[2];

function callback (err, data) {
    if (err){
        console.log('Your error is:' + err);
        return;
    }
    const dataToString = data.toString();
    const lineTotal = (dataToString.split('\n').length) - 1;
    console.log(lineTotal);

}  
fs.readFile(file, callback)
console.log('I come after readfile')
