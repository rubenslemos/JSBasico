const nome = ['R', 'S', 'L']

//for clássico
for (let i = 0; i < nome.length ; i++) {
  console.log(`For clássico: ${i} ${nome[i]}`);
}
//for in
for (let i in nome){
  console.log(`For in: ${i} ${nome[i]}`);
}

// for of
for (let valor of nome) {
  console.log(`For of: ${valor} ${nome[valor]}`);
}

// forEach
nome.forEach(function(valor, indice, array) {
  console.log(`For each: ${valor} ${indice} ${array}`)
})