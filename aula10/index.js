/*

Operadores Aritméticos

+ -> Adição - Concatenação
- -> Subtração
/ -> Divisão
* -> Multiplicação
** -> Potenciação
% -> Resto da divisão

Precedência
{}
[]
()
* / %
+ -

*/

let num1 = 5;
const num2 = 10;
let total1 = num1 + num2;
let total2 = num1 - num2;
let total3 = num1 / num2;
let total4 = num1 * num2;
let total5 = num1 ** num2;
let total6 = num1 % num2;
console.log(total1);
console.log(total2);
console.log(total3);
console.log(total4);
console.log(total5);
console.log(total6);

/* 
Operadores de incremento

++ -> Incrementa +1 ao valor da variável (obs a posição dele antes ou depois do 
  nome da variável altera quando a incrementação será aplicada isso para uso 
  numa função com condicional de chegar a um determinado valor altera quantas 
  vezes o loop será repetido)

-- -> Subtrai -1 ao valor da variável (obs a posição dele antes ou depois do 
  nome da variável altera quando a incrementação será aplicada isso para uso 
  numa função com condicional de chegar a um determinado valor altera quantas 
  vezes o loop será repetido)
*/
console.log('Incremento antes: ',++num1);
console.log('Incremento depois: ',num1++);
console.log('Valor pós incrementos: ',num1);
console.log('Decremento antes: ',--num1);
console.log('Decremento depois: ',num1--);
console.log('Valor pós decrementos: ',num1);

/*
Operador de atribuição

Ao colocar o = após um operador aritmético esse valor será atribuído como novo 
valor da variável
+= / -= / /= / *= / %= / **= 
*/

 total1 += num1;
 total2 -= num1;
 total3 /= num2;
 total4 *= num1;
 total5 %= num1;
 total6 **= num1;
 console.log(total1);
console.log(total2);
console.log(total3);
console.log(total4);
console.log(total5);
console.log(total6);