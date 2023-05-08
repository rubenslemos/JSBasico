/* 
  Declaração de função (function hoisting) nesse tipo de declaração 
  a mesma é elevada para o topo do código, ou seja, ela pode ser 
  chamada mesmo antes de sua declaração no código; 
*/

function falaOi(){
  console.log('Oi. Sou uma função e comecei minha caminhada me declarando com function.')
};

/* 
  First-class objects (Objetos de primeira classe) - podem ser tratadas
  como dados ou seja podemos jogar uma função como resultado de uma 
  constante ou variável
*/

 const souUmDado = function (){
  console.log('Resolvi virar um dado e parar dentro de uma variável e passar meu nome a ela.');
 };

/* 
  Podemos por uma função receber outra como parâmetro 
*/

 function executaFunc(funcA, funcB, funcC, funcD, funcE, funcF){
  return funcA, funcB, funcC, funcD, funcE, funcF;
 };
 
/* 
 Arrow function - são declarações de função mais novas implementadas 
 com o ECMA6 como as com a expressão function e se divergem no uso do
 this. mas isso será estudado mais a frente. 
 Outra diferença é que as arrow functions não podem ser chamadas antes 
 de sua inicialização como ocorre com as funções declaradas com a palavra function
*/
const funcArrow = () => {
  console.log('Estou moderna agora, troquei a palavra function pelo => (arrow function).');
};

/* 
  Podemos declarar funções como atributos de um objeto, funções declaradas 
  dentro de um objeto também não podem ser invocadas antes de sua inicialização 
  mesmo declaradas com function
*/
const obj = {
  falar: () => {
    console.log('Continuando meu passeio, vim como arrow pra dentro de um objeto.');
  },
  falando() {
    console.log('resolvi remover minha arrow, pois também posso ser declarada assim, sem nada,')
  },
  tagarela: function () {
    console.log('ou ainda assim com a palavra function novamente, para matar saudades.Nossa Estou muito tagarela.')
  }
};

executaFunc(falaOi(), souUmDado(), funcArrow(), obj.falar(), obj.falando(), obj.tagarela());