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
