const request = async obj => {
  const response = await fetch(obj.url, {method: obj.method});
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.text();
};
const carregaResultado = response => {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = response;
}
const carregaPagina = async el => {
  const href = el.getAttribute('href');
  const objConfig = {
    method: 'GET',
    url: href
  };
  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch (err) {
    console.log('Error:', err.code, '-', err.message.toUpperCase());
  }
};

document.addEventListener('click', async e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();
  if (tag === 'a') {
    e.preventDefault();
    try {
      await carregaPagina(el);
    } catch (err) {
      console.log('Error:', err.code, '-', err.message.toUpperCase());
    }
  }
});