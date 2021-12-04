//SHIFT+ALT+N (default = CTRL+ALT+N)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arrToString = numbers.toString();

let StringToArr = arrToString.split(",").map(Number);

console.log("numbers");
console.log(typeof numbers);
console.log(numbers);

console.log("-----------------------------");

console.log("arrToString");
console.log(typeof arrToString);
console.log(arrToString);

console.log("-----------------------------");

console.log("StringToArr");
console.log(typeof StringToArr);
console.log(StringToArr);
