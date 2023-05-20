/* 
  Escopo léxico significa que as funções reconhecem todo ambiente em volta dela 
  com isso ela busca em todo ambiente (exceto funções não relacionadas a ela) 
  por elementos passados dentro dela para que ela funcione, e só informará que 
  não encontrou o elemento após a buscá-lo sem sucesso até no âmbito global. 
  A função usará o dado mais proximo a ela para realizar suas ações, caso exista
  referencia ao dado em mais de um local no código.
*/
const nome = 'Rubens';
falaNome = () => {
  const nome = 'Rubens Lemos'
  console.log(nome);
}
usaFalaNome = () => {
  falaNome();
}
usaFalaNome();
//Resultado da função: Rubens Lemos