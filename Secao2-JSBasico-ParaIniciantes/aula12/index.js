let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let varX;

varX = varA;
varA = varB;
varB = varC;
varC = varX;

console.log(varA, varB, varC);

// em javascript podemos usar array para resolver isso sem precisar de novas variáveis

varA = 'A'; // B
varB = 'B'; // C
varC = 'C'; //A

[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);