const inputTarefa = document.querySelector('.input-tarefa');
const bntTarefa = document.querySelector('.bnt-tarefa');
const tarefas = document.querySelector('.tarefas');

const salvarTarefas = () => {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];
  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

const criaTarefas = (textoInput) => {
  criaLis(textoInput);
  salvarTarefas();
}

const criaLis = (textoInput) => {
  const li = document.createElement('li');
  li.innerHTML = textoInput;
  tarefas.appendChild(li);
  criarBotaoApaga(li);
 }
const limpaInputs = () => {
  inputTarefa.value ='';
  inputTarefa.focus();
}
const criarBotaoApaga = (li) => {
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  botaoApagar.setAttribute('class', 'btn-apagar');
  botaoApagar.setAttribute('title', 'Apagar esta tarefa');
  li.appendChild(botaoApagar);
}

bntTarefa?.addEventListener('click', () => {
  if (!inputTarefa.value) return;
  criaTarefas(inputTarefa.value);
  limpaInputs()
});

inputTarefa?.addEventListener('keypress', (event) => {
  if (event.key === 'Enter'){ 
    if (!inputTarefa.value) return;
    criaTarefas(inputTarefa.value);
    limpaInputs()
  }
});
document.addEventListener('click', (e) => {
   if (e.target.classList.contains('btn-apagar')){
    e.target.parentElement.remove();
    salvarTarefas();
  } 
});

const adicionaTarefasSalvas= () => {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);
  if (listaDeTarefas === null) return;
  for (let tarefa of listaDeTarefas){
    criaTarefas(tarefa);
  }
}
adicionaTarefasSalvas();