const arrNumbers = Array.from({ length: 25 }, (_, i) => i + 1);
const arrNumbersChoose = [1, 2, 5, 6, 7, 8, 9, 10, 12, 15];
const arrNumbersChoose2 = [1, 3, 4, 9, 10, 12, 15, 16, 22, 25];

function averageNumbers(numbers) {
  // função para calcular a média de um array de numeros
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

function primeNumbers(numbers) {
  // função para retornar apenas os numeros primos

  const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return number > 1;
  };

  return numbers.filter(isPrime);
}

function repeatedNumbers(numbers) {
  return arrNumbersChoose2.filter((n) => {
    return numbers.indexOf(n) > -1;
  });
}

function NoRepeatedNumbers(numbers) {
  return arrNumbersChoose2.filter((n) => {
    return numbers.indexOf(n) === -1;
  });
}

console.log(`Média: ${averageNumbers(arrNumbers)}`);
console.log(`Números primos: ${primeNumbers(arrNumbers)}`);
console.log(`Números repetidos: ${repeatedNumbers(arrNumbersChoose)}`);
console.log(`Números não repetidos: ${NoRepeatedNumbers(arrNumbersChoose)}`);
