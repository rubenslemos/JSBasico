/* 
   - Retorne a soma do dobro de todos os pares
   - Filtrar pares
   - Dobrar os valores
   - Reduzir (somar tudo)
*/
const numos = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 77];
const somaDobroPares = numos
  .filter(valor => valor % 2 ===0)
  .map(obj => obj * 2)
  .reduce((acumulador, obj)=> acumulador += obj
);
console.log(`Soma do dobro dos pares: ${somaDobroPares}`);
