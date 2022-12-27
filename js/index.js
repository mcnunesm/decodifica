var entradaTexto = document.querySelector("#digitar-texto");
var saidaTexto = document.querySelector("#texto-resultante");
var copiar = document.getElementById("copiar");

function criptografar(){

	var textoDigitado = entradaTexto.value;

	var criptografia = textoDigitado.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g,"ai")
    .replace(/o/g, "ober")
    .replace(/u/g,"ufat");

	document.getElementById('texto-resultante').innerHTML = criptografia;
}

function descriptografar() {

	var texto = entradaTexto.value;

	var descriptografia = texto.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g,"u");

	document.getElementById('texto-resultante').innerHTML =  descriptografia;
} 

function textoArea() {
    document.getElementById("nenhuma-entrada").style.display = "none";
}

function imgArea() {
    document.getElementById("texto-resultante").style.display = "block";
}

function copiar() {
	var btnCopiar = document.getElementById('texto-resultante');

	btnCopiar.select();
	document.execCommand('copy');
	alert("O texto foi copiado :)"); 
}




