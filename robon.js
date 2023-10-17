let currentSlide = 0;
const totalSlides = document.querySelectorAll("#slide img").length;

function mudarSlide(delta) {
    currentSlide += delta;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const imagens = document.querySelectorAll("#slide img");
    imagens.forEach((imagem, index) => {
        if (index === currentSlide) {
            imagem.style.display = "block";
        } else {
            imagem.style.display = "none";
        }
    });
}
