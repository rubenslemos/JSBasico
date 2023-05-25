//Produto -> aumento de preço e desconto
//Camiseta = cor caneca = material
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.aumento = function (quantia){
  this.preco += quantia;
};
Produto.prototype.desconto = function (quantia){
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
  Produto.call(this, nome, preco);
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);//setando o prototype de produto em camisa
Camiseta.prototype.constructor = Camiseta;//setando novamente o construtor de camiseta pra ela pois ao setar o prototype de produto nela o construtor tinha passado a ser a de Produto
Camiseta.prototype.aumento = function(percentual){ 
  this.preco = this.preco + (this.preco *(percentual/100));
};
Camiseta.prototype.mudaCor = function(novaCor){
  this.cor =novaCor;
};
const camiseta = new Camiseta('Regata', 90, 'Preta');
console.log(camiseta);
camiseta.aumento(20);
console.log(camiseta);
camiseta.mudaCor('Azul');
console.log(camiseta);
camiseta.desconto(-2);
console.log(camiseta);

function Caneca(nome, preco, material, estoque){
  Produto.call(this, nome, preco);
  this.material = material;
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function(){
      return estoque;
    },
    set: function(valor){
      if(typeof valor !== 'number') return;
      estoque = valor;
    }
  });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
Caneca.prototype.desconto = function(percentual){ 
  this.preco = this.preco - (this.preco *(percentual/100));
};
Caneca.prototype.mudaMaterial = function(novoMaterial){
  this.material =novoMaterial;
};
Caneca.prototype.addEstoque = function(add){
  this.estoque += add;
};
Caneca.prototype.delEstoque = function(del){
  this.estoque -= del;
};

const caneca = new Caneca('X', 2, 'P', 5);
console.log(caneca,caneca.estoque);
caneca.aumento(2);
console.log(caneca,caneca.estoque);
caneca.mudaMaterial('A');
console.log(caneca,caneca.estoque);
caneca.desconto(50);
console.log(caneca,caneca.estoque);
caneca.addEstoque(3);
console.log(caneca,caneca.estoque);
caneca.delEstoque(1);
console.log(caneca,caneca.estoque);

