function ValidaDocumento (cnpjEnviado){
  Object.defineProperty(this,'documentoLimpo',{
    enumerable:true,
    get: function(){
      return cnpjEnviado.replace(/\D+/g, '');
    }
  })
}
ValidaDocumento.prototype.valida = function(){
  if (typeof this.documentoLimpo === 'undefined') return false;
  if(this.documentoLimpo.length !== 11 && this.documentoLimpo.length !== 14) return false;
  if (this.isSequencia()) return false;
  const documentoParcial = this.documentoLimpo.slice(0,-2);
  const digito1 = this.criaDigito(documentoParcial);
  const digito2 = this.criaDigito(documentoParcial+digito1);
  const documento =documentoParcial+digito1+digito2;
  return this.documentoLimpo === documento;
};

ValidaDocumento.prototype.criaDigito = function(documentoParcial){
  const documentoArray = Array.from(documentoParcial);
  if(documentoArray.length >= 12 ){
  let regressivo = documentoArray.length -7;
  const total = documentoArray.reduce((acumulador, numDocumento) => {
    acumulador += (regressivo * Number(numDocumento));
    --regressivo;
    regressivo === 1 ? regressivo = 9 : regressivo
    return acumulador;
  },0);
  const digito = (total % 11);
  return digito < 2 ? '0' : String(11-digito)
}else {
  regressivo = documentoArray.length +1;
  const total = documentoArray.reduce((acumulador, numDocumento) => {
    acumulador += (regressivo * Number(numDocumento));
    --regressivo;
    return acumulador;
  },0);
  const digito = 11 - (total % 11);
  return digito >9 ? '0' : String(digito)
};
}
ValidaDocumento.prototype.isSequencia = function (){
  return (this.documentoLimpo[0].repeat(this.documentoLimpo.length) === this.documentoLimpo);
}
const documento = new ValidaDocumento('067.887.516-25');
if (documento.valida()){
    if(documento.documentoLimpo.length === 14){
  console.log('CNPJ Válido');
  }else{
    console.log('CPF Válido');
  }
}else{
  console.log('CNPJ Inválido');
}
