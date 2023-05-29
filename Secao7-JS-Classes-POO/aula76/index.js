class Pessoa {
  constructor (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar(){ console.log(`${this.nome} ${this.sobrenome} fala.`); }

}
const p1 = new Pessoa('Rubens1', 'Lemos1');
const p2 = new Pessoa2('Rubens2', 'Lemos2');

function Pessoa2(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
}; 

Pessoa2.prototype.falar = function() { 
  console.log(`${this.nome} ${this.sobrenome} fala.`);
}
console.log(p1);
console.log(p2);
p1.falar();
p2.falar();
