// Cadenaa de texto aka Strings
// Sobre las comillas pueden ser comillas dobles ("") o comillas simples (''), realmente es lo mismo aunque esta mas estandarizado utilizar comillas dobles, pero es lo mismo

let nombre = 'Moises'
let apellido = 'Hernandez'

let lorem = '    Lorem ipsum, dolor sit amet consectectur adipisicing elit     '
let lorem1 = 'Lorem ipsum, dolor sit amet consectectur adipisicing elit'

// Otra manera de declarar una string es por medio del constructor

let saludo = new String('Hola Mundo')
    // 'new' es un operador que sirve para crear un objeto nuevo de un cierto tipo de dato
    // El utilizar el constructor es muy formalizado y nadie lo ocupa o hace de esta manera

console.log(nombre, apellido, saludo)
console.log(
    nombre.length, 
    apellido.length, 
    saludo.length,
    nombre.toUpperCase(),
    apellido.toLowerCase(),
    lorem.includes('amet'),
    lorem.includes('Moises'),
    )

console.log(lorem)
console.log(lorem.trim()) // El metodo trim elimina los espacios que hay al princpio y al final

console.log(lorem1.split(' ')) // El metodo split lo que hace es convertir un string en un array, en los parentesis le tenemos que dar un separador. Si le damos un espacio separara cada palabra, si no le damos espacio separara cada letra
console.log(lorem1.split(''))
console.log(lorem1.split(','))