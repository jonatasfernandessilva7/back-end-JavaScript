function soma(){

	let value1 = document.getElementById('valor1').value;
	let value2 = document.getElementById('valor2').value;

	var soma = parseFloat(value1)+parseFloat(value2);

	let resultado = document.getElementById('resultado').value = soma;

}

function subtrair(){

	let value1 = document.getElementById('valor1').value;
	let value2 = document.getElementById('valor2').value;

	var subtraindo = parseFloat(value1)-parseFloat(value2);

	let resultado = document.getElementById('resultado').value = subtraindo;

}

function multiplicar(){

	let value1 = document.getElementById('valor1').value;
	let value2 = document.getElementById('valor2').value;

	var multiplicando = parseFloat(value1)*parseFloat(value2);

	let resultado = document.getElementById('resultado').value = multiplicando;

}

function dividir(){

	let value1 = document.getElementById('valor1').value;
	let value2 = document.getElementById('valor2').value;

	var dividindo = parseFloat(value1)/parseFloat(value2);

	let resultado = document.getElementById('resultado').value = dividindo;

}


window.onload = () => {

	var BotaoSoma = document.getElementById("mostraResultadoSoma");
    var BotaoSubtracao = document.getElementById("mostraResultadoSubtração");
    var BotaoMultiplicar = document.getElementById("mostraResultadoMultiplicação");
    var BotaoDividir = document.getElementById("mostraResultadoDivisão");

	BotaoSoma.onclick = () => {
    	soma();
	}

    BotaoSubtracao.onclick = () => {
    	subtrair();
	}

    BotaoMultiplicar.onclick = () => {
    	multiplicar();
	}

    BotaoDividir.onclick = () => {
    	dividir();
	}
}