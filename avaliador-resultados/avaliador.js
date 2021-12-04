const mocked = [
  {
    concurso: 2232,
    data: "17/05/2021",
    numeros: [2, 4, 5, 6, 8, 9, 12, 13, 14, 19, 20, 22, 23, 24, 25],
  },
  {
    concurso: 2233,
    data: "18/05/2021",
    numeros: [1, 2, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 20, 21, 25],
  },
  {
    concurso: 2234,
    data: "19/05/2021",
    numeros: [1, 2, 3, 6, 7, 11, 14, 15, 17, 18, 20, 21, 22, 24, 25],
  },
  {
    concurso: 2235,
    data: "20/05/2021",
    numeros: [2, 4, 6, 7, 8, 10, 11, 12, 16, 17, 9, 21, 22, 23, 25],
  },
  {
    concurso: 2236,
    data: "21/05/2021",
    numeros: [2, 3, 4, 5, 8, 9, 10, 11, 12, 17, 18, 19, 21, 22, 24],
  },
  {
    concurso: 2237,
    data: "22/05/2021",
    numeros: [3, 5, 6, 9, 12, 13, 14, 15, 17, 19, 20, 21, 22, 23, 25],
  },
  {
    concurso: 2238,
    data: "24/05/2021",
    numeros: [1, 3, 4, 5, 6, 7, 10, 11, 14, 15, 16, 18, 19, 20, 25],
  },
  {
    concurso: 2239,
    data: "25/05/2021",
    numeros: [1, 2, 5, 6, 7, 10, 13, 14, 15, 16, 17, 20, 22, 23, 24],
  },
  {
    concurso: 2240,
    data: "26/05/2021",
    numeros: [2, 3, 4, 6, 7, 9, 11, 12, 13, 15, 17, 18, 19, 20, 25],
  },
  {
    concurso: 2241,
    data: "27/05/2021",
    numeros: [1, 3, 7, 8, 9, 10, 13, 15, 16, 18, 20, 21, 23, 24, 25],
  },
  {
    concurso: 2242,
    data: "28/05/2021",
    numeros: [3, 4, 5, 8, 9, 10, 11, 12, 16, 17, 19, 20, 21, 22, 25],
  },
  {
    concurso: 2243,
    data: "29/05/2021",
    numeros: [1, 5, 6, 8, 10, 11, 14, 15, 17, 18, 19, 20, 21, 24, 25],
  },
  {
    concurso: 2244,
    data: "31/05/2021",
    numeros: [4, 5, 6, 8, 9, 10, 11, 13, 14, 15, 16, 17, 21, 23, 25],
  },
  {
    concurso: 2245,
    data: "01/06/2021",
    numeros: [2, 5, 6, 7, 8, 13, 14, 16, 17, 18, 21, 22, 23, 24, 25],
  },
  {
    concurso: 2246,
    data: "03/06/2021",
    numeros: [2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 14, 15, 18, 20, 25],
  },
  {
    concurso: 2247,
    data: "04/06/2021",
    numeros: [1, 3, 6, 7, 8, 9, 10, 12, 17, 18, 19, 20, 22, 24, 25],
  },
  {
    concurso: 2248,
    data: "05/06/2021",
    numeros: [1, 2, 3, 6, 7, 8, 10, 11, 12, 13, 14, 16, 17, 23, 25],
  },
  {
    concurso: 2249,
    data: "07/06/2021",
    numeros: [2, 6, 11, 12, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25],
  },
  {
    concurso: 2250,
    data: "08/06/2021",
    numeros: [4, 5, 6, 10, 12, 13, 14, 18, 19, 20, 21, 22, 23, 24, 25],
  },
  {
    concurso: 2251,
    data: "09/06/2021",
    numeros: [2, 4, 5, 7, 9, 12, 13, 14, 15, 18, 19, 21, 22, 23, 24],
  },
  {
    concurso: 2252,
    data: "10/06/2021",
    numeros: [1, 5, 6, 8, 9, 10, 12, 16, 17, 19, 20, 21, 22, 24, 25],
  },
  {
    concurso: 2253,
    data: "11/06/2021",
    numeros: [2, 3, 5, 6, 7, 8, 12, 14, 15, 16, 18, 19, 20, 23, 25],
  },
  {
    concurso: 2254,
    data: "12/06/2021",
    numeros: [2, 3, 5, 6, 7, 8, 10, 12, 13, 14, 19, 20, 21, 24, 25],
  },
  {
    concurso: 2255,
    data: "14/06/2021",
    numeros: [1, 3, 6, 7, 8, 11, 14, 15, 17, 19, 20, 21, 22, 24, 25],
  },
  {
    concurso: 2256,
    data: "15/06/2021",
    numeros: [1, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 15, 20, 23, 24],
  },
  {
    concurso: 2257,
    data: "16/06/2021",
    numeros: [1, 4, 5, 6, 7, 8, 9, 11, 12, 13, 15, 18, 20, 22, 24],
  },
  {
    concurso: 2258,
    data: "17/06/2021",
    numeros: [3, 5, 6, 7, 8, 10, 11, 14, 15, 16, 17, 19, 20, 22, 24],
  },
  {
    concurso: 2259,
    data: "18/06/2021",
    numeros: [5, 6, 7, 8, 9, 10, 14, 16, 18, 19, 20, 22, 23, 24, 25],
  },
  {
    concurso: 2260,
    data: "19/06/2021",
    numeros: [1, 2, 4, 6, 9, 10, 11, 1, 14, 16, 17, 20, 22, 23, 25],
  },
  {
    concurso: 2261,
    data: "21/06/2021",
    numeros: [1, 3, 4, 6, 7, 8, 9, 12, 13, 17, 18, 22, 23, 24, 25],
  },
  {
    concurso: 2262,
    data: "22/06/2021",
    numeros: [2, 3, 46, 7, 8, 9, 10, 11, 19, 20, 21, 22, 24, 25],
  },
  {
    concurso: 2263,
    data: "23/06/2021",
    numeros: [1, 2, 3, 7, 8, 10, 11, 14, 15, 16, 18, 19, 22, 23, 25],
  },
  {
    concurso: 2264,
    data: "24/06/2021",
    numeros: [2, 3, 4, 5, 6, 8, 9, 10, 12, 14, 15, 16, 17, 18, 19],
  },
  {
    concurso: 2265,
    data: "25/06/2021",
    numeros: [2, 4, 5, 7, 9, 10, 12, 13, 14, 15, 16, 18, 19, 20, 22],
  },
  {
    concurso: 2266,
    data: "26/06/2021",
    numeros: [1, 3, 5, 9, 10, 11, 12, 13, 15, 16, 19, 21, 23, 24, 25],
  },
  {
    concurso: 2267,
    data: "28/06/2021",
    numeros: [2, 3, 5, 6, 7, 9, 10, 13, 14, 15, 17, 19, 20, 22, 24],
  },
  {
    concurso: 2268,
    data: "29/06/2021",
    numeros: [1, 3, 8, 10, 11, 12, 14, 15, 18, 19, 20, 21, 23, 24, 25],
  },
  {
    concurso: 2269,
    data: "29/06/2021",
    numeros: [2, 3, 4, 5, 7, 9, 10, 11, 13, 14, 17, 20, 21, 22, 25],
  },
  {
    concurso: 2270,
    data: "01/07/2021",
    numeros: [1, 4, 5, 6, 8, 10, 11, 15, 16, 18, 19, 20, 21, 22, 25],
  },
  {
    concurso: 2271,
    data: "02/07/2021",
    numeros: [2, 3, 5, 6, 7, 8, 10, 11, 16, 17, 18, 19, 21, 23, 24],
  },
  {
    concurso: 2272,
    data: "03/07/2021",
    numeros: [1, 2, 5, 7, 8, 10, 11, 13, 14, 15, 16, 18, 21, 22, 24],
  },
  {
    concurso: 2273,
    data: "05/07/2021",
    numeros: [1, 2, 4, 6, 7, 8, 9, 10, 11, 12, 13, 17, 21, 23, 25],
  },
  {
    concurso: 2274,
    data: "06/07/2021",
    numeros: [2, 3, 4, 6, 8, 9, 10, 12, 16, 17, 19, 20, 22, 23, 24],
  },
  {
    concurso: 2275,
    data: "07/07/2021",
    numeros: [1, 2, 4, 5, 7, 10, 11, 12, 13, 14, 15, 16, 19, 20, 21],
  },
  {
    concurso: 2276,
    data: "08/07/2021",
    numeros: [1, 4, 5, 7, 10, 12, 13, 14, 15, 16, 18, 19, 20, 21],
  },
  {
    concurso: 2277,
    data: "09/07/2021",
    numeros: [2, 3, 5, 10, 11, 12, 13, 14, 15, 17, 18, 21, 22, 23, 24],
  },
  {
    concurso: 2278,
    data: "10/07/2021",
    numeros: [2, 4, 6, 7, 10, 11, 12, 13, 14, 16, 17, 18, 20, 21, 24],
  },
  {
    concurso: 2279,
    data: "12/07/2021",
    numeros: [1, 3, 5, 8, 10, 11, 13, 14, 15, 16, 17, 18, 21, 22, 25],
  },
  {
    concurso: 2280,
    data: "13/07/2021",
    numeros: [2, 3, 4, 7, 9, 12, 16, 18, 19, 20, 21, 22, 23, 24, 25],
  },
  {
    concurso: 2281,
    data: "14/07/2021",
    numeros: [2, 3, 5, 6, 7, 9, 10, 11, 14, 15, 16, 17, 18, 20, 21],
  },
  {
    concurso: 2282,
    data: "15/07/2021",
    numeros: [1, 2, 4, 5, 6, 10, 11, 12, 13, 14, 18, 20, 21, 23, 24],
  },
  {
    concurso: 2283,
    data: "16/07/2021",
    numeros: [1, 2, 5, 7, 9, 10, 11, 15, 17, 18, 19, 20, 22, 23, 25],
  },
  {
    concurso: 2284,
    data: "17/07/2021",
    numeros: [1, 3, 4, 8, 9, 10, 11, 14, 15, 17, 19, 20, 21, 23, 24],
  },
  {
    concurso: 2285,
    data: "19/07/2021",
    numeros: [1, 2, 6, 7, 8, 10, 12, 13, 15, 16, 18, 20, 22, 23, 04],
  },
  {
    concurso: 2286,
    data: "20/07/2021",
    numeros: [2, 3, 6, 8, 11, 12, 13, 15, 16, 17, 20, 22, 23, 24, 25],
  },
  {
    concurso: 2287,
    data: "21/07/2021",
    numeros: [1, 3, 4, 6, 7, 9, 10, 11, 12, 14, 16, 17, 18, 19, 25],
  },
  {
    concurso: 2288,
    data: "22/07/2021",
    numeros: [1, 2, 3, 5, 7, 9, 10, 11, 12, 14, 19, 20, 21, 22, 25],
  },
  {
    concurso: 2289,
    data: "23/07/2021",
    numeros: [1, 2, 5, 7, 8, 10, 12, 14, 15, 16, 17, 19, 20, 22, 25],
  },
  {
    concurso: 2290,
    data: "24/07/2021",
    numeros: [2, 3, 4, 5, 8, 9, 10, 11, 13, 15, 19, 22, 23, 24, 25],
  },
  {
    concurso: 2291,
    data: "26/07/2021",
    numeros: [1, 5, 6, 7, 9, 12, 13, 14, 16, 17, 19, 20, 21, 24, 25],
  },
  {
    concurso: 2292,
    data: "27/07/2021",
    numeros: [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 18, 19, 20, 22, 23, 24],
  },
  {
    concurso: 2293,
    data: "28/07/2021",
    numeros: [1, 2, 4, 5, 8, 9, 11, 12, 13, 16, 18, 19, 20, 21, 22],
  },
  {
    concurso: 2294,
    data: "29/07/2021",
    numeros: [6, 7, 8, 10, 11, 12, 15, 16, 17, 18, 19, 22, 23, 24, 25],
  },
  {
    concurso: 2295,
    data: "30/07/2021",
    numeros: [1, 2, 6, 9, 10, 11, 12, 13, 14, 16, 17, 20, 23, 24, 25],
  },
  {
    concurso: 2296,
    data: "31/07/2021",
    numeros: [2, 3, 4, 8, 9, 10, 12, 14, 15, 16, 18, 21, 22, 23, 24],
  },
  {
    concurso: 2297,
    data: "02/08/2021",
    numeros: [2, 3, 7, 9, 11, 13, 14, 15, 17, 18, 20, 21, 22, 24, 25],
  },
  {
    concurso: 2298,
    data: "03/08/2021",
    numeros: [1, 3, 4, 6, 10, 12, 13, 14, 16, 18, 20, 21, 23, 24, 25],
  },
  {
    concurso: 2299,
    data: "04/08/2021",
    numeros: [1, 3, 5, 7, 8, 9, 11, 12, 14, 15, 16, 20, 21, 23, 25],
  },
  {
    concurso: 2300,
    data: "05/08/2021",
    numeros: [1, 2, 3, 4, 8, 9, 13, 15, 16, 17, 19, 22, 23, 24, 25],
  },
  {
    concurso: 2301,
    data: "06/08/2021",
    numeros: [3, 5, 9, 10, 12, 13, 15, 16, 17, 18, 19, 20, 22, 24, 25],
  },
  {
    concurso: 2302,
    data: "07/08/2021",
    numeros: [3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 16, 17, 18, 20, 21],
  },
  {
    concurso: 2303,
    data: "09/08/2021",
    numeros: [1, 3, 5, 7, 8, 10, 11, 12, 15, 18, 19, 20, 21, 22, 24],
  },
  {
    concurso: 2304,
    data: "10/08/2021",
    numeros: [1, 2, 6, 8, 9, 11, 12, 13, 14, 16, 18, 20, 21, 22, 24],
  },
  {
    concurso: 2305,
    data: "11/08/2021",
    numeros: [1, 5, 7, 8, 10, 11, 14, 16, 17, 18, 19, 22, 23, 24, 25],
  },
  {
    concurso: 2306,
    data: "12/08/2021",
    numeros: [1, 4, 5, 6, 7, 8, 9, 11, 14, 15, 16, 18, 20, 21, 22],
  },
  {
    concurso: 2307,
    data: "13/08/2021",
    numeros: [1, 4, 5, 6, 8, 9, 11, 12, 13, 14, 15, 17, 19, 20, 23],
  },
  {
    concurso: 2308,
    data: "14/08/2021",
    numeros: [1, 2, 3, 4, 6, 10, 15, 17, 18, 19, 20, 22, 23, 24, 25],
  },
  {
    concurso: 2309,
    data: "16/08/2021",
    numeros: [1, 3, 4, 7, 9, 10, 11, 12, 13, 17, 18, 19, 22, 24, 25],
  },
  {
    concurso: 2310,
    data: "17/08/2021",
    numeros: [1, 3, 5, 6, 7, 10, 11, 13, 16, 18, 20, 22, 23, 24, 25],
  },
  {
    concurso: 2311,
    data: "18/08/2021",
    numeros: [1, 3, 4, 5, 9, 10, 12, 13, 14, 15, 18, 19, 20, 21, 25],
  },
  {
    concurso: 2312,
    data: "19/08/2021",
    numeros: [1, 2, 3, 6, 7, 10, 11, 12, 14, 15, 18, 20, 21, 22, 25],
  },
  {
    concurso: 2313,
    data: "20/08/2021",
    numeros: [4, 5, 6, 7, 8, 10, 11, 12, 14, 15, 18, 20, 22, 25],
  },
  {
    concurso: 2314,
    data: "21/08/2021",
    numeros: [1, 2, 7, 8, 9, 11, 13, 14, 15, 17, 19, 20, 23, 24, 25],
  },
  {
    concurso: 2315,
    data: "23/08/2021",
    numeros: [3, 7, 8, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 25],
  },
  {
    concurso: 2316,
    data: "24/08/2021",
    numeros: [2, 3, 4, 5, 6, 9, 10, 13, 14, 15, 16, 17, 19, 24, 25],
  },
  {
    concurso: 2317,
    data: "25/08/2021",
    numeros: [1, 2, 3, 5, 6, 7, 9, 14, 15, 16, 17, 20, 21, 23, 25],
  },
  {
    concurso: 2318,
    data: "26/08/2021",
    numeros: [2, 5, 6, 7, 8, 11, 13, 16, 17, 18, 19, 20, 21, 24, 25],
  },
  {
    concurso: 2319,
    data: "27/08/2021",
    numeros: [2, 3, 8, 12, 13, 14, 15, 16, 17, 19, 21, 22, 23, 24, 25],
  },
  {
    concurso: 2320,
    data: "11/09/2021",
    numeros: [1, 2, 3, 5, 6, 9, 12, 13, 15, 17, 21, 22, 23, 24, 25],
  },
  {
    concurso: 2321,
    data: "13/09/2021",
    numeros: [1, 2, 6, 7, 8, 9, 10, 12, 13, 14, 15, 17, 22, 23, 24],
  },
  {
    concurso: 2322,
    data: "14/09/2021",
    numeros: [1, 2, 5, 6, 7, 11, 12, 13, 14, 16, 18, 21, 22, 23, 24],
  },
  {
    concurso: 2323,
    data: "15/09/2021",
    numeros: [1, 4, 7, 8, 11, 13, 14, 16, 17, 19, 21, 22, 23, 24, 25],
  },
  {
    concurso: 2324,
    data: "16/09/2021",
    numeros: [1, 2, 3, 5, 8, 9, 10, 11, 13, 14, 16, 17, 19, 20, 25],
  },
  {
    concurso: 2325,
    data: "17/09/2021",
    numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 17, 18, 21, 23, 25],
  },
  {
    concurso: 2326,
    data: "18/09/2021",
    numeros: [2, 3, 4, 5, 6, 8, 11, 12, 13, 14, 16, 20, 22, 23, 25],
  },
  {
    concurso: 2327,
    data: "20/09/2021",
    numeros: [1, 2, 3, 4, 6, 7, 8, 11, 13, 15, 17, 19, 20, 21, 25],
  },
  {
    concurso: 2329,
    data: "22/09/2021",
    numeros: [1, 3, 4, 5, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 24],
  },
  {
    concurso: 2330,
    data: "23/09/2021",
    numeros: [2, 4, 5, 8, 10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 23],
  },
  {
    concurso: 2331,
    data: "24/09/2021",
    numeros: [2, 4, 5, 8, 10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 23],
  },
  {
    concurso: 2332,
    data: "25/09/2021",
    numeros: [1, 4, 6, 7, 8, 9, 10, 11, 14, 17, 18, 20, 22, 24, 25],
  },
];

