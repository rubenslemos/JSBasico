/* 
  forEach está disponível apenas dentro de um array e apenas fara iteração nele
*/
const numerais = [10, 20, 30, 40, 50, 60, 70, 80, 90] ;
//iterando com for of
for (let i of numerais) {
  console.log(i);
}
//iterando com forEach
numerais.forEach(valor => console.log(`Valor: ${valor}`));

//simulando reduce com forEach
let total = 0;
numerais.forEach(valor => total += valor);
console.log(total);
