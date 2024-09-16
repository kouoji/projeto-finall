let area = document.getElementById("area");
function entrar() {
  let nome = prompt("Digite seu nome");
  return (area.innerHTML = `Bem vindo ${nome}.`);
}

let botaoSair = document.createElement("button");
