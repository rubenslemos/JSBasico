const data = new Date();
const dia = document.querySelector('#dia');
// dia.innerHTML = `<p>${new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'short'}).format(data)}</p>`
dia.innerHTML = `<p>${data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short'})}</p>`