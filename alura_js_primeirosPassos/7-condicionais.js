console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio De Janeiro`);
const idadeComprador = 22;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log(`Destinos Possíveis`);
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//   console.log("comprador maior de idade");
//   listaDeDestinos.splice(1, 1);
// } else if (estaAcompanhada) {
//   console.log("comprador está acompanhado");
//   listaDeDestinos.splice(1, 1);
// } else {
//   console.log("nao vu vende meo, se é de menó");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("Boa Viagem");
  listaDeDestinos.splice(1, 1);
} else {
  console.log("nao vu vende meo, se é de menó");
}

console.log("Embarque: \n");
if (idadeComprador >= 18 && temPassagemComprada) {
  console.log("Boa Viagem!");
} else {
  console.log("Voce não atende aos requisitos para o embarque");
}


/*--------VALORES LOGICOS----------- (retornam valores do tipo booleano (verdadeiro ou falso)).....
console.log(idadeComprador > 18); //maior que 18.
console.log(idadeComprador >= 18); //maior igual a 18.
console.log(idadeComprador < 18); //menor que 18.
console.log(idadeComprador <= 18); //menor igual a 18.
console.log(idadeComprador == 18); //igual a 18.*/


console.log(listaDeDestinos);


