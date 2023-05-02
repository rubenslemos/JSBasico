const tresHoras = 60*60*3*1000;
const umDia = 60*60*24*1000;
const data0 = new Date(0 +tresHoras+umDia);
console.log(data0.toString());

const data = new Date();
console.log(data.toString());

const data1 = new Date(2023, 4, 2, 17, 30, 25, 999); // (a, m, h, M, s, ms)
//2023 -ano
//4 - mes (vai de 0 - janeiro a 11 - dezembro)
//2 - dia
//17 - hora
//30 - minutos
//25 - segundos
//999 - milissegundos
console.log(data1.toString());
const dataString = new Date('2023-05-02 17:35:34');
console.log(dataString.toString());
console.log(`Dia = ${data.getDate()} Mês = ${data.getMonth()+1} Ano = ${data.getFullYear()} Dia da semana = ${data.getDay()+1}   
Hora = ${data.getHours()} Min = ${data.getMinutes()} Seg = ${data.getSeconds()} MS = ${data.getMilliseconds()}`) // 0 - domingo 6 - sábado
//formatar data
zeroAEsquerda = (num) => { return num>=10 ? num : `0${num}`}
formatarData = (data) => {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda((data.getMonth()+1));
  const ano = zeroAEsquerda(data.getFullYear());
  const hora= zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());
  return `Data formatada: ${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}
const dataBrasil = formatarData(data);
console.log(dataBrasil);