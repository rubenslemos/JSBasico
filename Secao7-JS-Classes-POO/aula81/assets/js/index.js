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
    const senhaValida = this.senhaValida();
    if (camposValidos && senhaValida) {
      alert('Formulário enviado.');
  /*     this.formulario.submit(); */
    }
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
    return validos;
  }

  senhaValida(){
    let validos = true;

    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha')
    console.log(senha, repetirSenha);
    if(senha.value !== repetirSenha.value){
      this.criaErro(senha, 'Senhas diferentes entre si');
      this.criaErro(repetirSenha, 'Senhas diferentes entre si');
      validos = false;
    }
    if(senha.value.length <6 || senha.value.length >12) {
      this.criaErro(senha, 'A senha deverá ter tamanho de 6 a 12 caracteres');
      this.criaErro(repetirSenha, 'A senha deverá ter tamanho de 6 a 12 caracteres');
      validos = false;
    }    
    return validos;
  }

  validaUsuario(campo){
    const usuario = campo.value;
    let user = true;
    if(usuario.length <3 || usuario.length >12) {
      this.criaErro(campo, 'Usuário deverá ter tamanho de 3 a 12 caracteres');
      user = false;
    }    
    if(!usuario.match(/^[A-Za-z0-9]+$/g)) {
      this.criaErro(campo, 'Usuário só poderá conter letras e/ou números');
      user = false;
    }
    
    return user;
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