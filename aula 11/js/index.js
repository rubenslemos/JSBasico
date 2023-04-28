// alert('Com a nossa mensagem');
// confirm('Você esta entendendo a aula?');
// prompt("Digite seu nome:");
let soma=confirm('Gostaria de realizar uma soma?');
if (soma==true) {
  const numero1 = prompt('Digite um numero:');
  const numero2 = prompt('Digite um numero:');
  const total = Number(numero1) + Number(numero2);
  alert(`${numero1} + ${numero2} = ${total}`);
}else{
  alert('obrigado por acessar nosso site');
}
