const elemento = document.getElementById('textoDigitado');
const texto = elemento.innerHTML; // Pega o texto do HTML
let index = 0;

elemento.innerHTML = ''; // Limpa o conteúdo inicialmente

function digitarTexto() {
    if (index < texto.length) {
        elemento.innerHTML += texto.charAt(index);
        index++;
        setTimeout(digitarTexto, 100); // Ajuste a velocidade aqui
    }
}

window.onload = digitarTexto;
