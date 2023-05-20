/* Assim como as factory functions as construction functions geram objetos, a 
diferença entre elas é que a factory function é uma função normal que pedimos e 
a mesma cria o objeto. 
Enquanto a construction function já cria e retorna o objeto automaticamente ao 
ser invocada.
A escrita da mesma é feita usando uma convenção diferente, seu nome deve ser 
declarado iniciando com letra Maiúscula tendo a palavra (new) anteriormente ao
nome da função, o corpo dela será o objeto a ser criado. A convenção pede usar a 
letra maiúscula pra declara-la pois ao ser invocada usaremos a palavra new na 
frente dela mantendo o camelCase.

A palavra new cria um novo objeto, faz a palavra new apontar para o objeto que 
esta sendo utilizado e dispensa o uso do return.

Não usamos , dentro das construction function, e sim ; 

Podemos ter atributos e métodos privados a ela, bastando declara-los como let, 
const, sem o uso do this na mesma, isso fará com que n consiga ser usada fora 
da função desempenhando apenas funções internas a ela
*/
function Pessoa (nome, sobrenome) {
  const ID = 123456;
  const metodoInterno = () => { console.log(this.nome, + ': Criado por constructor function.'); };
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.metodo = () => {metodoInterno();};
}
const p1 = new Pessoa('Rubens', 'Lemos');
const p2 = new Pessoa('Iara', 'Santiago');
p1.metodo();
p2.metodo();