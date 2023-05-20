const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(num[0]);
const primeiro = num[0];
console.log(primeiro);
console.log(JSON.stringify(num));
//com a atribuição via desestruturação podemos enviar cada elemento do array para uma variável de forma mais simples.
//operador ... quando usado pra pegar o q sobrou de um objeto/array chama-se rest quando é usado para espalhar ou difundir algo chama-se spread
const [pri, seg, ter, qua, qui, sex, set, oit, non, dec] = num;
console.log(pri, seg, ter, qua, qui, sex, set, oit, non, dec)
const [p, s, t, q, ...resto] = num; //...rest
console.log(p, s, t, q, resto);
/*
índice do array      0        1        2
índice elementos   0 1 2    0 1 2    0 1 2     
*/
    const num2 = [[1,2,3], [4,5,6], [7,8,9]];
    console.log(num2);
    const num3 = [num2[0][1],num2[1][2],num2[2][0]];
    console.log(num3);
//desestruturação de array dentro de array
const [[,,tres], [quatro,,],[,oito,]] = num2;
console.log(tres,quatro, oito);