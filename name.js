function calcularIMC() {
    var nome = document.getElementById("nome").value;
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
        var imc = peso / (altura * altura);
        var resultado = nome + ", seu IMC é: " + imc.toFixed(2);
        document.getElementById("resultado").innerHTML = resultado;
    } else {
        alert("Por favor, insira valores válidos para nome, peso e altura.");
    }
}
