/* 
  Funções de callback sao executadas quando uma ação termina, muito utilizadas 
  em sistemas dependentes do retorno de uma resposta para algo ser executado em 
  seguida, como por exemplo uma consulta ou alteração no BD, ou a conexão a um 
  outro servidor ser estabelecida com sucesso,ou após o retorno de uma api, e 
  como não temos controle sobre o tempo de resposta desses exemplos entre outros, 
  e não podemos realizar novas ações sem as mesmas usamos uma função de callback 
  para garantir que as demais funções dependentes destas não rodem antes de 
  obtê-las garantindo a consistência do código e a ordem de execução do mesmo.
*/
//Exemplo de funções com callback simulando demora de tempo de resposta
const rand = (min=500, max=1000) => {
  return Math.floor(Math.random() * (max - min) + min);
} 
f1 = (callback) => { 
  let ran = rand(); 
  setTimeout(() => {
    console.log('F1', ran);
    if(callback)callback();
  }, ran);}
f2 = (callback) => { 
  let ran = rand(); 
  setTimeout(() => {
    console.log('F2', ran);
    if(callback)callback();
  }, ran);}
f3 = (callback) => { 
  let ran = rand(); 
  setTimeout(() => {
    console.log('F3', ran);
    if(callback)callback();
  }, ran);}
  f1callback = () => {
    f2(f2callback);
}
f2callback = () => {
  f3(f3callback);
}
f3callback = () => {
  console.log('Olá Mundo!');
}

f1(f1callback);
