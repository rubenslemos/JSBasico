
const primeiroNumero = 5;
const segundoNumero = '10';
const resultado= primeiroNumero*segundoNumero;
const soma = (primeiroNumero+segundoNumero)*(primeiroNumero+segundoNumero)
const diferenca = (primeiroNumero-segundoNumero)*(primeiroNumero+segundoNumero)
const subtracao = (primeiroNumero-segundoNumero)*(primeiroNumero-segundoNumero)
const resultado1 = primeiroNumero*segundoNumero-(primeiroNumero-segundoNumero)*(primeiroNumero+segundoNumero)
const resultado2 = primeiroNumero*segundoNumero+(primeiroNumero-segundoNumero)*(primeiroNumero+segundoNumero)
const resultado3 = primeiroNumero*segundoNumero-(primeiroNumero+segundoNumero)*(primeiroNumero+segundoNumero)
const resultado4 = primeiroNumero*segundoNumero+(primeiroNumero+segundoNumero)*(primeiroNumero+segundoNumero)
const resultado5 = primeiroNumero*segundoNumero-(primeiroNumero-segundoNumero)*(primeiroNumero-segundoNumero)
const resultado6 = primeiroNumero*segundoNumero+(primeiroNumero-segundoNumero)*(primeiroNumero-segundoNumero)

console.log('A =',primeiroNumero);
console.log('B =',segundoNumero);
console.log('AB =',resultado);
console.log('(A+B)x(A+B) =',soma);
console.log('(A-B)(A+B) =',diferenca);
console.log('(A-B)(A-B) =',subtracao);
console.log('AB-(A-B)(A+B)',resultado1);
console.log('AB+(A-B)(A+B)=',resultado2);
console.log('AB-(A+B)(A+B)=',resultado3);
console.log('AB+(A+B)(A+B)=',resultado4);
console.log('AB-(A-B)(A-B)=',resultado5);
console.log('AB+(A-B)(A-B)=',resultado6);
