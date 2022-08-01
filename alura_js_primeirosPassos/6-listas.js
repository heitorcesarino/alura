console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio De Janeiro`); //como criar uma lista de itens que sao numerados de 0, 1, 2 ... em diante//
listaDeDestinos.push(`Curitiba`); //funcao js que adiciona um item no array (lista)//
console.log(`Destinos Possíveis`);
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); //funcao que retira um item,  dado sua posicao dentro da lista//
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);
