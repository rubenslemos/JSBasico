class ValidaCNPJ {
  constructor(cnpjEnviado) {
    Object.defineProperty(this, 'cnpjLimpo', {
      enumerable: true,
      get: function () {
        return cnpjEnviado.replace(/\D+/g, '');
      }
    });
  }
  valida() {
    if (typeof this.cnpjLimpo === 'undefined')
      return false;
    if (this.cnpjLimpo.length !== 14)
      return false;
    if (this.isSequencia())
      return false;
    const cnpjParcial = this.cnpjLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cnpjParcial);
    const digito2 = this.criaDigito(cnpjParcial + digito1);
    const cnpj = cnpjParcial + digito1 + digito2;
    return this.cnpjLimpo === cnpj;
  }
  criaDigito(cnpjParcial) {
    const cnpjArray = Array.from(cnpjParcial);
    let regressivo = cnpjArray.length - 7;
    const total = cnpjArray.reduce((acumulador, numCnpj) => {
      acumulador += (regressivo * Number(numCnpj));
      --regressivo;
      regressivo === 1 ? regressivo = 9 : regressivo;
      return acumulador;
    }, 0);
    const digito = (total % 11);
    return digito < 2 ? '0' : String(11 - digito);
  }
  isSequencia() {
    return (this.cnpjLimpo[0].repeat(this.cnpjLimpo.length) === this.cnpjLimpo);
  }
}

const cnpj = new ValidaCNPJ('11.444.777/0001-61');
if (cnpj.valida()){
  console.log('CNPJ Valido');
}else{
  console.log('CNPJ Invalido');
}
