//Objetos
const nome01 = 'Rubens';
const sobrenome01 = 'Silva';
const idade01 = 40;

const nome02 = 'Iara';
const sobrenome02 = 'Santiago';
const idade02 = 39;
//objeto cadastro
const cadastro = {
   nome: 'Rubens',
   sobrenome: 'Silva',
   idade: 40,
   dados (){
      console.log(`Dados de Cadastro = Nome: ${this.nome}, Sobrenome: ${this.sobrenome}, Idade: ${this.idade}`);
   },
   incrementaIdade() {
      this.idade++;
   }
};
//usando função para criar um cadastro
criaPessoa = (nome, sobrenome, idade) => {
   return {
      nome,
      sobrenome,
      idade
   }
};
aula20/index.js
let cadastro1 = criaPessoa('Iara', "Santiago", 39);
cadastro1 = criaPessoa('Rubens', "Silva", 40);

console.log(`Nome: ${cadastro.nome}`);
console.log(`Sobrenome: ${cadastro.sobrenome}`);
console.log(`Idade: ${cadastro.idade}`);
console.log(`${JSON.stringify(cadastro)}`);
cadastro.incrementaIdade();
cadastro.dados();
