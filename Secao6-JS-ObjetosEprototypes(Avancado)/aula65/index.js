/* 
  Object.defineProperty() e Object.defineProperties(), são propriedades com 
  objetivos de congelar uma ou mais características de uma ou mais chave(s) ou 
  objeto(s), ou de um ou mais elemento(s) de um array, mas não de todas ao mesmo
  tempo como o Object.freeze() faz.
*/
function Produto (nome, preco, estoque) {
  //Congelando mais de uma chave e uma ou atribuição da mesma
  Object.defineProperties(this,{
    nome: {
      enumerable: true, //exibível ou não
      value: nome, //possui valor ou não
      writable: true, //modificável ou não
      configurable: true //reconfigurável ou não
    },
    preco: {
      enumerable: true, //exibível ou não
      value: preco, //possui valor ou não
      writable: true, //modificável ou não
      configurable: true //reconfigurável ou não
    }
  });
  //Congelando uma chave e uma ou atribuição da mesma
  Object.defineProperty(this, "estoque",{
    enumerable: true, //exibível ou não
    value: estoque, //possui valor ou não
    writable: false, //modificável ou não
    configurable: true //reconfigurável ou não
  })
}
/* 
  Das atribuições do defineProperty e defineProperties vistas a que pode gerar 
  mais duvida é a configurable, ela tem como função permitir ou não que a chave
  possa receber outro bloco de configurações e/ou ser apagada.

  A diferença de declaração entre defineProperty e defineProperties é que na 
  primeira é necessário passar o nome da chave que será afetada por ela, já na
  segunda as chaves são declaradas dentro dela recebendo o objeto de configuração
  da mesma logo após sua declaração
*/
const produto = new Produto ('Camiseta', 20, 3);
console.log(produto)