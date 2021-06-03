/* 
    Arrays
    
    Los arrays o arreglos pueden contender diferentes tipos de datos, desde datos primitivos como strings, numeros, booleanos hasta datos compuestos como objetos u otro array

    En los arrays la numeracion que identificara los elementos de este comenzara por el numero 0, eso quiere decir que el primer elemento del arrays tendra u ocupara como posición, la poosición 0 y asi sucesivamente (0, 1, 2, 3, etc) y la posicion 0 tambien cuenta para la longitud que tendra el array
*/

const a = []
const b = [1, true, 'Hola', ['a', 'b', 'c', [1, 2, 3, 4, 5]]]
/* const b = [
    1, 
    true, 
    'Hola', 
    ['a', 'b', 'c', [1, 2, 3, 4, 5]]
] --> Este array es lo mismo que el de arriba solo desglosado con saltos de línea para una visualización mas */

// Para ingresar a un valor en concreto dentro del array tenemos que hacer uso de la referencia por medio del numero de posición que ocupa cada elemento dentro del array y para hacer esto hacemos uso de los corchetes

console.log(a);
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[0]);
console.log(b[3]); // En este caso junto con los dos anteriores ingresamos a solo uno de los elementos del array
console.log(b[3][2]);
console.log(b[3][3][4]); // De esta manera vamos ingresando a los elementos hasta llegar al elemento que queremos o estamos buscando. En este caso en particular le estamos diciendo a la consola que queremos imprimir el elemento de la posicion 4 que se encuentra dentro de un array, que a su vez esta dentro de otro array, osea estamos ingresando al primer array (array padre), posteriormente al segundo array (array hijo) y por último al valor o elemento de la posición 4 del array hijo y este es el que la nos imprime en consola, los corchetes en el console log no quieren decir que son tal cual arrays los elementos en esas posiciones si no mas bien le estamos indicando que queremos acceder a la referencia ubicada en esa posición dentro del array y esto lo logramos por medio de los corchetes, ya que de no ponerlos, js y la consola no sabrian que queremos acceder a los valores de un array

// Otra manera de crear arrays en por medio del objeto Array con el metodo .of() Array.of(). Con el cual no vamos a utilizar corchetes, solo el objeto con el metodo y dentro de los parentesis va el contenido del array con la misma sintaxis que cuando creamos un array directamente con corchetes

const c = Array.of('x', 'y', 'z', 9, 8, 7)
console.log(c);

// Con el objeto Array podemos construir un array con un numero determinado o concreto de posiciones y con el metodo fill asignamos elementos iguales a todas estas posiciones

const d = Array(100).fill('0% Desc')
console.log(d);

// Tambien podemos ocupar el new para crear un array, sin embargo este método ya casi no se usa, poco a poco se esta quedando en deshuso

let e = new Array(1,2,3, true, false)
console.log(e);

const colores = ['rojo', 'azul', 'verde']
console.log(colores);

// Metodo push() --> El metodo push nos sirve para agregar un elemento al array, este elemento se agrega al final de este

colores.push('negro')
console.log(colores);

// Metodo pop() --> El metodo pop nos sirve para eliminar el ultimo elemento de un array. Este no lleva nada dentro de los parentesis ya que automaticamente estara eliminado el ultimo elemento, por lo tanto no es necesario poner el elemento a eliminar, sin embargo si es necesario poner los parentesis, ya que de lo contrario el metodo no funcionara

colores.pop()
console.log(colores);

// Con el metodo .forEach podemos recorrer un array y aplicar una funcion por cada elemento del array, este metodo recibe o va acompañado de una funcion

const stations = ['Primavera', 'Invierno', 'Verano', 'Otoño']
stations.forEach(function (element){
    console.log(element);
})

// El caso de abajo lo cree con una "etiqueta li" solo para efectos visules y que fuera mas facil de identificar como una lista, la idea seria crear una lista bien echa para que no aparecieran las etiquetas ni los id, pero para eso seria hacer mas rollo, asi que para efectos practicos pues lo hice de una forma mas burda

const stations2 = ['Primavera', 'Invierno', 'Verano', 'Otoño']
stations2.forEach(function (element, index){
    console.log(`<li id="${index}">${element}</li>`);
})