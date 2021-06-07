// La diferencia entre los parámetros rest y el spread operator es que el spread operator se puede estar ejecutando en cualquier sentencia de nuestro codigo, mientras que los parametros rest son eso, parametros que recibe una funcion

// Ambos utilizan los tres puntos suspensivos para llamarlos o hacer uso de ellos

// PARÁMETROS REST

// Parámetros REST srive para indicar que podemos o no tener mas valores o elementos que se van a añadir a una función y este se declara con tres puntos suspensivos (...)

function sumar(a, b, ...c){
    let resultado = a + b

    c.forEach(function(n){
        resultado += n
    })
    return resultado
}

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4,));
console.log(sumar(1,2,3,4,5));
console.log(sumar(1,2,3,4,5,6));
console.log(sumar(1,2,3,4,5,6,7));
console.log(sumar(1,2,3,4,5,6,7,8));

// SPREAD OPERATOR

// El Spread Operator nos va a servir para cuando tengamos que expandir una expresion en situaciones donde tengamos o necesitemos guardar multiples argumentos o elementos

const arr1 = [1,2,3,4,5]
     arr2 = [6,7,8,9,0]

console.log(arr1, arr2);

const arr3 = [...arr1, ...arr2]

console.log(arr3);