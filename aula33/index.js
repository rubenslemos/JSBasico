const frutas = ['uva', 'limão', 'abacaxi'];
//for clássico
for (var i = 0; i < frutas.length; i++) {
  console.log(`For clássico: ${frutas[i]}`);
}
//For in com array
for (let i in frutas){
  console.log(`For in: ${frutas[i]}`);
}

//for in com objeto
const pessoa = {
  nome:'Rubens',
  sobrenome: 'Lemos',
  idade: 40
}
for (let i in pessoa) {
  console.log(`For in: ${i}: ${pessoa[i]}`);
}