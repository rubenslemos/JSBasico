//exemplo básico de try/catch
/* try {
  console.log(naoExisto);
} catch (error) {
  console.log('Não foi possível exibir essa mensagem.');
}
 */
const soma = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Pelo menos um dos valores não é um número.');
  }
  return x + y;
}
// console.log(`${soma('8',6)}`);
try{
  console.log(`${soma('8',6)}`);
} catch (error){
  console.log(error);
}