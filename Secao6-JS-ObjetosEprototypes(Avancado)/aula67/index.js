/* 
  Object.values -> Exibe apenas os valores das chaves do objeto
  Object.entries -> Exibe em arrays chaves e valores do objeto
  Object.getOwnPropertyDescriptor(o, 'prop') -> exibe o valor das propriedades do objeto.
  Object.assign(des, any) -> copia objetos
  ... (spread) -> espalha e/ou copia objetos
  
  Já vimos
  Object.keys (retorna chaves)
  Object.freeze (congela objetos)
  Object.defineProperties (define várias propriedades)
  Object.defineProperty (define uma propriedade)
*/
//Copiar um objeto para outro
//primeiro metodo - mais intuitivo
const produto = {nome:'Caneca', preco: 1.8};
const mesmoProduto = produto //apenas linca o valor dos objetos
const outroProduto = {...produto, material: 'ferro'}/*copia os valores do objeto para o outro*/
console.log(' ');
console.log('Valores originais logo que foram copiados');
console.log('  Produto          ', produto);
console.log('  Mesmo Produto    ', mesmoProduto);
console.log('  Outro Produto    ', outroProduto);
console.log(' ');
console.log('Valores foram todos alterados antes de começar as exibições  ');
produto.nome = 'Copo Lagoinha';
mesmoProduto.preco = 2.0;
outroProduto.nome = 'Copo';
outroProduto.preco = 5.0;
console.log('  Produto          ', produto);
console.log('  Mesmo Produto    ', mesmoProduto);
console.log('  Outro Produto    ', outroProduto);
console.log(' ');
console.log('Valores originais logo que foram copiados');
//segundo método - menos intuitivo mas funciona muito bem
const produtoDiferente = Object.assign({}, outroProduto);
console.log('  Outro Produto    ', outroProduto);
console.log('  Produto Diferente', produtoDiferente);
console.log(' ');
console.log('Valores foram todos alterados antes de começar as exibições  ');
produtoDiferente.material = 'cerâmica';
produtoDiferente.preco = 50.50;
produtoDiferente.nome = 'Xícara';
console.log('  Outro Produto    ', outroProduto);
console.log('  Produto Diferente',produtoDiferente);
console.log(' ');
console.log('Propriedades do valor nome do objeto produtoDiferente');
console.log(Object.getOwnPropertyDescriptor(produtoDiferente,'nome'));
console.log('Exibindo apenas os valores do objeto produtoDiferente');
console.log(Object.values(produtoDiferente));
console.log('Exibindo em arrays chaves e valores do objeto produtoDiferente');
console.log(Object.entries(produtoDiferente));
console.log('Desestruturando chaves e valores do objeto produtoDiferente');
for (let[chave, valor] of Object.entries(produtoDiferente)){ 
  console.log(chave, ':', valor);
};
