let umaString = "Use barra \ (antes do carácter) para usar \"\"\" dentro de uma string q recebe valor com aspas duplas";
console.log(umaString);
umaString = 'Esse recurso funciona também para usar \'\' aspas simples dentro de uma string q recebe valor com aspas simples';
console.log(umaString);
//pegar o carácter de um determinado índice
console.log(`Carácter no índice 5: ${umaString.charAt(5)}`);
//concatenação
console.log(umaString.concat(', só para concatenar'));
console.log(umaString + ', só para concatenar usando o + ao invés do concat');
console.log(`${umaString}, só para concatenar, usando template string (dê preferencia a este)`);
//descobrir o index inicial de uma palavra. Obs se procurar uma palavra inexistente retornará índice -1 (indexOf é case sensitive)
console.log(`Índice da palavra Esse: ${umaString.indexOf('Esse')}`);
console.log(`Índice da palavra esse: ${umaString.indexOf('esse')}`);
console.log(`Índice da palavra funciona: ${umaString.indexOf('funciona')}`);
//vc tb pode mandar começando procurar a partir de um determinado local da string da posição pedida pra frente
console.log(`Índice da palavra funciona Usando indexOf buscando a partir de uma posição: ${umaString.indexOf('funciona', 5)}`);
console.log(`Índice da palavra funciona Usando indexOf buscando a partir de uma posição: ${umaString.indexOf('funciona', 14)}`);
//vc tb pode mandar começando procurar a partir de um determinado local da string da posição pedida pra trás
console.log(`Índice da palavra funciona usando lastIndexOf buscando a partir de uma posição: ${umaString.lastIndexOf('funciona', 25)}`);
console.log(`Índice da palavra funciona usando lastIndexOf buscando a partir de uma posição: ${umaString.lastIndexOf('funciona', 12)}`);
//.match (expressão regular que retornara o q for pedido na mesma)
console.log(umaString.match(/[a-z]/g));
console.log(umaString.match(/[a-z]/));
console.log(umaString.match(/[A-Z]/g));
console.log(umaString.match(/[A-Z]/));
//.search retorna o índice da informação pedida
console.log(umaString.search(/[a-z]/g));
console.log(umaString.search(/[a-z]/));
console.log(umaString.search(/[A-Z]/g));
console.log(umaString.search(/[A-Z]/));
//.replace substituir uma palavra ou letra ou todas as letras determinadas por outra
console.log(`Substituição da palavra funciona: ${umaString.replace('funciona', 'vigora')}`);
console.log(`Substituição da letra f: ${umaString.replace(/f/, 'F')}`);
//usando a flag g eu substituo todas as letras achadas pela q determinei
console.log(`Substituição das letra o: ${umaString.replace(/o/g, '0')}`);
//retorna o tamanho da string
console.log(`Tamanho de umaString: ${umaString.length}`);
//cortar uma string
console.log(`umaString cortada num intervalo: ${umaString.slice(4, 41)}`);
console.log(`umaString cortada num intervalo ate o length dela: ${umaString.slice(4, umaString.length)}`);
console.log(`umaString cortada num intervalo ate o length dela menos outro intervalo: ${umaString.slice(4, umaString.length-18)}`);
//separar a string em array usando uma letra ou palavra pra se separar
console.log(umaString.split(' '));
console.log(umaString.split('aspas'));
//o valor usado pra fazer o split não fará parte do resultado.