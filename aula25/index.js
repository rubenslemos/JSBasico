const hora = 24.01;

if (hora>=6 && hora < 12) {
  console.log("bom dia");
} else if (hora < 18 && hora >= 12) {
  console.log("boa tarde");
} else if (hora >= 18 && hora <= 24){
  console.log("boa noite");
} else if (hora >= 0 && hora < 6 ){
  console.log("Boa Madrugada");
} else {
  console.log("isso não é uma hora válida");
}

const num = 10;
if (num >= 0 && num <=5){
  console.log("Nº entre 0 e 5");
} else if (num > 5 && num <= 10){
  console.log("Nº entre 5 e 10");
} else if (num < 0){
  console.log("Nº menor q 0")
} else if (num > 10){
  console.log("Nº maior q 10")
} else {
  console.log("Não é nº")
}