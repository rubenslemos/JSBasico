//geradora simples
function* geradora1(){
  yield 'valor1';
  yield 'valor2';
  yield 'valor3';
}
const g1 = geradora1();
for (let valor of g1) { console.log(valor); };
console.log( g1.next() );
//contador infinito
function* geradora2() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}
const g2 = geradora2()
console.log(g2.next())
console.log(g2.next())
console.log(g2.next())
console.log(g2.next())
//geradora que delega tarefa pra outra geradora
function* geradora3(){
  yield 0;
  yield 1;
  yield 2;
}
function* geradora4(){
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
  yield 6;
}
const g4 = geradora4();
for (let valor of g4) { console.log(valor); };
console.log( g4.next() );
//função geradora com função dentro
function* geradora5(){
  yield function (){ console.log('Olá mundo') };
  yield function (){ console.log('Hello World') };
}
const g5 = geradora5();
const func5 = g5.next().value;
const func6 = g5.next().value;
func5(); 
func6(); 