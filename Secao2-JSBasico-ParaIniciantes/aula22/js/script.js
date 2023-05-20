meuEscopo = () =>{
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');
  const pessoas =[];
  form.addEventListener('submit',evento = (evento) => {
    evento.preventDefault();
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    console.log(nome.value, sobrenome.value, peso.value, altura.value);
    const pessoa = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    }
    console.log(JSON.stringify(pessoa));
    pessoas.push(pessoa)
    let contador = pessoas.length
    console.log(contador);
    console.log(`Pessoas: ${JSON.stringify(pessoas)}`);
    resultado.innerHTML += `<p>Nome = ${pessoas[contador-1].nome} ${pessoas[contador-1].sobrenome}, Peso = ${pessoas[contador-1].peso}, Altura = ${pessoas[contador-1].altura}</p>`
    return pessoa
  });
}
meuEscopo();
