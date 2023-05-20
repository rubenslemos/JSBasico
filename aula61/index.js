/* 
  Reduce é mais utilizado para reduzir o array a apenas um elemento, podemos 
  fazer os papeis de filter e map com o reduce mas não é o mais recomendável.
  Sua função de callback é um pouco diferente da de map e filter, ela possui um 
  parâmetro a mais, o qual se é declarado em primeiro lugar, os outros parâmetros
  são os mesmos e na mesma ordem de filter e map. O acumulador pode receber um 
  valor inicial,e é declarado após a função callback separado dela por virgula.
*/
const numos = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 77];
const total = numos.reduce((acumulador, valor)=> acumulador+=valor);
console.log(total)
const pares = numos.reduce((acumulador, valor)=>{ 
  if(valor % 2 === 0) acumulador.push(valor);
  return acumulador;
  }, []);
console.log(pares);
const dobro = numos.reduce((acumulador, valor)=> {
  acumulador.push(valor*2);
  return acumulador;
}, []);
console.log(`Dobro: ${dobro}`);
//um exemplo mais complexo map em array de objetos
const pessoas =[
  {nome: 'Luiz', idade: 62 },
  {nome: 'Maria', idade: 23 },
  {nome: 'Eduardo', idade: 55 },
  {nome: 'Letícia', idade: 10 },
  {nome: 'Rosana', idade: 64 },
  {nome: 'Wallace', idade: 63 },
];
const maisVelha = pessoas.reduce((acumulador, valor, indice) => {
  acumulador.idade >= valor.idade ? acumulador = acumulador : acumulador = valor;
  return acumulador;
})
console.log(maisVelha);