const elemento = document.getElementById('textoDigitado');
const textoOriginal = elemento.innerHTML; // Pega o texto do HTML
const texto = textoOriginal.replace(/<br>/g, '\n'); // Substitui <br> por \n para o processamento
let index = 0;

elemento.innerHTML = ''; // Limpa o conteúdo inicialmente

function digitarTexto() {
    if (index < texto.length) {
        elemento.innerHTML += texto.charAt(index);
        if (texto.charAt(index) === '\n') {
            elemento.innerHTML += '<br>'; // Adiciona <br> para quebras de linha
        }
        index++;
        setTimeout(digitarTexto, 100); // Ajuste a velocidade aqui
    }
}

window.onload = digitarTexto;

// Som de seleção (ao passar o mouse)
const soundSelect = new Audio('./sounds/select.mp3'); // Som ao passar o mouse

let hasMouseMoved = false; // Flag para rastrear se o mouse já passou sobre um item

// Detecta o primeiro movimento do mouse após o carregamento da página
document.addEventListener('mousemove', () => {
    hasMouseMoved = true; // Marca que o mouse foi movido
});

// Adicionando o som de seleção em cada item do menu
document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Somente toca o som se o mouse tiver se movido desde o carregamento da página
        if (hasMouseMoved) {
            soundSelect.currentTime = 0; // Reinicia o som desde o início
            soundSelect.play(); // Toca o som
        }
    });
});


