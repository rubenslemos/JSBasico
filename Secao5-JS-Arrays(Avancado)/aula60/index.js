/* 
  O map tem as funcionalidades semelhantes as do filter diferenciando-se no 
  retorno pois este é um array do mesmo tamanho do original com as modificações 
  passadas a ele via a função de callback recebida em seus parâmetros
*/
const numos = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 77];
const dobro = numos.map( valor=> valor*2 );
console.log(`Original: ${numos} / Dobrada: ${dobro}`);
//um exemplo mais complexo map em array de objetos
const pessoas =[
  {nome: 'Luiz', idade: 62 },
  {nome: 'Maria', idade: 23 },
  {nome: 'Eduardo', idade: 55 },
  {nome: 'Letícia', idade: 19 },
  {nome: 'Robson', idade: 32 },
  {nome: 'Wallace', idade: 47 },
];
const nome = pessoas.map( obj => obj.nome);
console.log(nome);
const idade = pessoas.map( obj => ({idade: obj.idade}));
console.log(idade);
const id = pessoas.map( obj => {
  const id = Math.floor(Math.random() * (10 - 2 + 1)) + 2
  return {
    id: id, 
    nome: obj.nome,
    idade: obj.idade
  }
})
console.log(id);
//id com indice
const indice = pessoas.map( (obj, id) =>({
  id: id+1,
  nome: obj.nome,
  idade: obj.idade
}));
console.log(pessoas)
console.log(indice)