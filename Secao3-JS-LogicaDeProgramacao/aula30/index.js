const pessoa ={
    nome: 'Jacinto',
    sobrenome: 'Bucéfalo',
    idade: 32,
    endereco: {
        rua: 'Av. Abestalhado',
        numero: 96
    }
};
console.log((pessoa));

//Atribuição via desestruturação do objeto

const { nome, sobrenome } = pessoa;

//pegando valores de objetos dentro de objetos e setando um valor inexistente padrão gerando uma nova variável

const { idade, sexo = 'Masculino', endereco: {rua: enderecoRua , numero: enderecoNumero, enderecoCep=85684556} } = pessoa;
console.log(nome, sobrenome, idade,sexo,enderecoRua,enderecoNumero,"Cep:",enderecoCep);

//...rest ...spread dentro de um objeto
const {nome: nomE, sobrenome: sobreNome, idade: age , ...demaisDados} = pessoa;
console.log(nomE, sobreNome, age, demaisDados);