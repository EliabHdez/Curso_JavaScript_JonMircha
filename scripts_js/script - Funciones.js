/* 
    Funcion: Es un bloque de código autocontenido (es decir que tiene su propio contenido independiente al scope o ambito global), se declara una sola vez y se puede utilizar tantas veces sea necesario. Adicional puede o no recibir parametros y tambien puede devolver o no valores

    Las funciones siempre van a llevar parentesis y llaves ej function(){}

    Los parentesis indican o sirven para invocar una función, le indica a esta que se tiene que ejecutar
*/

// Función declarada

function estoEsUnaFuncion(){
    console.log('uno');
    console.log('dos');
    console.log('tres');
}

// Invocación de funciones

estoEsUnaFuncion()

function devuelveValor(){
    console.log('uno');
    console.log('dos');
    console.log('tres');
    return 'La función ha retornado una cadena de texto'
}

let funcionDevValor = devuelveValor()

console.log(funcionDevValor);

function devuelveValor1(){
    console.log('uno');
    return 20 // Cuanto encuentra un return ahi se detiene e ignora todo lo que esta por debajo. En otras palabras se ejecuta hasta el primer return que encuentra
    console.log('dos');
    console.log('tres');
    return 'La función ha retornado una cadena de texto'
}

let funcionDevValor1 = devuelveValor1()

console.log(funcionDevValor1);

// Valores o parámetros en las funciones

function katana(nombre, edad){ // Lo que va entre los parentesis son los parametros o valores que le asignamos a la funcion
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
}
katana('Katana', 2)

// Los valores de los parametros se pueden asignar despues, en el momento que invocamos la funcion como en el caso de arriba, o lo podemos hacer directamente en el parametro, dentro de los parentesis de la funcion como en el caso de abajo

function velkan(nombre = 'Velkan', edad = 6){
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} meses de edad.`);
}
velkan()

// Funciones declaras VS funciones expresadas

// Función declarada

funcionDeclarada() // Nos permite invocar la función antes de inicializarla. Esto se debe a que por defecto y de forma automatica js hace una elevación de las funciones declaradas, esto quiere decir que internamente la sobrepone hasta arriba del archivo en el lugar que le corresponde que seria junto con otras funciones despues de las variables, por lo tanto internamente la funcion esta mas arriba que su invocación

function funcionDeclarada(){
    console.log('Esto es una función declarada, puede invocarse en cualquier parte de nuestro código, incluso antes de que la función sea declarada');
}
funcionDeclarada()

// Función expresada - Es una función que esta como valor de una variable o constante, es decir la función esta asignada a una variable (let o const)

    // funcion anónima es cuando no se asigna un nombre a la función, como en el sig caso

funcionExpresada()
const funcionExpresada = function (){
    console.log('Esto es una función expresada, es decir, la funcion es el valor de una variable, si invocamos esta función antes de su definición JS nos arrojara un error, el cual básicamente dice que no podemos acceder a la función antes de inicializarla');
}
funcionExpresada()

// Una buena práctica es el declarar funciones expresadas, con esto evitamos errores de compilación por tener mal acomodado nuestro código

// El declarar funciones expresadas es una manera de forzarse a uno mismo para que no puedan invocarse/ejecutarse/utilizarse hasta que previamente hayan sido inicializadas