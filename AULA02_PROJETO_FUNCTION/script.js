let area = document.getElementById("area");
function entrar() {
  let nome = prompt("Digite seu nome");

  if (nome === "" || nome === null) {
    alert("Algo deu errado.");
    area.innerHTML = "Clique no botão para acessar.";
  } else {
    area.innerHTML = `Bem vindo ${nome}.`;
    let botaoSair = document.createElement("button");
    botaoSair.innerText = "Sair da conta";
    botaoSair.onclick = sair;
    area.appendChild(botaoSair);
  }
}

function sair() {
  alert("Até mais nobre!");
  area.innerHTML = "Você saiu.";
}

function mediaAluno(nota1, nota2) {
  let media = (nota1 + nota2) / 2;

  if (media >= 6) {
    console.log(`Que maravilha, você foi aprovado com média de ${media}.`);
  } else if (media < 6) {
    console.log(`Que lamentável, você foi reprovado com média de ${media}.`);
  }
}

function aluno(nome, curso) {
  let mensagem = `Seja bem vindo ${nome} ao curso ${curso}`;
  return console.log(mensagem);
}
