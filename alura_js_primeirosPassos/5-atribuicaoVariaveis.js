console.log("trabalhando com atribuição  de variáveis");

//const idade = 21;
const primeiroNome = "heitor";
const sobrenome = "cesarino";

//console.log(nome + " " + sobrenome);//
//ou//
console.log(primeiroNome, sobrenome);
console.log(`Meu Nome é ${primeiroNome} ${sobrenome}`);

let contador = 0;
contador = contador++;

//boas praticas sao: declarar menos variaveis let(que mudam) e mais const(nao mudam) para facilitar o debug//
const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

let idade; //declarando variável
idade = 26; //atribuindo valor
idade = idade + 1;
console.log(idade);

