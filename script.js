// * Rest Operator
// function listaAlunos(alunos) {
//   console.log("Sejam bem vindos alunos!!");
//   console.log(alunos);
// }
// listaAlunos("Adamastor", "Benevides", "Desidério", "Demerval");
// function listaAlunos(...alunos) {
//   console.log("Sejam bem vindos alunos!!");
//   console.log(alunos);
// }

// listaAlunos("Adamastor", "Benevides", "Desidério", "Demerval");

// * Sortear números em uma lista
function sorteadorNumero(...numeros) {
  const numeroSorteado = numeros[Math.floor(Math.random() * numeros.length)];
  return console.log(`O número sorteado é o ${numeroSorteado}.`);
}

sorteadorNumero(2, 3, 5, 7, 11, 13, 17, 19);
