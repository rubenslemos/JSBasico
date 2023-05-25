/* 
  Além das definições ja vistas para Getters e Setters eles servem para proteger 
  uma propriedade usando os Getters para obter valores e Setters para atribui-los
  com isso dentro de Object.defineProperty e Object.defineProperties deixamos de
  usar as configurações de writable e value, substituindo-as pelos métodos get e
  set respectivamente.
*/
function Produto (nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  let estoquePrivado = estoque;
  //Congelando uma chave e uma ou atribuição da mesma
  Object.defineProperty(this, "estoque",{
    enumerable: true, //exibível ou não
    configurable: true, //reconfigurável ou não
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== 'number')
        throw new TypeError('O estoque deve ser um número');
      estoquePrivado = valor;
    }
  })
}
const produto = new Produto ('Camiseta', 20, 3);
console.log(produto)
produto.estoque = 156132;
console.log(produto.estoque)

//Usando Getter e Setter na factory function
const criaProduto = (nome) =>{
  return {
    get nome (){
      return nome;
    },
    set nome(valor) {
      valor = valor.replace('Camisa', 'Bermuda');
      nome=valor;
    }
  };
}
const novoProduto = criaProduto('Short');
novoProduto.nome = 'Camisa';
console.log(novoProduto.nome)