const inputVerifica = document.querySelector('.input-verifica');
const btnVerifica = document.querySelector('.bnt-verifica');
const verifica = document.querySelector('.verifica');
function ValidaDocumento (doc){
  Object.defineProperty(this,'documentoLimpo',{
    enumerable:true,
    get: function(){
      return doc.replace(/\D+/g, '');
    }
  })
}
ValidaDocumento.prototype.valida = function(){
  console.log(this.documentoLimpo);
  if (typeof this.documentoLimpo === 'undefined') return false;
  if(this.documentoLimpo.length !== 11 && this.documentoLimpo.length !== 14) return false;
  if (this.isSequencia()) return false;
  const documentoParcial = this.documentoLimpo.slice(0,-2);
  const digito1 = this.criaDigito(documentoParcial);
  const digito2 = this.criaDigito(documentoParcial+digito1);
  const documento =documentoParcial+digito1+digito2;
  return this.documentoLimpo === documento;
};

ValidaDocumento.prototype.criaDigito = function(documentoParcial){
  const documentoArray = Array.from(documentoParcial);
  if(documentoArray.length >= 12 ){
  let regressivo = documentoArray.length -7;
  const total = documentoArray.reduce((acumulador, numDocumento) => {
    acumulador += (regressivo * Number(numDocumento));
    --regressivo;
    regressivo === 1 ? regressivo = 9 : regressivo
    return acumulador;
  },0);
  const digito = (total % 11);
  return digito < 2 ? '0' : String(11-digito)
  }else {
    regressivo = documentoArray.length +1;
    const total = documentoArray.reduce((acumulador, numDocumento) => {
      acumulador += (regressivo * Number(numDocumento));
      --regressivo;
      return acumulador;
    },0);
    const digito = 11 - (total % 11);
    return digito >9 ? '0' : String(digito)
  };
};

ValidaDocumento.prototype.isSequencia = function (){
  return (this.documentoLimpo[0].repeat(this.documentoLimpo.length) === this.documentoLimpo);
};

const salvarVerifica = () => {
  const liVerifica = verifica.querySelectorAll('li');
  const listaDeVerifica = [];
  for (let verifica of liVerifica) {
    let verificaTexto = verifica.innerText;
    verificaTexto = verificaTexto.replace('Apagar', '').trim();
    listaDeVerifica.push(verificaTexto);
  }
  const verificaJSON = JSON.stringify(listaDeVerifica);
  localStorage.setItem('verifica', verificaJSON);
};

const criaTarefa = (textoInput) => {
  criaLi(textoInput);
  salvarVerifica();
};

const criaLi = (textoInput) => {
  const li = document.createElement('li');
  li.innerHTML = textoInput;
  verifica.appendChild(li);
  criarBotaoApagar(li);
};

const limpaInput = () => {
  inputVerifica.value ='';
  inputVerifica.focus();
};

const criarBotaoApagar = (li) => {
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  botaoApagar.setAttribute('class', 'btn-apagar');
  botaoApagar.setAttribute('title', 'Apagar esta verificação');
  li.appendChild(botaoApagar);
};

btnVerifica.addEventListener('click', () => {
  if (!inputVerifica.value) return;
  const documento = new ValidaDocumento(inputVerifica.value);
  if (documento.valida()){
    if(documento.documentoLimpo.length === 14){
      inputVerifica.value +=' - CNPJ Valido';
    }else{
      inputVerifica.value += ' - CPF Válido';
    }
  }else{
    inputVerifica.value += ' - Documento Inválido';
  }  
  criaTarefa(inputVerifica.value);
  limpaInput()
});

inputVerifica.addEventListener('keypress', (event) => {
  if (event.key === 'Enter'){ 
    if (!inputVerifica.value) return;
    const documento = new ValidaDocumento(inputVerifica.value);
    if (documento.valida()){
      if(documento.documentoLimpo.length === 14){
        inputVerifica.value +=' - CNPJ Valido';
      }else{
        inputVerifica.value += ' - CPF Válido';
      }
    }else{
      inputVerifica.value += ' - Documento Inválido';
    }  
    criaTarefa(inputVerifica.value);
    limpaInput()
  }
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-apagar')){
    e.target.parentElement.remove();
    salvarVerifica();
  } 
});

const adicionaVerificaSalvas= () => {
  const verifica = localStorage.getItem('verifica');
  const listaDeVerifica = JSON.parse(verifica);
  for (let verifica of listaDeVerifica){
    criaTarefa(verifica);
  }
};

adicionaVerificaSalvas();