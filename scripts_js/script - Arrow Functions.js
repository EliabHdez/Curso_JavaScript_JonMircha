/* Arrow Functions 

    Es una nueva forma de definir funciones anonimas, estas funciones tienes que ser funciones expresadas

        Una funcion expresada es aquella que una variable o constante le asignas una funcion anonima

        Para definir una arrow function en una function vamos a quitar la palabra reservada function y entre los parentesis y las llaves vamos a poner una flecha con direccion hacia la derecha con ayuda de los signo igual y mayor que. Quedando de la siguiente manera: () => {}
            Asignada a una variable o constante como debe de ser, quedaria de la sig manera:
                const/let 'nombre var/cons' = () => {}

    Si la funcion se compone de una sola linea de codigo podemos omitir las llaves y que quede de forma continua en una sola linea de codigo

    Si la funcion recibe un parametro dentro de los parentesis podemos omitir los parentesis, OJO esto solo funciona si recibe UN parametro, uno solo, si no recibe o recibe mas de uno si se ponen los parentesis
*/

const saludar = function(){
    console.log(`Hola`);
}
saludar()

// ARROW FUNTION

const saludar1 = () => {
    console.log('Hiii');
}
saludar1()

// La funcion de arriba al tener una sola linea de codigo podemos omitir los parentesis y quedaria asi, obviamente cambiando el nombre de la funcion para que no arroje error

const saludar2 = () => console.log('Hello');
saludar2() // Como podemos observar se simplifica bastante la sintaxis y el codigo para escribir una function

// Con respecto al tema de los parentesis encontraremos ejemplos aqui abajo

const saludarPersona = (nombre) => {
    console.log(`Hola ${nombre}`);
}
saludarPersona('Janeth')

const saludarPersona2 = nombre1 => console.log(`Hello ${nombre1}`); // Aqui podemos ver como simplificamos la funcin quitando los parentesis ya que dentro de estos solo recibia una parametro y ademas dejando la funcion en una sola linea de codigo
saludarPersona2('Jan')

const suma = (a,b) => {
    console.log(a + b);
}
suma(2,5)

const suma2 = (a,b) => console.log(a + b); // Aqui podemos ver que al tener dos parametros dentro de los parentesis no podemos prescindir de estos como en el caso anterior, aqui si o si los tenemos que poner, de lo contrario estariamos generando un error. Lo unico que se pudo simplificar fue la funcion en una sola linea de codigo
suma2(6,9)

// Si se tiene mas de una linea de codigo si hay que respetar el cuerpo de la funcion con las llaves despues de la flecha

// Arrow function varias lienas de codigo

const funcionVariasLineas = () => {
    console.log('uno');
    console.log('dos');
    console.log('tres');
}
funcionVariasLineas()

// Si la funcion de arriba la queremos dejar en una sola linea de codigo vamos a generar un error ya que esto no esta permitido si se tiene mas de una linea de codigo en la funcion

const numeros = [1,2,3]

numeros.forEach(function(num,index){
    console.log(`${num} esta en la posición ${index}`);
})

const numbers = [1,2,3]
numbers.forEach((num,index) => console.log(`${num} is in the position ${index}`))

// Otra funcion importante de las arrow function es que tienen la capacidad de reconocer el contexto donde se encuentra el padre de dicha arrow function. Con los sig ejemplos veremos a que nos referimos con esto

function Perro() {
    console.log(this);
}
Perro() // Podemos ver que el this en esta funcion hace referencia que su ambito es el ambito global, el window

const perro = {
    nombre: 'Katana',
    ladrar() {
        console.log(this);
    }  
}
perro.ladrar()

// En el caso de arriba podemos ver que con la funcion normal, simplificada de la forma en que vimos en el tema funtions, sin los dos puntos ni la palabra reservada function (ladrar: function() {}), dicha funcion hace referencia al ambito en donde se encuentra que es el objeto y por lo tanto imprime este objeto

const perro1 = {
    nombre: 'Velkan',
    ladrar1: () => {
        console.log(this);
    }
}
perro1.ladrar1()

// Que pasa con las arrow functions??? Ya que aqui podemos ver que nos da el mismo resultado que la function Perro de mas arriba que su ambito se encuentra en el ambito global. Lo que pasa es lo que se explico arriba, que las arrow functions tienen la capacidad de saltar el ambito donde se encuentran para determinar el ambito donde se encuentra el padre que las contiene, por lo tanto no esta haciendo referencia al ambito que la contiene que seria el objeto si no que sale de este y hace referencia al ambito donde se encuentra el objeto que es su padre y que este se encuentra en el ambito global