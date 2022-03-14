function Converter() {
	var valorKm = parseFloat(document.getElementById("distanciaKm").value);
	var valorAnoLuz = (valorKm * 0.0000000000001057).toFixed(16);
	console.log(valorAnoLuz);

	var elementoConvertido = document.getElementById("resultadoAnosLuz");
	var resultadoAnosLuz = "Você viajará " + valorAnoLuz + " anos-luz";
	elementoConvertido.innerHTML = resultadoAnosLuz;
}
