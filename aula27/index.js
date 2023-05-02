diaDaSemanaT = (diaDaSemanaN) => {
  let diaDaSemana;
  switch (diaDaSemanaN){
    case 0 : diaDaSemana = 'Domingo'; return diaDaSemana;
    case 1 : diaDaSemana = 'Segunda'; return diaDaSemana;
    case 2 : diaDaSemana = 'Terça'; return diaDaSemana;
    case 3 : diaDaSemana = 'Quarta'; return diaDaSemana;
    case 4 : diaDaSemana = 'Quinta'; return diaDaSemana;
    case 5 : diaDaSemana = 'Sexta'; return diaDaSemana;
    case 6 : diaDaSemana = 'Sábado'; return diaDaSemana;
    default: diaDaSemana = 'Dia inválido'; return diaDaSemana;
  }
}
const data = new Date();
let diaDaSemanaN = data.getDay();
const diaDaSemana = diaDaSemanaT(diaDaSemanaN);
console.log(diaDaSemanaN+1, diaDaSemana);


//Não podemos esquecer o break; no final de cada case, senão el continua executando 
//indo para o próximo case apresentando um resultado diferente do esperado 