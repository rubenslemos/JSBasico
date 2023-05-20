//função com () vazias
function saudando() {
   console.log(`Boa noite!`);
}
saudando();
//função com () recebendo parâmetros.
function saudar(nome) {
   console.log(`Boa noite ${nome}!`);
}
//resultado de tentar salvar valor dentro de variável de função sem retorno
let variable = saudar('Rubens');
console.log(variable);
//função com retorno.
function saudade(nome) {
   return `Boa noite ${nome}!`;
}
variable = saudade('Iara');
console.log(variable);
//outro exemplo de função
function soma(x, y) {
   const resultado = x + y;
   return resultado;
}
let resultado = soma(3, 4)
console.log(`3 + 4 = ${resultado}`);
// criando uma função dentro de uma variável
const raiz = function (n) {
   return n ** 0.5;
};
console.log(`Raiz de 25 = ${raiz(25)}`);
//usando arrow function
 const subtrair = (n) => {
    return n - 2; 
};
console.log(`25 - 2 = ${subtrair(25)}`);
//arrow function simplificada
const elevado = n => n ** 2;
console.log(`25 elevado a 2 = ${elevado(25)}`);