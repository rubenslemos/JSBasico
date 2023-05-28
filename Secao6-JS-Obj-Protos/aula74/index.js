/* Quando acoplamos vários objetos a outro(s) damos o nome disso em programação de composição, outro nome que podemos dar a isso é mixing, ou seja quando unimos coisas que não possuem uma hierarquia ou herança mas sim pela necessidade de usar essas funções nos objetos que a receberam   */
const falar = {
  falar(){ console.log(`${this.nome} ${this.sobrenome} fala.`); }
};
const comer = {
  comer(){ console.log(`${this.nome} ${this.sobrenome} come.`); }
};
const beber = {
  beber(){ console.log(`${this.nome} ${this.sobrenome} bebe.`); }
};
/* Método usando spread operator para copiar os métodos desacoplados para o prototype
const pessoaPrototype = {...falar, ...comer, ...beber};
 */

//Método usando Object.assign para copiar os métodos desacoplados para o prototype
const pessoaPrototype = Object.assign({},falar, comer, beber);
function criaPessoa (nome, sobrenome){
  return Object.create(pessoaPrototype, {
    nome:{value: nome},
    sobrenome:{value: sobrenome}
  });
}

const p1 = criaPessoa('Rubens', 'Lemos');
const p2 = criaPessoa('Iara', 'Santiago');
console.log(p1);
console.log(p2);
p1.falar();
p1.comer();
p1.beber();
p2.falar();
p2.comer();
p2.beber();