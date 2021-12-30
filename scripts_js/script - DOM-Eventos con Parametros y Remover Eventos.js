// Si queremos o necesitamos que una funcion tenga parametros y esta se va a desenvolver dentro de un evento lo que tenemos que hacer es envolver esta funcion en otra funcion, ya sea anonima o arrow function, ya que la manejadora del evento no seria la funcion que tenga parametros si no la funcion que contenga esta funcion con parametros. Esto abre la posibilidad de ocupar o ejecutar esta funcion con parametros las veces que quereamos o necesitemos, un ejemplo es la ejecucion de la funcion "saludar" varias veces dentro de la funcion manejadora del evento

/* Tambien para simplificar el cuando debemos o no utilizar los parentesis en una funcion lo determinaremos de la siguiente manera 

    Si la funcion a ejecutar a su vez funciona como la manejadora del evento no llevara parantesis al momento de ser invocada en el evento, como por ej la funcion "holaMundo"
    
    Si la funcion a ejecutar no es la manejadora del evento, en este caso si necesitara llevar los parentesis al momento de ser invocada (como la funcion "saludar"). Esto lo podemos determinar si dicha funcion esta dentro de otra funcion ya sea anonima o arrow funtion, lo cual quiere decir que la funcion padre es la manejadora del evento*/

function holaMundo() {
    alert('Hola Mundo')
    console.log(Event)
}

function saludar(nombre = "Desconocid@"){
    alert(`Hola ${nombre}`)
    console.log(Event)
}

const $eventoMultiple = document.getElementById('evento-multiple')

$eventoMultiple.addEventListener('click', holaMundo)
$eventoMultiple.addEventListener('click', (e) => {
    alert('Adios Mundo')
    console.log('Impresion del evento')
    console.log(e)
})
$eventoMultiple.addEventListener('click', (e) => {
    console.log('Impresion del tipo de evento')
    console.log(e.type)
})
$eventoMultiple.addEventListener('click', (e) => {
    console.log('Impresion del target')
    console.log(e.target)
})
$eventoMultiple.addEventListener('click', () => {
    saludar()
    saludar('Moises')
})

// Eliminar Eventos de un Elemento

const $removerEvento = document.getElementById("remover-evento")

// Todas las siguientes funciones las comente para que se viera de forma clara la eliminacion del evento del boton remover eventos, ya que si no las comentaba, solo eliminaba la ultima funcion, es decir la que se encuentra dentro de la constante removerDobleClick. Si queria que se vieran afectadas todas las demas funciones y poder deshabilitar por completo el doble del boton tenia que crear una funcion eliminadora de eventos por cada funcion declarada abajo

// $removerEvento.addEventListener('dblclick', holaMundo)
// $removerEvento.addEventListener('dblclick', (e) => {
//     alert('Remover Adios Mundo')
//     console.log('Impresion del evento Adios Mundo')
//     console.log(e)
// })
// $removerEvento.addEventListener('dblclick', (e) => {
//     alert(`Removiendo evento de tipo ${e.type}`)
//     console.log('Impresion del tipo de evento')
//     console.log(e.type)
// })
// $removerEvento.addEventListener('dblclick', (e) => {
//     alert(`Removiendo evento del elemento button ${e.target}`)
//     console.log('Impresion del target')
//     console.log(e.target)
// })
// $removerEvento.addEventListener('dblclick', () => {
//     saludar('Eliab')
// })

const removerDobleClick = (e) => {
    alert(`Removiendo el evento del boton de tipo ${e.type}`)
    console.log(e)
    $removerEvento.removeEventListener("dblclick", removerDobleClick)
    $removerEvento.disabled = true
}

$removerEvento.addEventListener("dblclick", removerDobleClick)