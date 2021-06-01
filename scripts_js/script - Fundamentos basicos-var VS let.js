/* 
    - var -> Es para declarar variables pero esta queda en el ambito/scope global. Quiere decir que queda almacenada en el espacio general del archivo (window)\

    - let -> Es para declarar variables pero estas son de ambito de bloque, esto quiere decir que su alcance o scope es desde donde empieza hasta donde termina dicho bloque. En pocas palabras genera variables de bloque

    Abajo veremos ciertos ejemplos de la diferencia de declarar variables con var y con let
*/

var hola = 'Hola Mundo'

let hello = 'Hello World'

console.log(hola)
console.log(hello)

// Pareciera que no hay diferencia pero si hacemos un console.log de window podremos observar que la variable declarar con var se encuentra dentro del archivo window (general) de la pagina, mientras que con la variable declarada con let no pasa eso

console.log('----------diferencia con respecto al window al imprimir en consola-----------')

console.log(window) // Despleguemos el contenido de window en la consola del navegador para ver la variable var hola

console.log(window.hola) // Aqui si nos imprime el saludo debido a que al estar declara con var esta variable si se encuentra dentro del contenido de window

console.log(window.hello) // Aqui no nos imprime el saludo debido a que esta variable al estar declarada con let no se encuentra en el ambito global, osea en el contenido del window

console.log('-------var----------')

var generoMusica = 'Rock'
console.log(generoMusica)

// Esto es un bloque
{
    var generoMusica = 'Pop'
    console.log(generoMusica)
}

console.log(generoMusica) // Aqui podemos observar que con var al momento de cambiar dentro del bloque el valor de la variable al salir de este sigue teniendo el mismo valor que estando dentro del bloque ya que con var la variable escapa del scope del bloque para posicionarse en el ambito global

console.log('-------let----------')

let generoMusica2 = 'Rock'
console.log(generoMusica2)

// Esto es un bloque
{
    let generoMusica2 = 'Pop'
    console.log(generoMusica2)
}

console.log(generoMusica2) // Aqui vemos que con let la variable cambia su valor dentro del bloque pero al momento de salir del bloque recupera el valor que tenia antes de este, esto es debido a que con la palabra reservada let el alcanza de las variables declaradas con esta palabra solo es hasta el bloque que las contiene o donde fueron declaradas, en este caso el valor de pop se queda dentro del bloque donde fue asignado ese valor, fuera de ese bloque la variable regresa a tener el valor que tenia con anterioridad