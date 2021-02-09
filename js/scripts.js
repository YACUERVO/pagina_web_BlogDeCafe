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

//selecciona elementos y asociales un evento: Se utliza para un carrito de compras o un megusta 

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento)
//     evento.preventDefault() //prevenir este codigo se va requerir siempre 
//         //validar un formulario
//     console.log('enviando Formulario')
// })


//eventos de los inputs y textareas

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje') //para evaluar en tiempo real lo que esta el usuari oescribiendo en el formualrio 
const formulario = document.querySelector('.formulario')

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);



//el evento de Submit para enviar el formulario y validarlo


formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    //validar el formulario 
    const { nombre, email, mensaje } = datos;
    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAalerta('Todos los campos son obligatorios', true);
        return; //corta la ejecucion del codigo 

    }

    //crear la alerta de enviar correctamente

    mostrarAalerta('Mensaje Enviado Correctamente')

    //enviar formulario
    console.log('enviando formulario al servidor')
})

function leerTexto(evento) {
    //console.log(evento.target.value)
    datos[evento.target.id] = evento.target.value;

    // console.log(datos)
}

function mostrarAalerta(mensaje, error = null) {
    const alerta = document.createElement('P')
    alerta.textContent = mensaje;
    if (error) {
        alerta.classList.add('error')
    } else {
        alerta.classList.add('alerta')
    }
    formulario.appendChild(alerta)
        //desaparezca depsues de 5 segundos 
    setTimeout(() => {
        error.remove();
    }, 5000);
}


//muestra una alerta de que se envia correctamente

// function mostrarMensaje(mensaje) {
//     const alerta = document.createElement('P');
//     alerta.textContent = mensaje;
//     alerta.classList.add('alerta')
//     formulario.appendChild(alerta)
// }
// //desaparezca despues de 5 segundo
// setTimeout(() => {
//     alerta.remove()
// }, 5000);

// //mestra un erro en la pantalla

// function mostrarError(mensaje) {
//     const error = document.createElement('P');
//     error.textContent = mensaje;
//     error.classList.add('error')
//     formulario.appendChild(error);

//     //desaparezca depsues de 5 segundos
//     setTimeout(() => {
//         error.remove();
//     }, 5000);
// }