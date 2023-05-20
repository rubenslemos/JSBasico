const nomes = ['Rubens', 'Iara', 'Antônio']
/* apesar de podermos por vários tipos de dados dentro de um array devemos 
   colocar apenas um tipo de dado dentro de um array, por ser uma boa prática */
console.log(`Nomes: ${nomes}`);
/* os elementos do array são indexados assim como os elementos de uma variável 
qualquer, mas sua indexação é um pouco diferente pois o índice é para o elemento
e não para os caracteres desse elemento */
console.log(`Nomes: ${nomes[0]}`);
console.log(`Nomes: ${nomes[1]}`);
//podemos mudar o elemento do array
nomes[1] = 'Lemos';
console.log(`Nomes: ${nomes}`);
//podemos adicionar novos elementos ao array
nomes[nomes.length] = 'Iara';
console.log(`Nomes: ${nomes}`);
//podemos fazer isso com uma função
nomes.push('Furtado');
nomes.push('Santiago');
console.log(`Nomes: ${nomes}`);
//usamos essa função para adicionar o elemento no início do array
nomes.unshift('Francisco');
nomes.unshift('José');
console.log(`Nomes: ${nomes}`);
//remover no final do array
const removidos = [nomes.pop()];
removidos.push(nomes.pop());
removidos.push(nomes.pop());
console.log(`Nomes: ${nomes}`);
console.log(`Removidos do final do array: ${removidos}`);
//remover no inicio do array
const removido = [nomes.shift()];
removido.push(nomes.shift());
removido.push(nomes.shift());
console.log(`Nomes: ${nomes}`);
console.log(`Removidos do inicio do array: ${removido}`);
//apagar do array sem remover o índice
nomes.push('Furtado');
console.log(`Nomes: ${nomes}`);
delete nomes[1];
console.log(nomes);
//fatiar
nomes[1] = 'Antônio';
console.log(`Nomes: ${nomes}`);
console.log(nomes.slice(0,2));
console.log(nomes.slice(0,-2));
//array no js é considerado um objeto, para sabermos se o objeto é um array usamos:
console.log(`O objeto nomes é um array? ${nomes instanceof Array? "Sim": "nao"}`);