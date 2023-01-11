const inputTexto = document.getElementById('input-texto');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const inputresult = document.getElementById('mensaje-texto');
const btnCopy = document.getElementById('btn-copy');
const soloLetras = '^[a-zA-Z]+$';

document.addEventListener('DOMContentLoaded', () => {
    btnEncriptar.addEventListener('click', encriptarTexto);
    btnDesencriptar.addEventListener('click', desencriptarTexto);
    btnCopy.addEventListener('click', copiarTexto);
});

function encriptarTexto(e) {
    e.preventDefault();
    inputresult.value = '';
    let texto = inputTexto.value;

    if (texto.match(soloLetras) != null) {
        let words = texto.split(' ');
        let newwords = [];

        for (let word of words) {
            word = word.replaceAll('e', 'enter');
            word = word.replaceAll('i', 'imes');
            word = word.replaceAll('a', 'ai');
            word = word.replaceAll('o', 'ober');
            word = word.replaceAll('u', 'ufat');
            word = word.replaceAll('E', 'ENTER');
            word = word.replaceAll('I', 'IMES');
            word = word.replaceAll('A', 'AI');
            word = word.replaceAll('O', 'OBER');
            word = word.replaceAll('U', 'UFAT');

            newwords.push(word);
        }

        const result = newwords.join(' ');

        inputresult.value = result;
    } else {
        mostrarError('Solo se permiten letras minúsculas, sin acentos');
        return;
    }
}

function desencriptarTexto(e) {
    e.preventDefault();
    inputresult.value = '';
    let texto = inputTexto.value;

    if (texto.match(soloLetras) != null) {
        let words = texto.split(" ");
        let newswords = [];

        for (let word of words) {
            word = word.replaceAll('enter', 'e');
            word = word.replaceAll('imes', 'i');
            word = word.replaceAll('ai', 'a');
            word = word.replaceAll('ober', 'o');
            word = word.replaceAll('ufat', 'u');
            word = word.replaceAll('ENTER', 'e');
            word = word.replaceAll('IMES', 'i');
            word = word.replaceAll('AI', 'a');
            word = word.replaceAll('OBER', 'o');
            word = word.replaceAll('UFAT', 'u');
            newswords.push(word);
        }

        const result = newswords.join(' ');

        inputresult.value = result;
    } else {
        mostrarError('Solo se permiten letras minúsculas, sin acentos');
        return;
    }
}

function mostrarError(mensaje) {
    const existeError = document.querySelector('.error');

    if (!existeError) {
        const formulario = document.getElementById('formulario');
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');

        divMensaje.textContent = mensaje;
        formulario.appendChild(divMensaje);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}

function copiarTexto(e) {
    e.preventDefault();
    const mensaje = inputresult.value;

    document.getElementById('input-texto').value = mensaje;
    navigator.clipboard.writeText(mensaje);
}