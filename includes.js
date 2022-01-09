const includesArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const includesArr2 = [1, 2, 3, 11, 12, 13, 14, 15, 16, 17];

const includesFinal = includesArr1.filter((number) => includesArr2.includes(number))

console.log("");
console.log("includesFinal:");
console.log(includesFinal);
