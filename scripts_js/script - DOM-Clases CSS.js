const $html = document.documentElement
const $body = document.body

let varBlackColor = getComputedStyle($html).getPropertyValue('--black-color') // Declaramos una variable para guardar todo un comando
let varYellowColor = getComputedStyle($html).getPropertyValue('--yellow-color') // Lo mismo del comentario de arriba

$body.style.backgroundColor = varBlackColor // Asignamos un valor creado con las custom properties en los estilos a la constante
$body.style.color = varYellowColor // Lo mismo del comentario de arriba

const $card = document.querySelector('.card')

console.log($card)
console.log($card.className) // Me arroja como resultado el nombre de las clases que tiene el elemento
console.log($card.classList) // Me arroja una lista con los detalles de los elementos class que tiene el elemento
console.log($card.classList.contains('rotate-90')) // Con el metodo contains verificamos mediante un valor boolean si existe esa clase en el elemento
$card.classList.add('rotate-90') // Con el metodo add agregamos una clase previamente creada al elemento
console.log($card.classList.contains('rotate-90'))
console.log($card.className)
console.log($card.classList)
$card.classList.remove('rotate-90')
console.log($card.classList.contains('rotate-90'))
$card.classList.toggle('rotate-90') // Con el metodo toggle lo que hacemos es agregar y remover con un solo metodo. Hace la funcion de ambos dependiendo del valor que tenga antes de declarar el metodo. Esto quiere decir que si tiene la clase y ejecutamos el metodo toggle remueve la clase y si no la tiene y lo ejecutamos la agrega. En este primer toggle la agregamos
console.log($card.classList.contains('rotate-90'))
$card.classList.toggle('rotate-90') // En este segundo la eliminamos
console.log($card.classList.contains('rotate-90'))
$card.classList.toggle('rotate-90')

const $card1 = document.querySelectorAll('.card')[1]

console.log($card1)
console.log($card1.className)
console.log($card1.classList)
$card1.classList.add('rotate-90', 'sepia') // Con el metodo add, se pueden agregar mas de una clase al mismo tiempo, separadas mediante comas ','
$card1.classList.replace('rotate-90', 'rotate-135') // Con el metodo replace, reemplazamos una clase ya existente en el elemento por una nueva, la primer clase o valor declarado corresponde a la clase existente en el elemento, mientras que el segundo es la clase o valor por el que sera reemplazado
$card1.classList.replace('sepia', 'opacity-50')

const $card2 = document.querySelectorAll('.card')[2] // Con quierySelectorAll podemos seleccionar todo o bien especificar que queremos seleccionar de ese todo poniendo entre corchetes el numero correspondiente de la posicion del elemento, contemplando que va a empezar a contar desde el primer elemento que se encuentre con el valor asignado dandole a este primero la posicion 0, por lo tanto si queremos agarrar el elemento que visualmente es el 2 tendriamos que poner 1

$card2.classList.add('sepia')
$card2.classList.toggle('sepia')
$card2.classList.toggle('sepia')

const $card3 = document.querySelectorAll('.card')[3]

// $card3.classList.toggle('rotate-90', 'sepia') //El metodo toggle NO acepta agregar mas de un valor a la vez
$card3.classList.add('sepia', 'opacity-50') 