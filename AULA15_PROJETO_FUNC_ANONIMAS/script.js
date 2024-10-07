//Funções Anônimas
//sintaxe ; ()=>()
/* 
() - padrão de passagem do argumento em funções
 => : é a forma que usamos para identificar o termo arrow
() : é o escopo (bloco de código) da função propriamente*/

function somar(a, b) {
  let total = a + b;
  return console.log(total);
}
somar(2, 10);

//atribuindo uma função anônima a uma variável
let subtrair = (num1, num2) => {
  let total = num1 - num2;
  return console.log(total);
};
subtrair(15, 17);

let numero = [1, 2, 3, 10];
numero.map((item) => {
  console.log(item);
});
