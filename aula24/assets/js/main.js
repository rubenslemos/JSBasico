const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  setResultado("teste");
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');
  const selectSexo = e.target.querySelector('#sexo');
  const sexo = Number(selectSexo.value);
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  if (sexo=== 0){
    setResultado('Favor selecionar o sexo', false);
    return;
  }
  if (!peso){
    setResultado('Peso inválido', false);
    return;
  }  
  if (!altura){
    setResultado('Altura inválida', false);
    return;
  }
  const imc = getImc(peso, altura);
  const tabelaImc = getTabelaImc(sexo, imc);
  msg = (`Imc = ${imc} - ${tabelaImc}`);
  setResultado(msg, true);
});
getTabelaImc = (sexo, imc) => {
  const tabela = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
  'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

   if ((imc >= 39.9 && sexo === 1) || (imc >= 35.89 && sexo ===2)) return tabela[5];
   if ((imc >= 34.9 && sexo === 1) || (imc >= 30.1 && sexo ===2)) return tabela[4];
   if ((imc >= 29.9 && sexo === 1) || (imc >= 24.9 && sexo ===2))return tabela[3];
   if ((imc >= 24.9 && sexo === 1) || (imc >= 21.9 && sexo ===2)) return tabela[2];
   if ((imc >= 18.5 && sexo === 1) || (imc >= 18.1 && sexo ===2)) return tabela[1];
   if ((imc < 18.5 && sexo === 1) || (imc<=18 && sexo ===2)) return tabela[0];
}

getImc = (peso, altura) => {
  const imc = peso/altura **2
  return imc.toFixed(2)
}
criaP = () => {
  const p = document.createElement('p');//cria um elemento
  return p;
}

setResultado = (msg, isValid) => {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';//limpa o elemento resultado caso ele tenha algum conteudo
  const p = criaP();
  isValid ? p.classList.add('p-resultado') : p.classList.add('p-semResultado');
  p.innerHTML = msg; //insere algo ao elemento
  resultado.appendChild(p);//adicionou o elemento p criado ao elemento resultado
}