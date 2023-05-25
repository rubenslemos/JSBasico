/* 
705.484.450-52 070.987.720-03
Calculando o cpf
1º pegue os 9 primeiros numeros e multiplique cada algarismo conforme abaixo:

7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70+ 0+  40+ 28+ 48+ 20+ 16+ 15+ 0 = 237

Em seguida somamos os resultados dessas multiplicações e jogue na formula 
11 menos o resto da divisão do somatório por 11, o resultado será o primeiro 
digito ou seja o 10ºn do cpf, mas se o resultado dessa formula for maior que 9
o primeiro digito será 0(zero).

11 - (237 % 11) = 5 (primeiro digito)

Para o segundo digito fazemos a mesma conta incluindo o digito e ao invés de 
começarmos a decrescente por 10 começamos por 11, de resto as regras são iguais
as do primeiro digito.

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10  9   8   7   6   5   4   3   2
77+ 0+  45+ 32+ 56+ 24+ 20+ 20+ 0+  10 = 284

11 - (284 % 11) = 2 (segundo digito)

Após gerar os dois dígitos temos que concatená-los com o restante dos numeros do
cpf e compara-lo com o cpf passado e só será valido se a comparação der true.

Obs: /\D+/g -> representação numérica de qualquer coisa que não seja número
*/

//removendo os caracteres não numéricos do cpf
let cpf ="705.484.450-52";
let cpfLimpo = cpf.replace(/\D+/g, '');
console.log(cpfLimpo);

//convertendo string em array
let cpfArray = Array.from(cpfLimpo);
console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));