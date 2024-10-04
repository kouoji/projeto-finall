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
//faz uma busca dentro do array e
//retorna o primeiro valor encontrado

let listagem = [2, 3, 4, 5, 6];

let busca = listagem.find((item2) => {
  return item2 === "professor";
});

console.log(busca);