const contagemNumeros = [];
const maisSorteadosOrdenado = [];
const menosSorteadosOrdenado = [];
const quantJogosAnalisados = 100;

const jogosAnalisar = mocked.slice(
  mocked.length - quantJogosAnalisados,
  mocked.length
);

if (quantJogosAnalisados < jogosAnalisar.length) {
  quantJogosAnalisados = jogosAnalisar.length;
}

for (i = 1; i <= 25; i++) {
  contagemNumeros.push({ num: i, quant: 0 });
}

jogosAnalisar.forEach((analisarItem) => {
  contagemNumeros.forEach((contagemNumerosItem, contagemNumerosIndex) => {
    if (analisarItem.numeros.includes(contagemNumerosItem.num)) {
      contagemNumeros[contagemNumerosIndex].quant =
        contagemNumeros[contagemNumerosIndex].quant + 1;
    }
  });
});

contagemNumeros.forEach((item) => console.log(`${item.num} - ${item.quant}`));

contagemNumeros.sort((a, b) => {
  return a.quant - b.quant;
});

contagemNumeros
  .slice(10, 25)
  .forEach((item) => maisSorteadosOrdenado.push(item.num));

contagemNumeros
  .slice(0, 15)
  .forEach((item) => menosSorteadosOrdenado.push(item.num));

console.log("");

console.log(
  `Quantidade de jogos usados: ${jogosAnalisar.length} (${
    jogosAnalisar[0].concurso
  } - ${jogosAnalisar[jogosAnalisar.length - 1].concurso})`
);

maisSorteadosOrdenado.sort((a, b) => {
  return a - b;
});

menosSorteadosOrdenado.sort((a, b) => {
  return a - b;
});

const numerosIguas = maisSorteadosOrdenado.filter((item) =>
  menosSorteadosOrdenado.includes(item)
);

console.log("");

console.log("Mais sorteados:");
console.log(maisSorteadosOrdenado);

console.log("");

console.log("Menos sorteados:");
console.log(menosSorteadosOrdenado);

console.log("");

console.log("Iguais:");
console.log(numerosIguas);

//fazer uma analise do jogo recente comparado com o "ciclo" anterior, ver quais numeros sairam e etc...