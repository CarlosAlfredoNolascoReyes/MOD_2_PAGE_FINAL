function SCROLL_TO_TOP() {
    window.scrollTo({
        top: 0, // Lleva al inicio de la página
        behavior: 'smooth' // Añade una transición suave
    });
}

function copyCode(button) {
    // Encuentra el bloque de código dentro del contenedor
    const codeBlock = button.nextElementSibling.querySelector('code');

    // Crea un elemento temporal para copiar el texto
    const tempElement = document.createElement('textarea');
    tempElement.value = codeBlock.textContent.trim();
    document.body.appendChild(tempElement);

    // Copia el texto al portapapeles
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);

    // Cambia el texto del botón temporalmente
    button.textContent = '¡Copiado!';
    setTimeout(() => {
        button.textContent = 'Copiar código';
    }, 1500);
}
