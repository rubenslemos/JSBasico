const numero = Number(prompt('Digite seu número: '));
console.log(numero);
const number = document.getElementById('number');
const texto = document.getElementById('texto');

number.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz Quadrada de ${numero} = ${numero ** 0.5}.</p>`
texto.innerHTML += `<p>${numero} é inteiro?  ${Number.isInteger(numero) ? "Sim" : "Não" }.</p>`
texto.innerHTML += `<p>${numero} é NaN?  ${Number.isNaN(numero) ? "Sim" : "Não" }.</p>`
texto.innerHTML += `<p>${numero} arredondado pra baixo =  ${Math.floor(numero)}.</p>`
texto.innerHTML += `<p>${numero} arredondado para cima =  ${Math.ceil(numero)}.</p>`
texto.innerHTML += `<p>${numero} com duas casas decimais =  ${numero.toFixed(2)}.</p>`
