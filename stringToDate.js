//SHIFT+ALT+N (default = CTRL+ALT+N)
const game = [
  {
    concurso: 2387,
    data: "02/12/2021",
    numeros: [2, 4, 5, 8, 9, 10, 12, 16, 17, 19, 20, 21, 22, 24, 25],
  },
];

const monthsBR = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const monthsEN = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const stringDate = "02/12/2021";

let dateSplit = stringDate.split("/").map(Number);
//[0] = day, [1] = month, [2] = year

//FROM: 02/12/2021 TO: 2021-12-02
//FROM: DD/MM/YYYY TO: YYYY-MM-DD
//javascript counts months from 0 to 11, so we need to decrease 1 to the month
let dateJoin = new Date(dateSplit[2], dateSplit[1] - 1, dateSplit[0]);
//[2] = year, [1] = month, [0] = day

let dateTest = dateJoin.toDateString();

console.log("stringDate");
console.log(typeof stringDate);
console.log(stringDate);

console.log("----------------------------");

console.log("dateJoin");
console.log(typeof dateJoin);
console.log(dateJoin);
console.log(dateJoin.toDateString());

console.log("----------------------------");
console.log(`Day: ${dateJoin.getDate()}`);
console.log(
  `Month: ${dateJoin.getMonth() + 1} - ${monthsEN[dateJoin.getMonth()]}`
);
console.log(`Year: ${dateJoin.getFullYear()}`);

