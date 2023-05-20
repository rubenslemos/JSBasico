const getTimeFromSeconds= (segundos)=>{
  const data = new Date(segundos * 1000);
  return (data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'GMT'}))
}

const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

const iniciarRelogio = () => {
  return setInterval(() => {
    segundos++;
    relogio.innerHTML = getTimeFromSeconds(segundos);
  }, 1000);
}

document.addEventListener('click', (evento) => {
  const elemento = evento.target;
  if(elemento.classList.contains('iniciar')){
    clearInterval(timer);
    timer = iniciarRelogio();
    relogio.classList.remove('pausado');
  }
  if(elemento.classList.contains('pausar')){
    clearInterval(timer);
    relogio.classList.add('pausado');
  }
  if(elemento.classList.contains('zerar')){
    clearInterval(timer);
    relogio.classList.remove('pausado');
    segundos = 0;
    relogio.innerHTML = '00:00:00';
  }
});