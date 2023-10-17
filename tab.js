function js_add_rows(){
    var inputElement = document.getElementById("txtNumRows");
    var inputValue = inputElement.value;
    var table = document.getElementById("sampleTable");

    // limpar erro das anteriores
    var errorElement = document.getElementById("error");
    if (errorElement){
        errorElement.parentNode.removeChild(errorElement);
    }

    // se o valor está no intervalo pedido
    if (isNaN(inputValue) || inputValue < 1 || inputValue > 10){
        var errorMessage = document.createElement("div");
        errorMessage.id = "error";
        errorMessage.textContent = "Valores válidos são entre 1 e 10";
        document.body.appendChild(errorMessage);
        inputElement.value = "";
    } else {
        for (var i = 0; i < inputValue; i++){
            var newRow = table.insertRow(-1);
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            cell1.innerHTML = "nova linha cell1";
            cell2.innerHTML = "nova linha cell2";
        }

        inputElement.value = "";
    }
}

