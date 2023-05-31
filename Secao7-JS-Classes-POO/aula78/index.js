class DispositivoEletronico {
  constructor(nome){
    this.nome = nome;
    this.ligado = false;
  }

  ligar(){
    if(this.ligado){
      console.log(this.nome+' já ligado');
      return;
    }
    this.ligado = true;
    console.log(this.nome+' está ligado')
  }

  desligar(){
    if(!this.ligado){
      console.log(this.nome+' já desligado');
      return
    }
    this.ligado= false;
    console.log(this.nome+' está desligado');
  }
}

const d1 = new DispositivoEletronico('Android');
d1.ligar();
d1.ligar();
d1.desligar();
d1.desligar();

class Android extends DispositivoEletronico{
  constructor(nome, cor, modelo){
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
  ligar(){
    if(this.ligado){
      console.log(this.nome+' '+this.cor+' '+this.modelo+' já ligado');
      return;
    }
    this.ligado = true;
    console.log(this.nome+' '+this.cor+' '+this.modelo+' está ligado')
  }

  desligar(){
    if(!this.ligado){
      console.log(this.nome+' '+this.cor+' '+this.modelo+' já desligado');
      return
    }
    this.ligado= false;
    console.log(this.nome+' '+this.cor+' '+this.modelo+' está desligado');
  }
}
const a1 = new Android('Samsung','Azul', 'Galaxy S9');
a1.ligar();
a1.desligar();
console.log(a1);

class Ios extends DispositivoEletronico{
  constructor(nome, cor, modelo){
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
  checar() {
    (this.ligado) ? console.log('Status: Ligado') : console.log('Status: Desligado');
  } 
  ligar(){
    if(this.ligado){
      this.checar();
      return;
    }
    this.ligado = true;
    this.checar();
  }
  
  desligar(){
    if(!this.ligado){
      this.checar();
      return
    }
    this.ligado= false;
    this.checar();
  }
  ficha(){
    console.log('Nome: ' + this.nome);
    console.log('Modelo: ' + this.modelo);
    console.log('Cor: ' + this.cor);
    this.checar();
  }
}
const i1 = new Ios('Iphone','Verde', '14 Pro');
i1.ficha();
console.log(i1);