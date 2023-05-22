//new Object -> Object.prototype
const objA = {
  chaveA : 'A'
  //__proto__: Object.prototype
 };
 //new Object -> Object.prototype
const objB = {
  chaveB : 'B'
  //__proto__: ObjA
 };
 const objC = new Object();
 objC.chaveC = 'C';
 //encadeando o prototype de um objeto a outro
 Object.setPrototypeOf(objB, objA);
 Object.setPrototypeOf(objC, objB);
 console.log(objB.chaveA, objB.chaveB);
 console.log(objC.chaveA, objC.chaveB, objC.chaveC);
//criando funções construtoras
function Produto (nome, preco){
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.desconto = function(percentual) { 
  this.preco = this.preco - (this.preco *(percentual/100));
};
Produto.prototype.aumento = function(percentual){ 
  this.preco = this.preco + (this.preco *(percentual/100));
};
const produto = new Produto('Caneca', 20);
console.log(produto);
produto.desconto(10);
console.log(produto);
produto.aumento(20);
console.log(produto);
const produtoNovo = {
  nome: 'Copo',
  preco: 15
};
//setando o prototype do objeto
Object.setPrototypeOf(produtoNovo, produto);
console.log(produtoNovo);
produtoNovo.desconto(10);
console.log(produtoNovo);
produtoNovo.aumento(20);
console.log(produtoNovo);
//criar objeto já setando seu prototype
const novoProduto = Object.create(Produto.prototype,{
  nome: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 'Tênis'
  },
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 450
  },
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 43
  },
  tamanho2: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42
  }
});
console.log(novoProduto);
novoProduto.desconto(10);
console.log(novoProduto);
novoProduto.aumento(20);
console.log(novoProduto);