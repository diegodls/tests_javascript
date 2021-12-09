const arrNumbers = Array.from({ length: 100 }, (_, i) => i + 1);

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
  }

  return numbers.filter(isPrime);
}

console.log(`Média: ${averageNumbers(arrNumbers)}`);
console.log(`Números primos: ${primeNumbers(arrNumbers)}`);