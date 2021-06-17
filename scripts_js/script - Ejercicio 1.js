// Ejercicio 1 --> Prograna una funcion que cuente el numero de caracteres de una cadena de texto
    // Ej miFuncion('Hola Mundo') devolvera 10

function numCaracteres3(moto3){
    console.log(moto3.length);
}
    
numCaracteres = (moto) => {
    console.log(moto.length);
}

numCaracteres2 = (moto2) => console.log(moto2.length);

numCaracteres3('Kawasaki H2R')
numCaracteres('Honda CBR600RR')
numCaracteres2('Yamaha R6')

let hola = 'Hola Mundo'

console.log(hola.length);

let nombre = 'Eliab'
let apellido = 'Hernandez'
let edad = '30'

console.log(nombre.length, apellido.length);
console.log(edad.length);
console.log(edad);

let edades = [5, 10, 15, 20, 25, 30]
let names = ['Moises', 'Eliab']

console.log(edades.length);
console.log(edades[0]);
console.log(edades[1]);

console.log(names);
console.log(names[0]);

let moto = {
    marca: 'Honda',
    cc: '600cc',
    tipo: 'Pista',
    uso: 'Carreras'
}

console.log(moto);
console.log(moto.marca);
console.log(moto.marca);
console.log(moto.cc);
console.log(moto.tipo);
console.log(moto.uso);
console.log(moto.marca.length);
console.log(moto.marca.length);
console.log(moto.cc.length);
console.log(moto.tipo.length);
console.log(moto.uso.length);