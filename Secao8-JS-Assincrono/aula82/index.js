const aleatoric = (max, min) => {
  min *= 1000;
  max *= 1000;
  const rand = Math.floor(Math.random() * (max - min) + min);
  console.log(rand)
  return rand
}
function esperaAi(msg, tempo){
  setTimeout(() => {
    console.log(msg)
  }, tempo);
}
for (let i = 10; i < 50; i+=10) {
  esperaAi(`Frase ${i}`, aleatoric(7.5,8))
}

/* 
  Resolvendo o problema das mensagens do for acima aparecendo de forma aleatoria
  e fora de ordem, com as promises
*/

function esperaAiPromises(msg, tempo){
  return new Promise((resolve, reject) => {
    typeof msg !== 'string'? reject('Bad Value'):
    setTimeout(() => {
      resolve(msg)
    }, tempo);
  })
}
esperaAiPromises(`Frase 1`, aleatoric(1,1.2))
  .then(resposta => {
    console.log(resposta);
    return esperaAiPromises('Frase 2', aleatoric(1,1.2));
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAiPromises(`Frase 3`, aleatoric(1,1.2));
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAiPromises(`Frase 4`, aleatoric(1,1.2));
  })
  .then(resposta => {
    console.log(resposta);
  })
  .catch(e =>{ console.log("Error: ", e)});  
  

