// console.log('linha0')
// console.log('linha1')
// console.log('linha2')
// console.log('linha3')
// console.log('linha4')
// console.log('linha5')
// for (let i = 0; i <= 10; i++) {
//   const impar = i %2 !==0;
//   console.log(i, impar===true ? 'impar' : '  par');
// }
const frutas =['Maça', 'Banana', 'Uva', 'Abacaxi']
console.log(`Frutas antes: ${frutas}`);
const index = frutas.length-1;
let fruta = [];
for (let i=0; i < frutas.length; i++) {
  fruta[i] = frutas[index-i];
  frutas[i] = fruta[i];
}
console.log(`Frutas depois: ${frutas}`);