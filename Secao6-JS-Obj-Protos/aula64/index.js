/* 
 A forma mais básica de se criar um objeto é da forma literal ou seja, usando{}.
 outra forma de se criar é usando o construtor, ou seja usando o new Object ()
*/
//forma literal
const pessoa = {
  nome: 'Rubens',
  sobrenome: 'Silva Lemos',
  idade: 40
};
// notação .valor forma mais usada para acessar o valor de um objeto
console.log(pessoa.nome);
//outra forma de acessar os valores do objeto: a notação ['']
console.log(pessoa['sobrenome']);
/* 
 a notação [''] pode receber valor dinâmico (ou seja ao invés de passar um valor 
 do objeto passei como valor uma variável, assim caso precise pegar algo que não
 saiba o seu nome posso usar esse artifício para acessá-la) veja:
*/
let valor = 'nome';
console.log(pessoa[valor]);
valor = 'sobrenome';
console.log(pessoa[valor]);
valor = 'idade';
console.log(pessoa[valor]);

//Usando o construtor
const pessoa1 = new Object();
pessoa1.nome = 'Iara';
pessoa1.sobrenome = 'Furtado';
pessoa1.idade = 39;
console.log(pessoa1);
//apagando uma chave do objeto
delete pessoa1[valor];
console.log(pessoa1);
//objetos com metodo
pessoa1.falarNome = ()=>{ 
  console.log('Sou '+pessoa1.nome,pessoa1.sobrenome+'e não sei minha idade');
}
pessoa1.falarNome();
pessoa1.idade = 39;
pessoa1.getAnoNascimento = () => {
  const anoAtual = new Date();
  return anoAtual.getFullYear() - pessoa1.idade;
};
console.log(pessoa1.getAnoNascimento());
//ver as chaves do objeto e o valor dentro delas
for (let chave in pessoa1) {
  console.log(chave, pessoa1[chave])
}
//criando objetos através de funções construtoras
//factory functions 
const criaPessoa = (nome, sobrenome) => {
  return {
    nome,
    sobrenome,
  //podemos ter getters e setters dentro da função
    get nomeCompleto( ) {return `${this.nome} ${this.sobrenome}`;}
  };
}
const p1 = criaPessoa('Rubens', 'Lemos');
console.log(p1.nomeCompleto);
// Constructor functions
function Pessoas (nome,sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  Object.freeze();
}
const p2 = new Pessoas('Iara', 'Furtado');
console.log(p2)
/* 
Voce pode declarar esse novo objeto como constante porque vc nunca irá alterar
o endereço de memória da constante e sim o valor que o mesmo irá procurar, ou
seja a estrutura da constante permanecerá inalterada, mudando apenas o resultado
de sua busca.

Usando o Object.freeze() vc trava qualquer mudança no objeto, impossibilitando 
de criar novas chaves, deletar, alterar valores de chaves, possibilitando apenas
alterar coisas dentro do modelo do objeto(caso isso seja implementado dentro do
modelo), se for implementado para um objeto fora do modelo esse objeto estará 
congelado após seu uso mas não os demais objetos surgidos desta constructor func

O Object.freeze() funciona da mesma forma em arrays.
*/