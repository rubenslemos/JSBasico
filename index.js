// valores primitivos não podem ter valores de seus indices alterados
let nome = 'Rubens';
nome[0] = 'I';
console.log(`1ª letra do nome: ${nome[0]}`);
console.log(`Nome: ${nome}`);
// valores primitivos são independentes.
let a = "A";
let b = a; //Cópia
console.log(`A: ${a} B: ${b}`);
a= 'B';
console.log(`A: ${a} B: ${b}`);
// valores de referência são dependentes.
const c = [1,2,3];
const d = c;
console.log(`C: ${c} D: ${d}`);
c.push(4);
console.log(`Após add um valor apenas em c: C = ${c} D = ${d}`);
d.pop(); 
console.log(`Após del um valor apenas em d: C = ${c} D = ${d}`);
//copiar o valor de uma variável de referencia
const e = [...d];
console.log(`Valor de e = ${e}`);
d.push(4);
console.log(`Após add um valor apenas em d: C = ${c} D = ${d} E = ${e}`);