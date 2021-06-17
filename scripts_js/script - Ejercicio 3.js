// Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter

arr1 = (texto) => {
    const text = texto.split(' ')
    console.log(text);
    console.log(text.length);
}

arr1('Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nisi deleniti?')


let lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nisi deleniti?'
let lorem1 = lorem.split('/')

console.log(lorem.split(' '));
console.log(lorem.length);
console.log(lorem1);
console.log(lorem1.length);

divString = (cadena) => {
    let divCadena = cadena.split(' ')
    for(let i = 0; i < divCadena.length; i++){
        console.log(divCadena[i] + ' - ');
    }
}

let cadena1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nisi deleniti?'
let separador = ' '
divString(cadena1, separador)
