// console.log(process.argv);
// array = [1,2,3,4,5,6,7,8,9,10]
const sum = 0
for (let i = 2; i < process.argv.length; i++){
    sum += Number(process.argv[i])
}
console.log(sum)