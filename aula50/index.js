/* 
  são funções que retornam objetos, esse tipo de função já foi vista de forma 
  superficial, para criação de objetos pessoas em exemplos de aulas anteriores, 
  agora iremos aprofundar mais no assunto. principalmente no conceito do this.

  this se refere ao objeto pedindo pelo parâmetro, por exemplo na função abaixo 
  quem chamou o peso foi o p1 procurando sua referência na função criaPessoa 

  Getter: Ao usar get na frente de um método do objeto ele passa a ter 
  comportamento de atributo 

  Setter: ao usar o set na frente do método do objeto podemos usa-lo como 
  atributo para setar dados dentro do mesmo 
*/
const criaPessoa = (nome, sobrenome, altura, peso) => {
  return { 
    nome, 
    sobrenome,
    altura,
    peso,
    //método com getter
    get nomeCompleto(){
      return `${this.nome} ${this.sobrenome}`
    },
    //método com setter
    set nomeCompleto(valor){
      //separando os nomes
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
      //exibindo os valores conseguidos pelo setter
      console.log('Valores das variáveis do setter: ',valor, this.nome, this.sobrenome);
    },
    //método com getter
    get imc( ) {
      const indice = this.peso/(this.altura**2);
      return indice.toFixed(2);
    },
    //método
    fala(assunto = 'seu cadastro') {
       return `${this.nomeCompleto}: ${this.altura}0m ${this.peso} kg passa seus dados para começar o ${assunto} e seu IMC é: ${this.imc}`;    
  }
  };
}
//criando o objeto
const p1 = criaPessoa('Rubens', 'Lemos', 1.8, 90);
const p2 = criaPessoa('Maria', 'Silva', 1.6, 58);
//setando o nome completo
p1.nomeCompleto = 'Rubens Silva Lemos';
p2.nomeCompleto = 'Maria Silva';
//exibindo os valores no setter
console.log(`Valores extraídos do método nomeCompleto em nomeCompleto: ${p1.nomeCompleto}`);
console.log(`Valores extraídos do método nomeCompleto em nome: ${p1.nome}`);
console.log(`Valores extraídos do método nomeCompleto em sobrenome: ${p1.sobrenome}`);
console.log(`Valores extraídos do método nomeCompleto em nomeCompleto: ${p2.nomeCompleto}`);
console.log(`Valores extraídos do método nomeCompleto em nome: ${p2.nome}`);
console.log(`Valores extraídos do método nomeCompleto em sobrenome: ${p2.sobrenome}`);
//exibindo o return do fala()
console.log(p1.fala());
console.log(p2.fala());

