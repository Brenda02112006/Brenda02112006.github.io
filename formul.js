function validarDataNascimento() {
    var dataNascimentoInput = document.getElementById("dataNascimento");
    var dataNascimento = new Date(dataNascimentoInput.value);

    if (isNaN(dataNascimento.getTime())) {
        alert("Por favor, insira uma data de nascimento válida.");
        dataNascimentoInput.value = ""; // Limpa o campo de data
    }
}

// Adicione um ouvinte de evento para chamar a função quando o campo de data perde o foco
var dataNascimentoInput = document.getElementById("dataNascimento");
dataNascimentoInput.addEventListener("blur", validarDataNascimento);

document.getElementById("formulario").addEventListener("submit", function (event) {
    var emailInput = document.getElementById("email");
    if (!emailInput.checkValidity()) {
        alert("Por favor, insira um endereço de e-mail válido.");
        event.preventDefault(); // Impede o envio do formulário se o email estiver incorreto
    }
});

var checkboxes = document.querySelectorAll('input[type="checkbox"]');
var opcoesSelecionadas = 0;

for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', function() {
        if (this.checked) {
            opcoesSelecionadas++;
        } else {
            opcoesSelecionadas--;
        }

        if (opcoesSelecionadas < 3) {
            alert("Selecione pelo menos 3 opções.");
            this.checked = true; // Impede desmarcar as opções
        }
    });
}
