/* Asincronia en Javascript: Es importante saber acerca de los temporizadores para entender como funciona la asincronia 

Temporizadores

    setTimeout --> Este nos permite ejecutar codigo pasado cierto tiempo. Este solo se ejecutara una sola vezy se compone de una callback (funcion) y el temporizador en milisegundos el cual determinara el tiempo que debe pasar para que se ejecute nuestro codigo
    
    setInterval --> Este nos permite ejecutar codigo cada determinado tiempo. Este se ejecuta cada vez que pasa el tiempo espicificado de forma indefinida
    
    clearTimeout() / clearInterval() --> Nos permiten detener los temporizadores setTImeout y setInterval. Para que estos funcionen los temporizadores serTimeout y setInterval tienen que estar declarados en una variable*/

console.log('Inicio tema')

setTimeout(() => {
    console.log('Prueba de funcionamiento del setTimeout 1')
}, 3000);

// setInterval(() => {
//     console.log('Prueba de funcionamiento del setInterval 1');
// }, 1000);

// setInterval(() => {
//     console.log(new Date().toLocaleTimeString())
// }, 1000)

let timeout = setTimeout(() => {
    console.log('Prueba de funcionamiento del setTimeout 2 ejecutando un clearTimeout')
}, 3000);

clearTimeout(timeout)

let interval = setInterval(() => {
    console.log('Prueba de funcionamiento del setInterval 2 ejecutando un clearInterval');
}, 1000);

clearInterval(interval)

console.log('Fin del tema')