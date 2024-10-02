// * construir um objeto.
let pessoa = {
  nome: "Lucas",
  sobrenome: "Gelenski",
  empresa: "Google",
  cargo: "CTO",
};

// * consumindo objeto.
console.log(pessoa);

// * consumo de características do propriedades.
console.log(pessoa.nome);
console.log(pessoa.cargo);

// * desconstruindo o objeto.
// const { nome, cargo, empresa } = pessoa;
// console.log(nome, cargo, empresa);

// * tratando o nome da variável nome para nomePessoa.
let nome = "TESTE";
const { nome: nomePessoa, cargo, empresa } = pessoa;
console.log(nome, nomePessoa, cargo, empresa);

// * desconstrução de arrays
let nomes = ["Anna", "Alessandro", "Arthur", "Lucas"];
console.log(nomes);
console.log(nomes[1]);

let { 0: primNome, 1: segNome, 2: tercNome } = nomes;
console.log(primNome);
console.log(tercNome);

//outra forma de desconstruir o array
let [nomeA, nomeB, nomeC] = nomes;
console.log(nomeA);
console.log(nomeC);
