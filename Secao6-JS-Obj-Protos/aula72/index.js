function ValidaCPF (cpfEnviado){
  Object.defineProperty(this,'cpfLimpo',{
    enumerable:true,
    get: function(){
      return cpfEnviado.replace(/\D+/g, '');
    }
  })
}
ValidaCPF.prototype.valida = function(){
  if (typeof this.cpfLimpo === 'undefined') return false;
  if(this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;
  const cpfParcial = this.cpfLimpo.slice(0,-2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial+digito1);
  const cpf = cpfParcial+digito1+digito2;
   return this.cpfLimpo === cpf;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial){
  const cpfArray = Array.from(cpfParcial);
  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((acumulador, numCpf) => {
    acumulador += (regressivo * Number(numCpf));
    --regressivo;
    return acumulador;
  },0);
  const digito = 11 - (total % 11);
  return digito >9 ? '0' : String(digito)
}
ValidaCPF.prototype.isSequencia = function (){
  return (this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo);
}
const cpf = new ValidaCPF('705.484.450-52');
if (cpf.valida()){
  console.log('Cpf Valido');
}else{
  console.log('Cpf Invalido');
}
