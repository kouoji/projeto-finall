//IMC
/*ABAIXO DE 17 - MUITO ABAIXO DO PESO
ENTRE 17 E 18,49 - ABAIXO DO PESO
ENTRE 18,50 E 24,99 - PESO NORMAL
ENTRE 25 E 29,99 - ACIMA DO PESO
A PARTIR DE 30 - OBESIDADE

IMC = PESO/(ALTURA*ALTURA)
*/

var peso;
var altura;
var imc;
let resultado = document.getElementById("resultado");

function calcular(event) {
  //alert("teste");
  event.preventDefault();

  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;
  imc = peso / altura ** 2;
  console.log(imc);
  if (imc < 17) {
    resultado.innerHTML = `<br/>Seu resultado foi ${imc.toFixed(
      2
    )} <br/> Cuidado, você está muito abaixo do peso.`;
  } else if (imc > 17 && imc < 18.49) {
    resultado.innerHTML = `<br/>Seu resultado foi ${imc.toFixed(
      2
    )} <br/> Você está abaixo do peso.`;
  } else if (imc > 18.5 && imc < 24.99) {
    resultado.innerHTML = `<br/>Seu resultado foi ${imc.toFixed(
      2
    )} <br/> Você está com o peso normal.`;
  } else if (imc > 25 && imc < 29.99) {
    resultado.innerHTML = `<br/>Seu resultado foi ${imc.toFixed(
      2
    )} <br/> Você está acima do peso.`;
  } else {
    resultado.innerHTML = `<br/>Seu resultado foi ${imc.toFixed(
      2
    )} <br/> Você está com obesidade.`;
  }
}
