console.log(`\n Trabalhando com Condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio De Janeiro`);

const idadeComprador = 12;
const estaAcompanhada = false;
let temPassagemComprada = false;

const destinoDaViagem = "Salvador";

console.log(`\n Destinos Possíveis`);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < 3) {
  if (listaDeDestinos[contador] == destinoDaViagem) {
    destinoExiste = true;
    break;
  }
  contador += 1;
}

console.log("destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
  console.log("boa viagem corno");
} else {
  console.log("erro inesperado");
}

for (let i = 0; i < 3; i++) {
  if (listaDeDestinos[i] == destinoDaViagem) {
    destinoExiste = true;
  }
}


