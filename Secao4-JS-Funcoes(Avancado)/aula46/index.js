/* 
  return retorna um valor e finaliza a função, possuímos funções que retornam 
  e que não retornam valores, os valores retornados em uma função podem ser 
  usados em outras partes do programa, como por exemplo serem inseridos dentro
  de variáveis para uso em outra função.
*/
criaPessoa = (nome, sobrenome) => {
  return {nome, sobrenome};
}
p1 = criaPessoa('Rubens', 'Lemos');
const p2 = {
  nome: 'Iara',
  sobrenome: 'Furtado Santiago'
};
console.log(p1, p2);
/* 
  Neste caso fizemos a criação dos objetos p1 e p2 sendo p1 usando função que
  retornou o objeto para a variável p1 e p2 declarada de forma direta, o uso 
  da função nesse caso nos facilita pois podemos usar a função quantas vezes 
  forem necessárias sendo assim não temos a necessidade de criar os objetos 
  manualmente basta passarmos os argumentos para que a função crie-os.
*/
//resultado da função = { nome: 'Rubens', sobrenome: 'Lemos' } 
//{ nome: 'Iara', sobrenome: 'Furtado Santiago' }
/* 
  Podemos passar uma função como retorno de outra função assim precisamos 
  passar argumento para as duas funções para obtermos o resultado, e como retorno
  da primeira função teremos a outra função que precisará de receber seu argumento
  para que tenhamos o resultado esperado.
*/
falaFrase = (inicio)=>{
  falaResto=(resto)=>{
    return inicio + ' ' + resto;
  }
  return falaResto;
}
const fala = falaFrase('Ola');
console.log(`Fala = ${fala}`);
const resto = fala('mundo');
console.log(`resto = ${resto}`);
/* retorno da função = Fala = (resto)=>{
    return inicio + ' ' + resto;
  }
resto = Ola mundo */
//Exemplo de função que mostra a utilidade dessa cadeia de funções
//primeiro as funções de forma desencadeada
duplica = (n)=> {return n*2;}
triplica =(n)=>{return n*3;}
console.log(duplica(2));
console.log(triplica(2));
//com a função encadeada
criaMultiplicador = (multiplicador)=>{return (n) =>{return n * multiplicador;}}
duplica = criaMultiplicador(2)
triplica = criaMultiplicador(3)
console.log(duplica(2));
console.log(triplica(2));
/* 
  Ao usar a forma encadeada passamos a poder gerar os dois valores a serem 
  multiplicados deixando o código mais simples e sem funções quase que repetidas 
  damos o nome de Closures a essas funções encadeadas
*/