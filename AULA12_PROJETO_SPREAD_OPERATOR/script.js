let primeiros = [1, 2, 3];
let numero = [4, 5, 6];

let justados = [primeiros, numero];
console.log(primeiros);
console.log(numero);
console.log(juntados);

let juntadosSpread = [...primeiros, ...numero];
console.log(juntadosSpread);

//exemplo de spread com objetos
let pessoas = {
  nome: "Arthur",
  idade: 25,
  cargo: "atleta",
};
let dadosPessoa = {
  ...pessoa,
  status: "ativo",
  cidade: "Campo Largo",
};

console.log(pessoa);
console.log(dadosPessoa);
