const criaCalculadora = () => {
  return{
    display: document.querySelector('.display'),
    inicia(){
      this.cliqueBotoes();
      this.pressionaEnter();
    },
    cliqueBotoes(){
      document.addEventListener('click', e => {
        const el = e.target;
        if (el.classList.contains('btn-num')){
          this.btnParaDisplay(el.innerText)
        }
        if(el.classList.contains('btn-clear')){
          this.clearDisplay();
        }
        if(el.classList.contains('btn-del')){
          this.deleteOne();
        }        
        if(el.classList.contains('btn-eq')){
          this.total();
        }
      });
    },
    btnParaDisplay(valor){
      this.display.value += valor;
    },
    clearDisplay(){
      this.display.value = '';
    },deleteOne(){
      this.display.value = this.display.value.slice(0, -1);
    },
    total(){
      let conta = this.display.value;
      try {
        conta = eval(conta);
        if(!conta){
          alert('Conta Invalida');
          return
        }
        this.display.value = conta;
      } catch (error) {
          alert('Conta Invalida');
          return
      }
    },
    pressionaEnter(){
      this.display.addEventListener('keyup', e => {
        if(e.keyCode === 13){
          this.total();
        }
      });
    }
  }
}
const calculadora = criaCalculadora();
calculadora.inicia();