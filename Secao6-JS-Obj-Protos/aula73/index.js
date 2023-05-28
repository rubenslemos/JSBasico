/* Polimorfismo, é a maneira de fazer métodos de sub-classes se comportarem de maneira diferente em cada sub-classe, sendo que classe é a mesma coisa que função construtora e sub-classe é uma classe filha de uma outra função construtora*/
/* Como exemplo para essa aula iremos fazer uma função principal de conta bancaria, depois faremos 2 funções filhas dela, conta corrente e conta poupança e um metodo saque que se comportará de maneira diferente para cada uma dessas funções dependendo das suas necessidades */
//Super classe
function Conta (agencia, conta, saldo){
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
  if (this.saldo < valor) {
    console.log(' ');
    console.log('Saldo insuficiente, não é possível sacar R$', valor.toFixed(2), 'reais. Saldo atual R$', this.saldo.toFixed(2), 'reais')
    return;
  }
  console.log(' ');
  console.log('Antes do Saque');
  this.verSaldo();
  this.saldo -= valor;
  console.log('Após Saque');
  this.verSaldo();
};
Conta.prototype.depositar = function(valor){
  console.log(' ');
  console.log('Antes do depósito');
  this.verSaldo();
  this.saldo += valor;
  console.log('Após depósito');
  this.verSaldo();
};
Conta.prototype.verSaldo = function(){
  console.log(`Ag/C: ${this.agencia}/${this.conta}| Saldo: R$ ${this.saldo.toFixed(2)}`)
};
const conta1 = new Conta(11,22,100);
conta1.depositar(75);
conta1.sacar(180);
conta1.sacar(150);

function ContaCorrente (agencia, conta, saldo, limite){
  Conta.call(this,agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
  if ((this.saldo + this.limite) < valor) {
    console.log(' ');
    console.log('Saldo insuficiente, não é possível sacar R$', valor.toFixed(2), 'reais. Limite de saque R$', (this.saldo+this.limite).toFixed(2), 'reais')
    this.verSaldo();
    return;
  }
  console.log(' ');
  console.log('Antes do Saque');
  this.verSaldo();
  this.saldo -= valor;
  console.log('Após Saque');
  this.verSaldo();
};

const contaCorrente = new ContaCorrente(12,22,100,100);
console.log(' ');
console.log(' ');
console.log('Conta Corrente');
console.log(' ');
contaCorrente.depositar(75);
contaCorrente.sacar(180);
contaCorrente.sacar(150);

function ContaPoupanca (agencia, conta, saldo){
  Conta.call(this,agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaPoupanca = new ContaPoupanca(12,22,100);
console.log(' ');
console.log(' ');
console.log('Conta Poupanca');
console.log(' ');
contaPoupanca.depositar(75);
contaPoupanca.sacar(180);
contaPoupanca.sacar(150);