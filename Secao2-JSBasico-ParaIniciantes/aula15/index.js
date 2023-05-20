let num1 =1;//number
let num2 =2.5;//number
let convertido = num1.toString()
let resultado = num1+num2;
let resultado2 = convertido+num2;
console.log(resultado);
console.log(resultado2);
console.log(num1, typeof num1);
console.log(num2, typeof num2);
console.log(convertido, typeof convertido);
console.log(resultado, typeof resultado);
console.log(resultado2, typeof resultado2);
//quando há uma string numa operação com + não se realiza uma adição e sim uma concatenação

//quando colocamos um valor dentro do toString() ex 2 ele nos mostrará o valor binário desse numero se puser 16 mostrara o hexadecimal
num1 = 23454
console.log(`Decimal: ${num1.toString(10)}`);
console.log(`Hexadecimal: ${num1.toString(16)}`);
console.log(`Binário: ${num1.toString(2)}`);
//arredondar
num1 = 23.3445234
console.log(`Número sem arredondamento: ${num1}`);
console.log(`Arredondado com 2 casas decimais: ${num1.toFixed(2)}`);
console.log(`Arredondado com 3 casas decimais: ${num1.toFixed(3)}`);
console.log(`Arredondado com 4 casas decimais: ${num1.toFixed(4)}`);
//verificar se o número é inteiro
num1 = 234
console.log(`O numero da variavel num1 ${num1} é inteiro? ${Number.isInteger(num1)? 'Sim' : 'Não'}`);
console.log(`O numero da variavel num2 ${num2} é inteiro? ${Number.isInteger(num2)? 'Sim' : 'Não'}`);
//verificar resultado NaN
let temp = num1 * "oi";
console.log(`O número da variavel temp ${temp} é inválido? ${Number.isNaN(temp)? 'Sim' : 'Não'}`);
console.log(`O número da variavel num1 ${num1} é inválido? ${Number.isNaN(num1)? 'Sim' : 'Não'}`);
//o java script possui uma pequena imprecisão em contas com valores não inteiros, aprenda a corrigir essa imprecisão
num1 = 0.7;
num2 = 0.1;
num1 += num2;
num1 += num2;
num1 += num2;
temp = num1
console.log(num1);
console.log(`O numero da variavel num1 ${num1} é inteiro? ${Number.isInteger(num1)? 'Sim' : 'Não'}`);
num1 = parseFloat(num1.toFixed(2));
console.log(`O numero da variavel num1 ${num1} é inteiro? ${Number.isInteger(num1)? 'Sim' : 'Não'}`);
num1 = temp
console.log(`O numero da variavel num1 ${num1} é inteiro? ${Number.isInteger(num1)? 'Sim' : 'Não'}`);
num1 = parseInt(num1.toFixed(1));
console.log(`O numero da variavel num1 ${num1} é inteiro? ${Number.isInteger(num1)? 'Sim' : 'Não'}`);
//outra maneira de resolver isso sem as funções seria forçar as operações a corrigirem fazendo-as n ocorrerem entre floats, mas a melhor maneira é usar as funções
num1 = 0.7;
num2 = 0.1;
num1 = ((num1 *100) + (num2*100))/100;
num1 = ((num1 *100) + (num2*100))/100;
num1 = ((num1 *100) + (num2*100))/100;
console.log(num1);
console.log(`O numero da variavel num1 ${num1} é inteiro? ${Number.isInteger(num1)? 'Sim' : 'Não'}`);