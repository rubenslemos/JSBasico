const rand = (max, min) => {
  return Math.floor( ( Math.random() * ( max - min ) + min ) * 1000 );
};
const esperaAi = (msg, tempo)=>{
  return new Promise((res, rej) => {  
    setTimeout(() => { 
      if(typeof msg !== 'string'){
        rej('Mensagem inválida');
        return
      }
      res(msg+' - Restauração');
      return;
    }, tempo);
})};

/* esperaAi('Mensagem Válida 1', rand(0,2))
.then(valor => {
  console.log(valor);
  return esperaAi('Mensagem Válida 2', rand(0,2))
  .then(valor => {
    console.log(valor);
    return esperaAi('Mensagem Válida 3', rand(0,2))
    .then(valor => {
      console.log(valor);
      return esperaAi('Mensagem Válida 4', rand(0,2))
      .then(valor => {
        console.log(valor);
        return ;
      });
    });
  });
})
.catch((err) => {
  console.log('Error:', e);
}); */

/* 
Convertendo para Async / Await que vieram para limpar ainda mais o código ao
se usar as promises bastando declarar a função como async e usar a palavra await
antes das ações que ela execute, para tratar possíveis erros usamos na função o
try/catch onde no try ficará o que será executado se não houver erro e no catch
o que será realizado caso haja erro e caso vá para o catch as demais promises não
serão executadas.
*/

/* 
As promises possuem tres estados
pendente - estado inicial, que esta aguardando a execução(pending)
fulfilled - resolvida
reject - rejeitada
*/
const mensagem = async ( ) => {
  try{
    const valor = await esperaAi('Mensagem Async/Await 1', rand(0,2))
    console.log(valor);
    const valor_1 = await esperaAi('Mensagem Async/Await 2', rand(0, 2));
    console.log(valor_1);
    const valor_2 = await esperaAi('Mensagem Async/Await 3', rand(0, 2));
    console.log(valor_2);
    const valor_3 = await esperaAi('Mensagem Async/Await 4', rand(0, 2));
    console.log(valor_3);    
    const valor_4 = await esperaAi(123456, rand(0, 2));
    console.log(valor_4);
    return;
  }catch(e) {
    console.log('Error: ', e)
}};

mensagem()
