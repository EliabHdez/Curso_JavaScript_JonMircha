let nombre = 'Eliab'
let apellido = 'Hernandez'

// Concatenación
    // Podemos concatenar en en el valor de una variable o al momento de imprimir en consola
let saludo = 'Hola mi nombre es'
let saludo1 = 'Hola mi nombre es ' + nombre + ' ' + apellido + '.'
console.log(saludo + ' ' + nombre + ' ' + apellido)
console.log(saludo1)

// Interpolación de variables: Meter dentro de una cadena de texto, el valor dinamicamente de una variable, esto es la interpolación y para eso necesitamos hacer uso de una característica de las cadenas de texto llamada "TEMPLATE STRINGS"

// Template Strings 
    // Para hacer uso de las template strings es necesario que utilicemos los acentos graves y utilizar la siguiente sintaxis "${variable}" para concatenar las diferentes variables, con esto ya no es necesario ocupar el signo de + ni comillas con espacios (' ') para dar espacios entre palabras o strings, basta con dar espaciados entre la sintaxis ${} que es la que guarda las variables
        // Podemos hacer uso de los template strings directamente en el valor de las variables o al momento de imprimir en consola
let saludo2 = `Hola mi nombre es ${nombre} ${apellido}.`
let saludo3 = `Hola mi nombre es`
console.log(saludo2)
console.log(saludo3, `${nombre} ${apellido}`)
console.log(`${saludo3} ${apellido} ${nombre}`)

// Una caracteristica de los template strings es el uso de los acentos graves o inversos (``), los cuales son necesarios y forzosos si queremos hacer uso de los template strings. Sin embargo estos acentos graves tienen otra funcion adicional la cual es que nos permite hacer saltos de linea al momento de escribir código. Esto no es posible con las comillas dobles o simples

/* let ul = 
    '
    <ul>
        <li>Primavera</li>
        <li>Invierno</li>
        <li>Verano</li>
        <li>Otoño</li>
    </ul>
    ' Esto arroja un error y eso es debido a que con las comillas dobles o simples no podemos dar saltos de linea. Cuando se ocupan este tipo de comillas todo se debe poner en una sola linea */

let ul = '<ul> <li>Primavera</li><li>Invierno</li><li>Verano</li><li>Otoño</li> </ul>' // De esta manera vemos que la consola ya no marca error pero lo imprime de forma continua y esto no parece en lo absoluto una lista, para esto hacemos uso de lo acentos graves

let ul2 = `
    <ul>
        <li>Primavera</li>
        <li>Invierno</li>
        <li>Verano</li>
        <li>Otoño</li>
    </ul>
    `
    // Con los acentos graves podemos ver que ya no tenemos errores tanto en el editor de codigo como en la consola, y no solo eso, si no que en la consola nos imprime la lista tal cual esta en el codigo, en forma de lista.

console.log(ul)
console.log(ul2)

// Podemos omitir el uso de las comillas dobles o simples y reemplazarlas por el uso de acentos graves, esto no lo ha comentado ninguno de los instructores, tal vez por algo sea, sin embargo yo me eh dado cuenta que aunque no vayamos a tener saltos de linea en el codigo o a la hora de imprimir en la consola podemos hacer uso de estas y no genera ningun problema ni ningun error, dan el mismo resultado que si ocuparamos comillas simples o dobles. Tal vez y espero asi sea en el transcurso de curso de hable de esto y se aclare si se pueden reemplazar las comillas dobles o simples o si no, porque y en que casos en concreto hay que usar si o si comillas simples o dobles