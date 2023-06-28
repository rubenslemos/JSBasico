// fetch('pessoas.json')
//   .then(resposta => resposta.json())
//   .then(json => carregaElementosNaPagina(json));

 axios('pessoas.json')
  .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
  console.log(json)
  const table = document.createElement('table');
    const tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = 'Nome';
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = 'Idade';
    tr.appendChild(td2);
    
    let td3 = document.createElement('td');
    td3.innerHTML = 'E-mail';
    tr.appendChild(td3);

    let td4 = document.createElement('td');
    td4.innerHTML = 'CPF';
    tr.appendChild(td4);

  table.appendChild(tr);
  
  for(let pessoa of json) {
    const tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = pessoa.nome;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = pessoa.idade;
    tr.appendChild(td2);
    
    let td3 = document.createElement('td');
    td3.innerHTML = pessoa.email;
    tr.appendChild(td3);

    let td4 = document.createElement('td');
    td4.innerHTML = pessoa.cpf;
    tr.appendChild(td4);

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}
