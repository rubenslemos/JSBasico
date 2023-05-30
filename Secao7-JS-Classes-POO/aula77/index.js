//dado primitivo Symbol <- pode ser usado para criar uma chave privada dentro de seu objeto
const _velocidade = Symbol('velocidade');

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }
  //chamando a chave privada com get
  get velocidade() { 
    return this[_velocidade];
  }
  //método para setar o valor
  set velocidade(valor){    
    (typeof valor !== 'number' || valor >= 100 || valor <= 0) ? this[_velocidade] : this[_velocidade] = valor;
  }
  acelerar (){
    (this[_velocidade] >= 100) ? this[_velocidade] : this[_velocidade]++;
  }
  frear (){
    (this[_velocidade] <= 0) ? this[_velocidade] : this[_velocidade]--;
  }
}

const c1 = new Carro('Fusca');

console.log(c1.velocidade);
for (let i = 0; i <=200; i++){
  limite= 10;
  if (c1[_velocidade] >= limite) break;
  c1.acelerar();
  console.log(c1.velocidade);
}
console.log(c1.velocidade);
for (let i = c1.velocidade; i >= 0; i--){
  c1.frear();
  console.log(c1.velocidade);
}