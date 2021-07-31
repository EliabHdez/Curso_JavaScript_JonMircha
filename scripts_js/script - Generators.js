// Un generador nos permite convertir el codigo de una funcion en codigo iterable

// Para indicarle a javascript que una funcion va a ser de tipo generadora hay que poner un asterisco despues del function... "function* <nombre funcion>"

// La palabra "yield" es una palabra reservada de los generators y esta sirve para indicarle donde tiene que parar o cortar al momento de correr el código, es muy similar a la palabra reservada await del async

function* iterable() {
    yield 'hola'
    console.log('Hola')
    yield 'Hola 2'
    console.log('Seguimos con mas instrucciones de nuestro código')
    yield 'Hola 3'
    yield 'Hola 4'
}

let iterador = iterable()
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())

for(let y of iterador){
    console.log(y)
}

const arr = [...iterable()]
console.log(arr)

function cuadrado(valor) {
    setTimeout(() => {
        const restConsola = {
            valor,
            resultado: valor * valor
        }
        console.log(restConsola)
    }, Math.random() * 1000)
}
// function cuadrado(valor) {
//         const restConsola = {
//             valor,
//             resultado: valor * valor
//         }
//         console.log(restConsola)
// }

function* generador() {
    console.log('Inicia Generator')
    yield cuadrado(0)
    yield cuadrado(1)
    yield cuadrado(2)
    yield cuadrado(3)
    yield cuadrado(4)
    yield cuadrado(5)
    console.log('Termina Generator')
}

let gen = generador()

for(let y of gen){
    console.log(y)
}