// El objeto literal es solo una forma de llamar a la forma nueva en js de poder escribir codigo dentro de un objeto. Este nueva forma nos permite agilizar la escritura haciendo que si el nombre del atributo del objeto es el mismo que el nombre de la variable que va a ocupar lugar como valor del atributo podemos solo poner dicho nombre una sola vez y con eso estariamos declarando tanto el nombre del atributo como el valor de este y por ende js interpreta de forma automatica que el nombre va a hacer igual al valor de la variable. Un ejemplo de esto es el segundo caso en este archivo donde solo ponemos nombre y edad sin declarar un valor como tal en la constante objeto dog. Como podemos apreciar en el primer caso pusimos el nombre del atributo mas su valor que es igual al nombre de la variable y que este ya tiene un valor en variable como tal, sin embargo en el segundo caso solo nos basto poner el tanto nombre como edad ya que este lleva el mismo nombre que la variable que representara su valor

// Para el caso de las funciones tambien tenemos una forma mas facil y simplificada la cual es poner el nombre del metodo y después poner los parentesis seguidos de las llaves que representaran la función. De una forma normal, seria poner el nombre del método, seguido de los dos puntos y despues declarar la función, como en el primero de los casos. Sin embargo con la nueva forma eliminamos los dos puntos y la palabra reservada function y solo declaramos el nombre del método los parentesís y las llaves

let nombre = 'Katana'
    edad = '2 años'

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function(){
        console.log('guauu guauu!!!');
    }
}
console.log(perro);
perro.ladrar()

const dog = {
    nombre,
    edad,
    raza: 'husky',
    ladrar(){
        console.log('guauu guauu guauu!!!');
    }
}
console.log(dog);
dog.ladrar()