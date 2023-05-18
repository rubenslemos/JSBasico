const nomes = ['Rubens', 'Iara', 'Antonio', 'Noah' ];
/* todo array é indexado */
console.log(nomes);
nomes[2]= 'Noah';
nomes[3]= 'Antonio';
console.log(nomes);
const deletado = [nomes.shift(), delete nomes[0]]; //apaga o conteudo do indice do array sem remover o indice em si
console.log(nomes);
nomes[0]='Rubens'
console.log(nomes);
//serve para declarar qualquer tipo de array, que é usar o constructor do array
const numerais = new Array(1,2,3,4);
console.log(numerais);
//arrays tem valores por referencia
const num = numerais;
num.pop();
console.log('Veja ao remover 1 valor de num remove-se tb 1 valor de numerais');
console.log('Numerais: '+numerais);
console.log('Num: '+num);
//ao usar o spread operator copiamos os valores sem manter a referencia
const nome = new Array(...nomes);
deletado.push(nome.shift());
console.log('Veja ao remover 1 valor de nome remove-se tb 1 valor de nomes');
console.log('nomes: '+nomes);
console.log('nome: '+nome);
console.log(deletado);
//shift e pop removem o conteudo e o indice apagado do array
// push add elemento no fim do array e unshift no inicio
deletado.unshift(false);
console.log(deletado);
const fatia = numerais.slice(0,3);
console.log(fatia);
//convertendo string em array
const meuNome = 'Rubens Silva Lemos';
const partesNome = meuNome.split(' ');
console.log(meuNome);
console.log(partesNome);
//convertendo array em string
const nomeCompleto = partesNome.join(' ');
console.log(nomeCompleto);
