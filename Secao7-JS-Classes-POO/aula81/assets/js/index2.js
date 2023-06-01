class ValidaDocumento {
  constructor(doc) {
    Object.defineProperty(this, 'documentoLimpo', {
      enumerable: true,
      get: function () {
        return doc.replace(/\D+/g, '');
      }
    });
  }
  valida() {
    typeof this.documentoLimpo === 'undefined' ? false : this.documentoLimpo.length !== 11 ? false : this.isSequencia() ? false : true;
    const documentoParcial = this.documentoLimpo.slice(0, -2);
    const digito1 = this.criaDigito(documentoParcial);
    const digito2 = this.criaDigito(documentoParcial + digito1);
    const documento = documentoParcial + digito1 + digito2;
    return this.documentoLimpo === documento;
  }

  criaDigito(documentoParcial) {
    const documentoArray = Array.from(documentoParcial);
    let regressivo = documentoArray.length + 1;
    const total = documentoArray.reduce((acumulador, numDocumento) => {
      acumulador += (regressivo * Number(numDocumento));
      regressivo--;
      return acumulador;
    }, 0);
    const digito = 11-(total % 11);
    return digito > 9 ? '0' : String(digito);
  }
  isSequencia() {
    return (this.documentoLimpo[0].repeat(this.documentoLimpo.length) === this.documentoLimpo);
  }
};

