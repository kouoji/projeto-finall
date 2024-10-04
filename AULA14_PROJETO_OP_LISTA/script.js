// * Map
let lista = ["Aristóteles", "Anaxágoras", "Demócrito"];
lista.map((item, index) => {
  console.log(`Posição ${index}: ${item}`);
});

// * Reduce
let numeros = [2, 3, 5];
let total = numeros.reduce((acumulador, numero, index, original) => {
  console.log(`${acumulador} - total até o momento.`);
  console.log(`${numero} - valor atual.`);
  // console.log(`${index} - posição atual.`);
  // console.log(`${original} - array original.`);
  console.log("-----------------------------");
  return (acumulador += numero);
});

console.log(`Total do reduce ${total}`);

//FIND
//Faz uma busca dentro do array e retorna o primeiro valor encontrado

let listagem = [2, 3, 4, 5, 6];

let busca = listagem.find((item2) => {
  return item2 > 4;
});
console.log(busca);

//FILTER
//Filtra elementos dentro de um array
//retorno de filter é um array
let palavras = ["alface", "beterraba", "cenoura", "dill"];

//Vamos criar um filtro retornando palavras que tem menos de 7 caracteres

resultado = palavras.filter((item3) => {
  return item3.length > 7;
});
console.log(resultado);

//Implemente o código que retorna do array listagem, todos aqueles que são maiores que 4

let numero = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let ordem = numero.filter((item4) => {
  return item4 > 4;
});
console.log(ordem);
