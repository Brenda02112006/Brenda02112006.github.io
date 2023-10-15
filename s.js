function dividirNome() {
    var nomeCompleto = document.getElementById("nomeCompleto").value;
    var nomeArray = nomeCompleto.split(" ");
    
    if (nomeArray.length >= 1) {
        document.getElementById("nome").value = nomeArray[0];
        if (nomeArray.length >= 2) {
            document.getElementById("sobrenome").value = nomeArray.slice(1).join(" ");
        } else {
            document.getElementById("sobrenome").value = "";
        }
    } else {
        alert("Por favor, insira um nome completo válido.");
    }
}
