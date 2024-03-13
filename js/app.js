const mensajeEntrada = document.getElementById('mensaje');
const mostrarMensaje = document.getElementById('muestraMensaje');
const muneco = document.getElementById('muneco');
const copiar = document.getElementById('divCopiar');

textos('h1', 'Encriptador de Texto');

textos('pTitulo', 'Challenge ONE G6');

mensajesInicio();

function textos(elemento, texto) {
    let elementoHTML = document.querySelector(elemento) || document.getElementById(elemento);;
    elementoHTML.innerHTML = texto;
}

function mensajesInicio() {
    textos('h2', 'Ningún mensaje fue encontrado');
    textos('h4', 'Solo letras minúsculas y sin acentos');
    copiar.style.display = 'none';

}
// Event listener para el textarea
mensajeEntrada.addEventListener('input', function(e) {

    // Obtén el valor del textarea
    const textoIngresado = e.target.value;
    // Modifica mayúsculas, elimina acentos y caracteres especiales
    const textoIngresadoModificado = textoIngresado
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[¡!´¨°|¬`@#$%^&*"()=_+{}\[\]:;<>.?~\\/-]/g, "")
        .toLowerCase();
    e.target.value = textoIngresadoModificado;

    // Limpiar contenido de mostrarMensaje cada vez que el texto cambia
    eliminarMensajeEncriptado();

    // Si no se cumplen las condiciones anteriores, actualiza los textos de los elementos HTML
    textos('h2', textoIngresado === '' ? 'Ningún mensaje fue encontrado' : 'Se encontró un mensaje');
    textos('h3', textoIngresado === '' ? 'Ingresa el texto que desees encriptar o desencriptar' : 'Listo para trabajar');
    textos('muestraMensaje', textoIngresado === '' ? '' : '');

    // Oculta la imagen si el input no está vacío, de lo contrario, muéstrala
    muneco.style.display = mostrarMensaje.value == '' ? 'none' : 'inline';
    copiar.style.display = 'none';
});



function encriptar() {
    //validar si  el mensaje está encriptado o no y mostrar un mensaje en el h1
    const mensajeIngresado = mensajeEntrada.value.trim();
    if (mensajeIngresado !== '') {
        if (mensajeIngresado.includes('ai') ||
            mensajeIngresado.includes('enter') ||
            mensajeIngresado.includes('imes') ||
            mensajeIngresado.includes('ober') ||
            mensajeIngresado.includes('ufat')) {

            textos('h2', 'Este mensaje está encriptado');
            textos('h3', '¡Desencriptalo!');
            console.log('mensaje encriptado');

        } else {

            function llaves(match) {
                switch (match) {
                    case 'a':
                        return 'ai';
                    case 'e':
                        return 'enter';
                    case 'i':
                        return 'imes';
                    case 'o':
                        return 'ober';
                    case 'u':
                        return 'ufat';
                    default:
                        return match; // Devuelve el mismo valor si no es una vocal
                }
            }
            const mensajeEncriptado = mensajeEntrada.value.replace(/[aeiou]/g, llaves);

            // Imprime el mensaje codificado en la consola
            console.log(mensajeEncriptado);

            // Actualiza el contenido del elemento 'muestraMensaje'
            mostrarMensaje.textContent = mensajeEncriptado;
            // Oculta la imagen si el input no está vacío, de lo contrario, muéstrala
            muneco.style.display = mensajeEntrada.value !== '' ? 'none' : 'inline';
            copiar.style.display = mostrarMensaje.value == '' ? 'none' : 'inline';
            // Actualiza los textos de los elementos HTML
            textos('h2', mensajeEntrada.value === '' ? '' : '');
            textos('h3', mensajeEntrada.value === '' ? '' : '');
            limpiarMensajeEntrada();
        }
    } else {
        console.log('no hay mensaje para encriptar')
        textos('h3', 'Ingresa un mensaje para encriptar');
    }
}

function desencriptar() {
    //validar si  el mensaje esta encriptado o desencriptado y mostrar un mensaje en el h1
    const mensajeIngresado = mensajeEntrada.value.trim();
    if (mensajeIngresado !== '') {
        if (mensajeIngresado.includes('ai') ||
            mensajeIngresado.includes('enter') ||
            mensajeIngresado.includes('imes') ||
            mensajeIngresado.includes('ober') ||
            mensajeIngresado.includes('ufat')) {

            // Proceso de desencriptación
            function llaves(match) {
                switch (match) {
                    case 'ai':
                    case 'enter':
                    case 'imes':
                    case 'ober':
                    case 'ufat':
                        return match.charAt(0); // Devuelve la primera letra de la subcadena
                    default:
                        return match; // Devuelve el mismo valor si no es una subcadena encriptada
                }
            }

            const mensajeDesencriptado = mensajeIngresado.replace(/ai|enter|imes|ober|ufat/g, llaves);

            // Imprime el mensaje desencriptado en la consola
            console.log('Mensaje desencriptado:', mensajeDesencriptado);

            // Actualiza el contenido del elemento 'muestraMensaje'
            mostrarMensaje.textContent = mensajeDesencriptado;
            // Oculta la imagen si el input no está vacío, de lo contrario, muéstrala
            muneco.style.display = mensajeIngresado !== '' ? 'none' : 'inline';
            copiar.style.display = mostrarMensaje.value == '' ? 'none' : 'inline';
            // Actualiza los textos de los elementos HTML
            textos('h2', mensajeIngresado === '' ? '' : '');
            textos('h3', mensajeIngresado === '' ? '' : '');
            limpiarMensajeEntrada();

        } else {

            textos('h2', 'Tu mensaje está vulnerable');
            textos('h3', '¡Encriptalo!');
            console.log('mensaje común');
        }
    } else {
        console.log('no hay mensaje para desencriptar')
        textos('h3', 'Ingresa un mensaje para desencriptar');
    }
}

function botonCopiar() {
    const mensajeCopiado = mostrarMensaje.textContent.trim();

    navigator.clipboard.writeText(mensajeCopiado)
        .then(() => {
            console.log('Texto copiado al portapapeles');
            textos('muestraMensaje', 'Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar al portapapeles', err);
        });
}

function limpiarMensajeEntrada() {
    document.querySelector('#mensaje').value = '';
}

function eliminarMensajeEncriptado() {
    const elemento = document.getElementById('mostrarMensaje');
    if (elemento) {
        elemento.parentNode.removeChild(elemento);
    }
}