/* Nessa aula iremos ver a estrutura de dados Map(), que é diferente do array.map(), um exemplo de uso desse recurso é o que veremos abaixo.  */

const pessoas = [
  {id: 3, nome: 'Rubens'},
  {id: 2, nome: 'Iara'},
  {id: 1, nome: 'Noah'},
  {id: 0, nome: 'Antonio'}
];

/* const novasPessoas = {};
for(const pessoa of pessoas){
  const { id } = pessoa;
  novasPessoas[id] = {...pessoa};
}; */

//setando um new Map
const novasPessoas = new Map();
for(const pessoa of pessoas){
  const { id } = pessoa;
  //passamos .set(valor, chave)
  novasPessoas.set(id,{...pessoa});
};
//obtendo o valor do map
console.log(novasPessoas.get(3));
console.log(novasPessoas.get(2));
console.log(novasPessoas.get(1));
console.log(novasPessoas.get(0));

//iterando sobre map
for(const pessoa of novasPessoas){
  console.log(pessoa)
};
//desestruturando
for(const [ident, {id, nome}] of novasPessoas){
  console.log(ident, id, nome)
}
//pegando apenas as chaves
for(const chaves of novasPessoas.keys()){
  console.log(chaves)
};
//pegando apenas os valores
for(const valores of novasPessoas.values()){
  console.log(valores)
};
