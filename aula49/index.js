/* 
  Uma função imediata, é uma função em geral anonima que vc a invoca logo após 
  lança-la e a mesma fica protegida dentro de um bloco e seus elementos não 
  afetam o âmbito global. Um exemplo de função nesses moldes poderia ser uma 
  função lançada dentro do arquivo JS para um website, pois assim além de 
  impedir que variáveis globais de outros frameworks, do próprio servidor ou de
  outros arquivos do programa afetem nosso código, assim como também impede que 
  nós façamos o mesmo com as outras funções globais ou com algum nivel de 
  argumentos hieraticamente em relação a mesma. pode-se declarar qualquer coisa 
  dentro desse tipo função
*/
//exemplo de uma função imediata (deve ser criada dentro de () para não dar erro)
 (function(idade, peso, altura) {
  const sobrenome = 'Luiz';
  criaNome=(nome)=>{
    return nome + ' ' + sobrenome;  
  }
  const falaNome=()=> {
    console.log(criaNome('Luiz'));
  }

  falaNome();
  console.log(idade, peso, altura)
 })(30, 80, 1.80);

 