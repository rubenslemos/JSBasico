function Calculadora() {
    const tabela = document.querySelector('.calculadora')
    this.display = tabela.querySelector('.display');
    this.inicia = () => {
      this.cliqueBotoes();
      this.pressionaEnter();
    }
    this.cliqueBotoes= () => {
      document.addEventListener('click', e => {
        const el = e.target;
        if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
        if(el.classList.contains('btn-clear')) this.clearDisplay();
        if(el.classList.contains('btn-del')) this.deleteOne();        
        if(el.classList.contains('btn-eq')) this.total();
      });
    };
    this.btnParaDisplay = valor => {
      this.display.value += valor;
      this.display.focus();
    }
    this.clearDisplay = () => this.display.value = '';
    this.deleteOne= () => this.display.value = this.display.value.slice(0, -1);
    this.total = () => {
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
    this.pressionaEnter = () => this.display?.addEventListener('keyup', e => {if(e.keyCode === 13) this.total();});
}
const calculadora = new Calculadora();
calculadora.inicia();