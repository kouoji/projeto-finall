let texto = document.getElementById("texto");
let intervalo;
function interval() {
  let tempo = document.getElementById("tempo").value;
  intervalo = setInterval(() => {
    texto.innerHTML += "Printando usando setInterval;<br/>";
  }, tempo);
}

function stop() {
  clearInterval(intervalo);
}

function timeout() {
  let tempo = document.getElementById("tempo").value;
  setTimeout(() => {
    texto.innerHTML = "Printando usando setTimeout.<br/>";
  }, tempo);
}
