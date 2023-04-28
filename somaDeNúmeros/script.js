function soma(){

	let value1 = document.getElementById('valor1').value;
	let value2 = document.getElementById('valor2').value;

	var soma = parseInt(value1)+parseInt(value2);

	let resultado = document.getElementById('resultado').value = soma;

}


window.onload = () => {
	var BotaoSoma = document.getElementById("mostraResultado");

	BotaoSoma.onclick = () => {
    	soma();
	}
}