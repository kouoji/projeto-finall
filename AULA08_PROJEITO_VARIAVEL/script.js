//criando uma var var
var nome = "Adamastor";
console.log(nome);

if (nome === "Adamastor") {
  var escola = "CESF";
  console.log(escola);
}

console.log(escola);
escola = "Sagrada";
console.log(escola);

//variáveis do tipo var são acessíveis fora do escopo no qual
//foram criadas; isso implica na possibilidade de retribuirmos
//nova valor a elas

//variáveis do tipo let

if (nome === "Adamastor") {
  let curso = "DS";
  console.log(curso);
}
//console.log(curso);
curso = "Culinária";
//cuidado não conseguimos acessar o let curso porque ela só existe
//no escopo em que foi criado
//além de não poder consumir também não podemos sobrescrever
//reatribuindo-lhe outro valor; ao tentarmos fazer
//isso estamos criando um esqueleto dentro do armário
//e induzindo nosso código a bugs
console.log(curso);

//variável do tipo const
const cargo = "estudante";
console.log(cargo);
//tentar reatribuir valor a cargo
cargo = "estagiário";
console.log(cargo);
