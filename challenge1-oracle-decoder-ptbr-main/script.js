
/* Regras Codificador:
"e" é convertido para "enter"
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação
*/

/* Regras Decodificador:
"enter" é convertido para "e"
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação
*/

var botaoCripto = document.querySelector('#btn-cripto');
var texto = document.querySelector("#input-texto");

botaoCripto.addEventListener('click', function () {

  var textoInserido = texto.value;

  var textoResultado = document.querySelector('#msg');

  var textoCriptografado = textoInserido.replace(/a/gi, 'ai').replace(/e/gi, 'ei').replace(/i/gi, 'imes').replace(/0/gi, 'ober').replace(/u/gi, 'ufat');

  textoResultado.value = textoCriptografado;

});












