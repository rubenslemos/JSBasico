class ControleRemoto{
  constructor(tv){
    this.tv=tv;
    this.volume = 0;
  }
  //Método de Instância
  aumentarVolume(){
    this.volume +=2;
  }
  diminuirVolume(){
    this.volume -=2;
  }
  /* 
  Método estático -> é uma função que por algum motivo foi declarada dentro de 
  sua classe e não tem acesso aos dados da instância, assim como qualquer outro 
  método, pode receber valores em seus (). Ao chama-la devemos usar a classe ao 
  invés do nome de algum objeto criado por ela, pois ela não é enviada a este 
  objeto via herança, por isso o this refere-se a CLASSE em si.
  */
  static trocaPilha(){
    console.log('Favor trocar a pilha');
  }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);
controle1.diminuirVolume();
controle1.diminuirVolume();
console.log(controle1.volume);
ControleRemoto.trocaPilha()