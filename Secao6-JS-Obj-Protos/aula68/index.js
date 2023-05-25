// Construtora -> Molde (classe)
function Pessoa (nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
 }

Pessoa.prototype.estouAqui = 'Hahahahahahaha teste';
Pessoa.prototype.nomeCompleto = function() {return this.nome + ' ' + this.sobrenome};
//instancia
const pessoa1 = new Pessoa('Luiz', 'O.'); //<- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.'); //<- Pessoa = Função construtora
const data = new Date(); //<- Pessoa = Função construtora

console.dir(pessoa1);
console.dir(data);
console.dir(pessoa1.__proto__);
const nome = pessoa1.nomeCompleto();
console.log(nome)
console.dir(Pessoa.prototype);
