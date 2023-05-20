/* Primeira forma de concatenar arrays (usando variável.concat())*/
const a1 = [1, 2];
const a2 = [3, 4];
const aConcat = a1.concat(a2, [5, 6]);
/*com o . concat vc pode concatenar constantes, variáveis, strings, numbers, ou 
seja o que vc quiser */
console.log(aConcat);
/* Segunda forma de concatenar arrays (usando o spread operator(...))*/
const a3 = [7, 8];
const a4 = [9, 10];
const aSpread = [...aConcat, ...a3, ...a4, ...[11], 'Rubens'];
console.log(aSpread);