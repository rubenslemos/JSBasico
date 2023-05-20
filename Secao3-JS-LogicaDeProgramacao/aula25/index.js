//(condição) ? 'Valor para verdadeiro' : 'Valor para falso'
const pontosUsuario = 1999
let corUser;
corUser = pontosUsuario>= 1000 ? corUser = 'blue' : corUser = null;
const corPadronizada = corUser || 'black';
const nivelUsuario = pontosUsuario >= 1000 ? console.log('Usuário VIP', corPadronizada) : console.log('Usuário Normal', corPadronizada);
//console.log(pontosUsuario, nivelUsuario)