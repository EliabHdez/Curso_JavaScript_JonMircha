// Una expresión regular es una secuencia de caracteres que forman un patron de busqueda y que principalmente es usado en la busqueda de caracteres de texto

// Las expresiones regualres nos sirve para validar cierta información como por ejemplo un numero de tarjeta para saber si es visa o mastercard, o para validar el DNI o RFC o para validar que un correo electronico tenga solo ciertos caracteres como letras, numeros, guion medio y bajo, punto etc y fuera de esos ya ningun otro caracter sea valido, etc etc etc...

// Las expresiones reguales reciben dos parametros, el primero indica lo que estamos buscando y el segundo son banderas que nos permiten realizar diferentes acciones. Estas banderas de escriben de forma continua y juntas como si fuera una string. Podemos omitir el segundo parametro lo cual hara que solo busque el primer parametro

// El index en la consola nos indica en la posicion que se encontro la coincidencia, si son varias nos arrojara el numero de la posicion de la ultima coincidencia que encontro

/*
    Ejemplo de una expresion regular para encontrar correos electronicos
        /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+/g
*/

let cadena = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea minus animi obcaecati labore odio eligendi numquam, consequatur illum ratione molestias dolorem corrupti minima ex! Vitae mollitia atque ab cupiditate vero?'

let regExp = new RegExp("lorem", "ig")

    // La bandera i le indica que ignore mayusculas o minusculas, si se la quitamos podremos ver que el resultado en la consola sera false, ya que nuestro primer parametro el lorem tiene la primera letra en minuscula y el de la variable cadena esta con mayuscula

    // La bandera g le dice que no detenga la busqueda en la primera coincidencia que encuentre, si no que siga buscando en toda la cadena en total. Sin embargo si la utilizamos y solo hay una coincidencia arrojara como respuesta null

let regExp2 = /lorem/ig
    // Esta es otra forma de declarar las expresiones regulares. En esta solo ponemos la palabra a buscar entre barras seguidas de las banderas. Esto es lo mismo que lo de arriba, solo que declarado de manera diferente, pero el codigo hace lo mismo

console.log(regExp.test(cadena));
console.log(regExp.exec(cadena));

console.log(regExp2.test(cadena));
console.log(regExp2.exec(cadena));

// test devuelve un verdadero o falso si se cumple o no el patron dentro de la cadena que estas buscando

// exec devuelve un array con un objeto dentro con informacion detallada de las coincidencias, en que caracter o posicion lo encontro en la fuente de datos