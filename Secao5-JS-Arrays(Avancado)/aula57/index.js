//                0        1       2         3          4
let nomes = ['Rubens', ' Iara', ' Noah', ' Antonio', ' Helena'];
//nomes.splice(índice, delete, el1, el2, el3, el4);

// usando como se fosse o pop
console.log(nomes);
const removidos = nomes.splice(-1,1);
console.log('Como se fosse pop');
console.log(nomes, removidos);

//como se fosse shift
nomes = ['Rubens', ' Iara', ' Noah', ' Antonio', ' Helena'];
const add = nomes.splice(0,1);
console.log('Como se fosse shift');
console.log(nomes, add);

//simulando o push
nomes = ['Rubens', ' Iara', ' Noah', ' Antonio', ' Helena'];
nomes.splice(nomes.length,0, 'Eleonora');
console.log('Como se fosse push');
console.log(nomes);

//simulando o unshift
nomes = ['Rubens', ' Iara', ' Noah', ' Antonio', ' Helena'];
nomes.splice(0,0, 'Eleonora');
console.log('Como se fosse unshift');
console.log(nomes);

//adicionando items a partir de um índice
nomes = ['Rubens', ' Iara', ' Noah', ' Antonio', ' Helena'];
let incrementado = nomes.splice(2, 3, 'Ivo', 'Iran', 'Ana Paula', 'Flávia');
console.log('Adicionado a partir de um índice');
console.log(nomes, incrementado);
