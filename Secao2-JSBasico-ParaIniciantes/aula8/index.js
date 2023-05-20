/*
Rubens Silva Lemos tem 40 anos, pesa 90 kilos
tem 1,80 de altura e seu IMC é de x
Rubens Nasceu em 1982
*/
const nome= 'Rubens Silva Lemos';
let idade = 40;
let peso = 90;
const alturaEmM = 1.80;
let imc;
let nascimento;

imc = peso/(alturaEmM*alturaEmM);
nascimento = 2023-idade-1;

console.log(`${nome} tem ${nascimento} anos, pesa ${peso} kilos`);
console.log(`tem ${alturaEmM}0m de altura e seu IMC é de ${imc}`);
console.log(`Rubens nasceu em ${nascimento}`);