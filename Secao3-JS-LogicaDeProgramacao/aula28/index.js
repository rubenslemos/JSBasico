const verdadeira = true;
let nome = 'Luiz'
var nome2 = 'Otávio'

//let tem escopo de bloco {... bloco}
//var só tem escopo de função

console.log(nome, nome2);
if(verdadeira) {
  let nome='Rubens';
  let teste= 'tente ler fora do if'
  var nome2= "lemos";
  console.log(nome, nome2, teste);
}
console.log(nome, nome2);

//ou seja quando "redeclaramos" nesse exemplo nome dentro do if, na verdade ela é uma variável apenas do bloco if, ja quando o fazemos com var ela sobre escreve a variável nome2 declarada fora do bloco, isso mostra o escopo das duas claramente, outra forma de ver isso é tentar declarar uma variável com let dentro do bloco if e depois tentar chama-la fora do bloco, isso gera erro pois ela n existe fora do bloco. let possui hierarquia dentro dos blocos.

//o bloco de uma função é diferenciado, as variáveis criadas dentro dele só podem ser usadas dentro dele e colocando outros blocos dentro dele ex: bloco de if a hierarquia da anotação acima ainda é respeitada e as variáveis declaradas com let dentro do if só funcionaram dentro dela enquanto as com var funcionaram em todo bloco da função.

//Com let ao tentarmos usar uma variável antes de sua declaração encontramos um erro avisando que a mesma ainda não existe, já com var apenas recebemos a mensagem que ela ainda não tem valor definido (undefined) 