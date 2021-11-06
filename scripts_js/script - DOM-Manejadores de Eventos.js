// Podemos ocupar una sola/una misma funcion para desencadenar eventos en diferentes elementos

function eventoMismaFuncion() {
    alert("Misma funcion para eventos en diferentes elementos")
    console.log(Event);
}

const $eventoMismaFuncion = document.getElementById("evento-mismaFuncion")
$eventoMismaFuncion.onclick = eventoMismaFuncion

function eventoAtributoHtml() {
    alert("Evento como atributo HTML")
    console.log(Event);
}

/* La siguiente forma de trabajar con eventos, que es por medio de los eventos semanticos es la forma mas apropiada, ya que hacerlo medio eventos como atributos HTML no es del todo correcto, digamos que esta mal visto hacerlo de esa manera, es algo asi como aplicar estilos con la etiqueta style 

El inconveniente de trabajar con eventos semanticos es que no podemos asignar mas de una funcion por cada elemento o evento. Si asignamos mas de una funcion, se ejecutara la mas reciente*/

function eventoSemantico() {
    alert("Evento semantico")
    console.log(Event);
}

const $eventoSemantico = document.getElementById("evento-semantico")
$eventoSemantico.onclick = eventoSemantico

// Podemos utilizar funciones anonimas o arrow functions

$eventoSemantico.onclick = ArrowFunction => {
    alert("Reemplazada la funcion 'Hola Mundo' con una arrow function")
    console.log(Event)
}

// Toda funcion que se convierte en un manejador de eventos, es decir que se ejecuta en algun momento en un evento, no puede recibir parametros, el unico parametro que puede recibir es el evento en si, que lo podemos obtener mediante la palabra Event o bien en algunos casos se puede ver que para simplificar la palabra Event, se le pasa a la funcion un solo parametro que va a representar el evento como tal, normalmente y de forma generalizada entre los programadores utilizan la letra "e" para simplificarlo 

$eventoSemantico.onclick = function(e) {
    alert("Reemplazada la funcion 'Hola Mundo' con funcion anonima")
    console.log(e) /* Esto viene siendo lo mismo que console.log(Event) */
}

// Para poder asignar o definir diferentes funciones a un mismo elemento haremos uso de los manejadores multiples. Este metodo es addEventListener

const $eventoMultiple = document.getElementById("evento-multiple")

$eventoMultiple.addEventListener("click", eventoMismaFuncion) 
$eventoMultiple.addEventListener("click", (e) => {
        alert("Segunda funcion en el evento multiple")
        console.log(e)
        console.log(e.type)
        console.log(e.target)
        console.log(Event)
})