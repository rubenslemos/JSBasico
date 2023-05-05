/* try{
  // é executada quando não há erros
  console.log('Abrir um arquivo.');
  console.log(a);
  console.log('Manipulei o arquivo e gerou erro.');
  console.log('Fechei o arquivo.');
} catch (error) {
  // é executada quando há erros
  console.log('Tratando o erro.');
}finally{
// é sempre executada, e pode ser omitida
  console.log('Finally é sempre executado');
} */

const retornaHora = (data) => {
  if (data && !(data instanceof Date)) {throw new TypeError('Não é horário válido')};
  if (!data) {data = new Date()}
  return data.toLocaleString('pt-BR', {/* hour: '2-digit', minute: '2-digit', second: '2-digit', */ hour12: false });
}
try{
  const date = retornaHora();
  console.log(date.toString());
} catch (error){
  console.log(`${error}`)
} finally{
  console.log('retornaHora finalizada');
}