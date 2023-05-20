/* 
  O Javascript mantém uma variável arguments nas funções declaradas com function
  isso permite que vc ao chamar a função vc passar argumentos a ela sendo que a 
  mesma não pedindo nenhum, sem dar erro e fazendo-a funcionar normalmente sem 
  passar estes parâmetros a função. A variável arguments é formatada como objeto.
  Esse comportamento permite manipularmos esses valores mesmo sem termos passado
  nenhum parâmetro para a função, conforme o exemplo abaixo
*/
function func(a, b, c, d){
  let total = 0;
  for (let arg of arguments){
    total += arg;
  }
  console.log(total, a, b, c, d);
}
func(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
//resultado da função: 120 1 2 3 4
/*----------------------------------------------------------------------------*/
/* 
Se passarmos parâmetros e não enviarmos todos argumentos ao chamar a função o 
javascript cria as variáveis desses parâmetros e os mantém como undefined
*/
function func2(a, b, c, d){
  console.log(a, b, c, d);
}
func2(1, 2);
//resultado da função: 1 2 undefined undefined
/*----------------------------------------------------------------------------*/
/* 
Uma maneira de contornar caso se queira fazer algum calculo e enviarmos menos
argumentos a função do que a quantidade de parâmetros pedidos é checar o valor
desse argumento na função e setar um valor padrão a ela caso este n seja enviado
*/
function func3(a, b, c, d){
  b = b || 0;
  c = c || 0;
  d = d || 0;
  console.log(`${a} + ${b} + ${c} + ${d} = ${a + b + c + d}`);
}
func3(3, 2);
//Outra maneira mais moderna de setar esse valor caso não seja passado
function func3(a, b=0, c=0, d=0){
  console.log(`${a} + ${b} + ${c} + ${d} = ${a + b + c + d}`);
}
func3(3, 2);
//resultado das funções: 3 + 2 + 0 + 0 = 5
/* 
  Para "pularmos" o envio de um argumento pra ele assumir o valor padrão setado 
  devemos enviar este argumento como undefined, enviar o valor como null ou tentar 
  salta-lo enviando como vazio daria ou erro ou resultado diferente do esperado
*/
function func3(a, b=0, c=0, d=0){
  console.log(`${a} + ${b} + ${c} + ${d} = ${a + b + c + d}`);
}
func3(3, 2, undefined, 5);
//resultado das funções: 3 + 2 + 0 + 5 = 10
/* 
  Podemos também passar e enviar array como parâmetros e argumentos em uma função
  e aplicar desestruturação no mesmo
*/
function func4([a, b, c, d]){
  console.log(a, b, c, d);
}
func4([1, 2, 3, 4]);
//resultado da função: 1 2 3 4
/* 
  Podemos também usar o rest operator para pegar vários argumentos como um array
  para isso o rest operator precisa ser o ultimo parâmetro a ser passado, mesmo
  com o rest operator a variavel arguments continua com a mesma funcionalidade.
 */
const conta = function (operador, acumulador, ...numeros) {
  for (let num of numeros){
    if (operador === '+') acumulador += num;
    if (operador === '-') acumulador -= num;
    if (operador === '/') acumulador /= num;
    if (operador === '*') acumulador *= num;
  }
  console.log(acumulador);
}
conta('+',10, 20,30,40,50);
//Resultado da função: 150

/* 
  Usando o rest operator conseguimos com um único argumento pegar quantos parâmetros
  forem passados, com isso fazemos algo semelhante ao arguments funcionar nas arrow
  functions
*/
const exemplo = (...args) => {
  console.log(args);
};
exemplo(1,2,3,4,5,6,7,8,9,0);
//Resultado da função: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]