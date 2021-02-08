// querySelector
const heading = document.querySelector('.header__texto h2') //0 o 1 elementos
console.log(heading);

//querySelectorALL
const enlaces = document.querySelectorAll('.navegacion a') //0 a todos lo que tenga en ese elemento
console.log(enlaces);



//GETelementById ya no se utiliza
//generar un nuevo enlace

// const nuevoEnlace = document.createElement('A') //metodo para crear elementos en el hmtl

// //agregar el href
// nuevoEnlace.href = 'nuevo-enlace.html' //punto para agregarle propiedades

// //agregar el texto
// nuevoEnlace.textContent = 'nuevo enlace';

// //agregar la clase
// nuevoEnlace.classList.add('navegacion__enlace');

// console.log(nuevoEnlace);

// //agregarlo al documento
// const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(nuevoEnlace);

//eventos

console.log(1)

window.addEventListener('load', function() { //load espera que el JS y los archivos que depende del HMTL esten listos
    console.log(2)

})

window.onload = function() {
    console.log(3)
}

document.addEventListener('DOMContentLoaded', function() { //espera qye se descague el HMTL, pero no espere css o imagenes
    console.log(4)

})

console.log(5)

// window.onscroll = function() {
//     console.log('scrolling')
// }

//selecciona elementos y asociales un evento

const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento) {
    console.log(evento)
    evento.preventDefault() //prevenir este codigo se va requerir siempre 
        //validar un formulario
    console.log('enviando Formulario')
})

//eventos de los inputs y textareas

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje') //para evaluar en tiempo real lo que esta el usuari oescribiendo en el formualrio 

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(evento) {
    //console.log(evento.target.value)
    datos[evento.target.id] = evento.target.value;
    console.log(datos)
}