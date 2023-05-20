// alert('Com a nossa mensagem');
// confirm('Você esta entendendo a aula?');
// prompt("Digite seu nome:");
let soma=confirm('Gostaria de realizar uma soma?');
if (soma==true) {
  const numero1 = prompt('Digite um numero:');
  const numero2 = prompt('Digite um numero:');
  alert(`${numero1} + ${numero2} = ${Number(numero1) + Number(numero2)}`);
}else{
  alert('obrigado por acessar nosso site');
}
