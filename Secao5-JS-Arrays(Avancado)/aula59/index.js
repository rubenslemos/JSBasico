/* 
  Uma das mais importantes funcionalidades de usar em um array, o filter filtra
  para um outro array os valores de acordo com a condição a ele passada, 
  retornando sempre um array de mesmo tamanho ou menor que o array original 
*/
const numos = [50, 80, 2, 3, 5, 8, 7, 15, 22, 77];
const maiores = numos.filter(valores => valores > 10)
//mostrando que recebemos os outros parâmetros dentro do filter 
const menores = numos.filter((valores, indice, array) => {
  console.log(`Array: ${array}, Indice ${indice}, valor: ${valores}`);
  return valores < 10;
});
console.log(`Maiores que 10: ${maiores}, Menores que 10: ${menores}`);
//um exemplo mais complexo filtrando array de objetos
const pessoas =[
  {nome: 'Luiz', idade: 62 },
  {nome: 'Maria', idade: 23 },
  {nome: 'Eduardo', idade: 55 },
  {nome: 'Letícia', idade: 19 },
  {nome: 'Robson', idade: 32 },
  {nome: 'Wallace', idade: 47 },
];
const nomesGrandes = pessoas.filter(obj => obj.nome.length <= 5);
console.log(nomesGrandes);
const idosos = pessoas.filter(obj => obj.idade > 50);
console.log(idosos);
const terminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(terminaComA);