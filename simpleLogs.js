const stringA = "A,D";
const arr1 = stringA
  .split(",")
  .map(Number)
  .filter(Number.isInteger)
  .filter(Boolean);

console.log(`stringA.length: ${stringA.length}`);
console.log(stringA);
console.log(`arr1.length: ${arr1.length}`);
console.log(arr1);

const dateTest = new Date("2020-01-01");

console.log("getTime()");
console.log(dateTest.getTime());

console.log(".getDate()");
console.log(dateTest.getDate());

