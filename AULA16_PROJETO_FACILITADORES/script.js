// * Métodos facilitadores - includes, startWith, endsWith
//   (informações dentro de arrays)
// INCLUDES: é case sensitive
let nomes = ["Amir", "Bemir", "Cemir"];
console.log(nomes.includes("Bemir"));
console.log(nomes.includes("AMIR"));

if (nomes.includes("Amir")) {
  console.log("Nome encontrado.");
} else {
  console.log("Nome não encontrado.");
}

// * startsWith
let aluno = "Albano";
console.log(aluno.startsWith("alb"));
console.log(aluno.startsWith("Alb"));

// *endsWith
console.log(aluno.endsWith("Ano"));
console.log(aluno.endsWith("ano"));
