let num1 = 9.345;
console.log(`Num1 = ${num1}`);
//arredondar para baixo
let temp = Math.floor(num1);
console.log(`Num2 = ${temp}`);
//arredondar para cima
temp = Math.ceil(num1);
console.log(`Num3 = ${temp}`);
//arredondamento automático de .5 pra cima arredonda pra cima, temp
//.49 ou menor arredonda pra baixo
temp = Math.round(num1);
console.log(`Num4 = ${temp}`);
//descobrir o maior numero de uma sequencia
console.log(`O Maior numero entre 10, 56, 100, 1, 300 = ${Math.max(10, 56, 100, 1, 300)}`);
//descobrir o menor numero de uma sequencia
console.log(`O menor numero entre 10, 56, 100, 1, 300 = ${Math.min(10, 56, 100, 1, 300)}`);
//gerar números aleatórios
temp = Math.round(Math.random() * (10 - 5)) ;
console.log(temp);
//valor de PI
temp = Math.PI
console.log(Number(temp.toFixed(2)));
//potenciação
temp =Math.pow(temp, 2);
console.log(`potencia de Temp elevado a 2 = ${Number(temp.toFixed(2))}`);
//raiz quadrada
temp = 9;
console.log(`Raiz quad. de ${temp} com calculo = ${temp ** 0.5}`);
temp = 25;
console.log(`Raiz quad. de ${temp} com função = ${Math.sqrt(temp, 2)}`);
