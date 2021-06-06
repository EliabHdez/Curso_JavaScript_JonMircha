/* 
    Destructuración

    La destructuración de objetos y array es separar ese objeto y ese array y guardar cada uno de los elementos o atributos en una variable diferente
*/

const numbers = [1,2,3,4,5]
const person = ['Eliab', 'Lopez', 30]

// Sin Destructuración

let num1 = numbers[0]
    num2 = numbers[1]
    num3 = numbers[2]
    // Esta seria una forma de hacerlo, pero es mas larga, tardada y con mas codigo

console.log(num1,num2,num3);

let name = person[0]
let lastname = person[1]
let age = person[2]

console.log(name,lastname,age);

// Con destructuración

// Array --> Al asignar las variables las metemos dentro de corchetes ya que lo que vamos a destructar es un array

let [uno, dos, tres] = numbers
console.log(uno,dos,tres);

// Objeto

const persona = {
    nombre: 'Moises',
    apellido: 'Hernandez',
    edad: 30
}

let {nombre, apellido, edad} = persona
console.log(nombre,apellido,edad);

// Es importante que cuando vayamos hacer una destructuración de un objeto, el nombre de las variables que vayamos a crear para los valores de cada uno de sus elementos sea igual al nombre que tiene el elemento/atributo en el objeto, ya que lo que hace es buscar el nombre de la variable creada en los elementos del objeto y si hay una coincidencia guarda el valor, de lo contrario no lo hace. Abajo veremos un ejemplo de esto

const persona2 = {
    namePersona2: 'Moises',
    lastnamePersona2: 'Hernandez',
    agePersona2: 30
}

let {nombre2, lastnamePersona2, años} = persona2
console.log(nombre2, lastnamePersona2, años);

// En el caso anterior podemos ver que las variables que no estan declaradas con el mismo nombre que llevan los elementos del objeto, al momento de imprimirlas en consola no arroja undefined, esto es debido a que no encuentra un elemento o atributo con este nombre dentro del objeto, es por eso que al momento de hacer la destructuración tenemos que ponerles el mismo nombre a las variables que los que tienen los elementos dentro del objeto

// Con respecto al orden en que las creemos o pongamos no hay ningun problema. Donde afectaria el orden seria meramente en el console.log, solo ahi dependiendo del orden en que lo pongamos es el orden en el que lo imprimira en consola, pero en la creacion no afecta para nada, ya que busca y empata coincidencias y mientras las haya no hay ningun error

const persona3 = {
    nombre1: 'Susett',
    apellido1: 'Arzate',
    edad1: 28
}

let {edad1, apellido1, nombre1} = persona3
console.log(nombre1, apellido1, edad1);
console.log(apellido1,edad1,nombre1);