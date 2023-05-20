
const retornaHora = (data) => {
  return data.toLocaleTimeString('pt-BR', {/* hour: '2-digit', minute: '2-digit', second: '2-digit', */ hour12: false });
}
  const data = retornaHora(new Date());
  const timer = setInterval(() => {console.log(data.toString());}, 1000);
  setTimeout(() => {clearInterval(timer)}, 6000);
  setTimeout(() => {clearInterval(console.log('Contador de hora parou'))}, 7000);
