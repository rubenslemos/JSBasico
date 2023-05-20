//Não podemos esquecer o break; no final de cada case, senão el continua executando 
//indo para o próximo case apresentando um resultado diferente do esperado 
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
mes = (mesN) => {
  let mesT;
  switch (mesN){
    case 0 : mesT = 'Janeiro'; return mesT;
    case 1 : mesT = 'Fevereiro'; return mesT;
    case 2 : mesT = 'Março'; return mesT;
    case 3 : mesT = 'Abril'; return mesT;
    case 4 : mesT = 'Maio'; return mesT;
    case 5 : mesT = 'Junho'; return mesT;
    case 6 : mesT = 'Julho'; return mesT;
    case 7 : mesT = 'Agosto'; return mesT;
    case 8 : mesT = 'Setembro'; return mesT;
    case 9 : mesT = 'Outubro'; return mesT;
    case 10 : mesT = 'Novembro'; return mesT;
    case 11 : mesT = 'Dezembro'; return mesT;
    default: mesT = 'Mês inválido'; return mesT;
  }
}
const data = new Date();
const mesN = data.getMonth();
const mesT = mes(mesN);
const diaDaSemanaN = data.getDay();
const diaDaSemana = diaDaSemanaT(diaDaSemanaN);
console.log(diaDaSemanaN+1, diaDaSemana, mesN+1, mesT);

// diaDaSemanaT = (diaDaSemanaN) => {
// const diasDaSemana =['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
//     return diasDaSemana[diaDaSemanaN]
// }
// mes = (mesN) => {
//   const meses = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
// 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
//   return meses[mesN]
// }
// zeroAEsquerda = (num) => { return num>=10 ? num : `0${num}`}
// const diaDaSemanaN = data.getDay();
// const diaDaSemana = diaDaSemanaT(diaDaSemanaN);
// const mesN = data.getMonth();
// const mesT = mes(mesN);
// dia.innerHTML = `<p>${diaDaSemana}, ${zeroAEsquerda(data.getDay())} de ${mesT} de ${zeroAEsquerda(data.getFullYear())} de ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}</p>`;