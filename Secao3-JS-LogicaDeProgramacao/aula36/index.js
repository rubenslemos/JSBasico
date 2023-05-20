let controle = 0;
while (controle<=2){
  ++controle;
  console.log(controle);
}
controle =0;
const nome = 'RSL';
while (controle < nome.length){
  console.log(nome[controle]);
  controle++;
}

random = (min, max)=> {
  const ran = Math.random()* (max-min) + min;
  return Math.floor(ran);
}
const min = 1;
const max = 50;
let rand = 1
console.log(rand);

do {
  rand = random(min, max);
  console.log(rand);
} while (rand !==10);
console.log('Fim DoWhile e inicio While')
rand = 1;
while (rand !== 10) {
  console.log(rand);
  rand = random(min, max);
}