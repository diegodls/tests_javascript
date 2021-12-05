const LOTOFACIL_MIN_QUANT_CARD_NUM = 1;
const LOTOFACIL_MAX_QUANT_CARD_NUM = 25;

const arr1 = [
  22,
  1,
  "2",
  "a",
  4.5,
  6,
  7,
  " ",
  67,
  "?",
  67,
  10,
  10,
  10,
  22,
  25,
  "#",
  "@",
  "$",
  "%",
  "&",
  "*",
  "+",
  "-",
  "=",
  67,
  6,
  ".",
  ",",
  "              ",
];
const arr2 = [1.2, "ASD", "a", 4.5, 6, 7, " ", "67", 10, 22, 25];

function cleanArrNumber(numbers) {
  /**
   * função para remover erros dos arrays, tais como numeros repetidos, maiores que 25, letras e caracteres.
   * ! Fazer um regex para remover os caracteres de espaço e TAB (/n,/b).
   * */

  let numberArray = [];
  let uniqueNumbers = [];

  if (Array.isArray(numbers)) {
    numberArray = numbers;
  } else {
    numberArray = numbers.split(" ").map(Number);
  }

  if (numberArray.length > 0) {
    uniqueNumbers = numberArray.reduce((a, b) => {
      if (
        a.indexOf(b) < 0 &&
        b >= LOTOFACIL_MIN_QUANT_CARD_NUM &&
        b <= LOTOFACIL_MAX_QUANT_CARD_NUM &&
        Number.isInteger(b)
      )
        a.push(b);
      return a;
    }, []);
  }
  return uniqueNumbers;
}

const arrClean1 = cleanArrNumber(arr1);
const arrClean2 = cleanArrNumber(arr2);

//Simplesmente:
const arrRegex = arr1.filter(Number.isInteger);

console.log("arrClean1");
console.log(arrClean1);
console.log("arrClean2");
console.log(arrClean2);
console.log("arrRegex");
console.log(arrRegex);
