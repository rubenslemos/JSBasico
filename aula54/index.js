/* Função recursiva é a função exerce as ações a ela cabida e se chama de volta 
quantas vezes forem necessárias até chegar no seu limite de autoexecução
*/
const recursiva =(max) => {
  if (max > 2) return;
  console.log('Entrada'+max);
  max++;
  recursiva(max);
  console.log('Saida'+max);
}
recursiva(-5);