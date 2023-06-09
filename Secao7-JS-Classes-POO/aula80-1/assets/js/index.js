const inputVerifica = document.querySelector('.input-verifica');
const btnVerifica = document.querySelector('.bnt-verifica');
const verifica = document.querySelector('.verifica');
class ValidaDocumento {
  constructor(doc) {
    Object.defineProperty(this, 'documentoLimpo', {
      enumerable: true,
      get: function () {
        return doc.replace(/\D+/g, '');
      }
    });
  }
  valida() {
    typeof this.documentoLimpo === 'undefined' ? false : (this.documentoLimpo.length !== 11 && this.documentoLimpo.length !== 14 ? false : true);

    if (this.isSequencia())
      return false;
    const documentoParcial = this.documentoLimpo.slice(0, -2);
    const digito1 = this.criaDigito(documentoParcial);
    const digito2 = this.criaDigito(documentoParcial + digito1);
    const documento = documentoParcial + digito1 + digito2;
    return this.documentoLimpo === documento;
  }

  criaDigito(documentoParcial) {
    const documentoArray = Array.from(documentoParcial);
    let regressivo = documentoArray.length >= 12 ? documentoArray.length - 7 : documentoArray.length + 1;
    
    const total = documentoArray.reduce((acumulador, numDocumento) => {
      acumulador += (regressivo * Number(numDocumento));
      regressivo--;
      regressivo === 1 ? regressivo = 9 : regressivo;
      return acumulador;
    }, 0);
  
    const digito = total % 11;
    return digito < 2 ? '0' : String(11 - digito);
  }
  isSequencia() {
    return (this.documentoLimpo[0].repeat(this.documentoLimpo.length) === this.documentoLimpo);
  }
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

const handleValidation = () => {
  if (!inputVerifica.value) return;
  const documento = new ValidaDocumento(inputVerifica.value);
  const resultado = documento.valida() ? ((documento.documentoLimpo.length === 14) ? ' - CNPJ Válido' : ' - CPF Válido') : ' - Documento Inválido';
  inputVerifica.value += resultado;
  criaTarefa(inputVerifica.value);
  limpaInput();
};

btnVerifica?.addEventListener('click', handleValidation);
inputVerifica?.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    handleValidation();
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
  if (listaDeVerifica === null) return;
  for (let verifica of listaDeVerifica){
    criaTarefa(verifica);
  }
};

adicionaVerificaSalvas();