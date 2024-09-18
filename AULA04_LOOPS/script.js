/*// * While = "Enquanto"
let x = 0;

document.write("Testando o loop <b>while</b>:<br>");
while (x < 10) {
  document.write(`<br>O valor de x é: <b>${x}</b>`);
  x++;
}

// * For = "Para"
let valor = 13;

document.write("<br><br> Testando o loop <b>for</b>:<br>");
for (let a = 0; a <= valor; a++) {
  document.write(`<br>O valor de a é: <b>${a}</b>`);
  console.log(a * 2);
}*/

// * Switch = "Troca"
function pedir() {
  let escolha = Number(prompt("Digite o número do seu pedido:"));

  switch (escolha) {
    case 1:
      alert("Você escolheu um suco.");
      break;
    case 2:
      alert("Você escolheu uma água gelada.");
      break;
    case 3:
      alert("Você escolheu um sorvete.");
      break;
    case 4:
      alert("Você chamou o garçom.");
      break;
    default:
      alert("Escolha uma opção válida.");
      break;
  }
}
