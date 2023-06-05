const aleatoric = (max, min) => {
  const rand=Math.floor((Math.random()*(max-min)+min)*1000);
  return rand;
};
const esperaAi = (msg, tempo)=>{
  return new Promise((res, rej) => {  
    setTimeout(() => { typeof msg !== 'string'
      ? rej('Mensagem inválida')
      : res(msg.toUpperCase()+'- Restauração');
      return;
    },tempo);
})};
/*
  Alguns métodos úteis para  usar com promises
  
  Promise.all -> executa todas as promises sem precisar ficar encadeando-as, ao 
  contrario da execução de forma encadeada ao encontrar um erro ele não para a 
  execução do encadeamento por isso caso queira esse comportamento usar o return 
  após o reject e isso fara caso haja erro que nenhuma promise seja executada.
  
  Promise.race -> retorna apenas o primeiro valor recebido de uma promise, mesmo
  que hajam varias promises ele apenas entregará o primeiro a ser resolvido se 
  lascando para as outras o que vejo muito útil sendo usado para checagem de 
  conexões pois vc pode por redundâncias, pois assim que a conexão for estabele-
  cida ele já vai dar retorno e continuidade ao serviço. Mas isso não faz com 
  que as demais promise seja executadas apenas o retorno dela acontece exibindo 
  o ultimo.
  
  Promise.resolve -> retorna de forma automática a promise já resolvida.
  
  Promise.reject  -> retorna de forma automática o erro já encontrado.
*/
const promises = [
  esperaAi('Promise 1', aleatoric(1,8)),
  esperaAi('Promise 2', aleatoric(1,8)),
  esperaAi('Promise 3', aleatoric(1,8)),
  esperaAi(123456, aleatoric(1,8)),
];

Promise.all(promises).then((res) => {
  for (re of res) {
    console.log(re+ ' All');
  }
}).catch(e=>{console.log(e)});

Promise.race(promises)
  .then((res) => {
    console.log(res+ ' Race');
  })
  .catch(e=>{
    console.log(e)
  });

Promise.race(promises).then((res) => {
  for (re of res) {
    console.log(re + ' Race com for');
  }
}).catch(e=>{console.log(e)});

const baixaPagina = ()=>{
  const emCache = false;
  if(emCache) return Promise.resolve('Pagina em Cache') 
    else return esperaAi('Baixando a Pagina', aleatoric(5,6));
};
baixaPagina()
  .then((res) => {
    console.log(res+ ' Completa');
  })
  .catch(e=>{console.log(e)});

  const baixaPagina2 = ()=>{
    const emCache = true;
    if(emCache) return Promise.reject('Pagina em Cache') 
      else return esperaAi('Baixando a Pagina', aleatoric(5,6));
  };
  baixaPagina2()
    .then((res) => {
      console.log(res+ ' Completa');
    })
    .catch(e=>{console.log('Error: ',e)});
