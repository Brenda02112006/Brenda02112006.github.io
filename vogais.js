const input = document.querySelector("#text");
const bt = document.querySelector("#bt-contar");
const txtFrase = document.querySelector("#texto");
const txtVogaisQnt = document.querySelector("#qnt-vogais");

bt.addEventListener("click", mostrarInfo);
input.addEventListener("keyup", (keyPressed) => {
    if (keyPressed.key !== "Enter") return;
    mostrarInfo();
});

const vogais = ["a", "e", "i", "o", "u"];

function mostrarInfo () {
    const texto = input.value;
    const qntVogais = contarVogais(texto);
    txtFrase.innerText = texto;
    txtVogaisQnt.innerText = qntVogais;
}

function contarVogais(texto) {
    const noSpecialCaracter = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const vogaisNoTexto = noSpecialCaracter.split("").filter((letra) => vogais.includes(letra));
    return vogaisNoTexto.length;
}
