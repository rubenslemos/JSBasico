//escreva uma função q recebe 2 números e retorne o maior deles
// max = (x, y) => {if (x > y) return x; return y;}
//refatorada
max = (x, y) =>  x > y ? x : y;
console.log(max(80,65));
/* Escreva uma função chamada ePaisagem que recebe dois argumentos,
largura e altura de uma imagem(number).
retorne true se a imagem estiver no modo paisagem.
 */

ePaisagem = (largura, altura) => largura >= altura;
console.log(ePaisagem(80,150));
/* Escreva uma função que recebe um número e retorne o seguinte:
- Número é divisível por 3 = Fizz
- Número é divisível por 5 = Buzz
- Número é divisível por 3 e 5 = FizzBuzz
- Número não é divisível por 3 e 5 = Retorna o próprio número
- Checar se o número é realmente um número
- Usar a função com números de 0 a 100
 */
divisor = (numero) => {
  if (typeof(numero)!== 'number') return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
  if (numero % 3 === 0) return 'Fizz';
  if (numero % 5 === 0) return 'Buzz';
  return numero;
};
for (let i = 0; i <= 100; i++) {console.log(i, divisor(i))}