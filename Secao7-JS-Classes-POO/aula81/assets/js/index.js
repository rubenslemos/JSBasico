class ValidaFormulario {
  constructor(){
    this.formulario = document.querySelector('.formulario');

    this.eventos();
  }
  eventos (){
    this.formulario.addEventListener('submit', e =>{
      this.handleSubmit(e);
    });
  }
  handleSubmit(e){
    e.preventDefault();
    const camposValidos = this.camposValidos();
  }
  camposValidos(){
    let validos = true;
    for(let errorText of this.formulario.querySelectorAll('.error-text')){
      errorText.remove()
    }
    for(let campo of this.formulario.querySelectorAll('.validar')){
      const label = campo.previousElementSibling.innerText;
      if(!campo.value){
        this.criaErro(campo, `Campo "${label}" não pode ser enviado em branco`);
        validos = false;
      }
      if(campo.classList.contains('cpf')){
        if(!this.validaCPF(campo)) validos = false;
      }   
      if(campo.classList.contains('usuario')){
        if(!this.validaUsuario(campo)) validos = false;
      }   

    }
  }
  validaUsuario(){
    
  }
  validaCPF(campo) {
    const cpf = new ValidaDocumento(campo.value);
    if(!cpf.valida()){
      this.criaErro(campo, 'CPF Inválido.');
      return false;
    }
    return true;
  }
  criaErro(campo, msg){
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);

  }
}

const valida = new ValidaFormulario();