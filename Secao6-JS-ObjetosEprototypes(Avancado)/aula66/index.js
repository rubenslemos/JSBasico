/* 
  
*/
function Produto (nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  //Congelando uma chave e uma ou atribuição da mesma
  Object.defineProperty(this, "estoque",{
    enumerable: true, //exibível ou não
    value: estoque, //possui valor ou não
    writable: false, //modificável ou não
    configurable: true //reconfigurável ou não
  })
}
/* 
 
*/
const produto = new Produto ('Camiseta', 20, 3);
console.log(produto)