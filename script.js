const boton = document.getElementById('mi-boton');
const texto = document.getElementById('texto-interactivo');

function cambiarTexto() {
    texto.textContent = "¡Sorpresa! El texto ha cambiado gracias a JavaScript. ";
    texto.style.color = "green"; 
    texto.style.fontWeight = "bold";
}

boton.addEventListener('click', cambiarTexto);