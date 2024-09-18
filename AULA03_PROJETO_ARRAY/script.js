var lista = ["alunos1", "alunos2", "alunos3", 100];

//buscando elemento pela posição dentro do array
console.log(lista);
console.log(lista[3]);

//descobrindo o tamanho do array
console.log(lista.length);

//saber se um elemento esta dentro de um array
console.log(lista.indexOf("alunos3"));
console.log(lista.indexOf("alunos4"));

//alternando elemento dentro do array
lista[0] = "Asdrubal";
console.log(lista);

//adicionar um elemento no array
lista.push("alunos4");
console.log(lista);

//removendo o primeiro elemento da lista
lista.shift();
console.log(lista);

//removendo o ultimo elemento da lista
lista.pop();
console.log(lista);

//retornando os elementos de lista com separador
lista.join();
console.log(lista.join("-"));
