const $cards = document.querySelector(".cards")
const $newCard = document.createElement("figure")
const $newCard2 = document.createElement("figure")
const $newCard3 = document.createElement("figure")
const $newCard4 = document.createElement("figure")
const $cloneCards = $cards.cloneNode(true) // Para clonar con el metodo cloneNodes no tengo que hace referencia al documento, si no al elemento que quiero clonar de forma directa. Importante pasarle el parametro boolean true ya que sin este estaria clonando solo la estructura del nodo padre que es la etiqueta seccion con la clase cards, pero con el true al igual que en el metodo importNode lo que hacemos es que clone todo el contenido

$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Random">
    <figcaption>Random</figcaption>
`
$newCard2.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Random2">
    <figcaption>Random2</figcaption>
`
$newCard3.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Random3">
    <figcaption>Random3</figcaption>
`
$newCard4.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Random4">
    <figcaption>Random4</figcaption>
`

$newCard.classList.add("card")
$newCard2.classList.add("card")
$newCard3.classList.add("card")

$cards.replaceChild($newCard, $cards.children[3])
$cards.insertBefore($newCard2, $cards.firstElementChild)
$cards.insertBefore($newCard3, $cards.children[5])
$cards.removeChild($cards.children[5])
$cards.removeChild($cards.lastElementChild)

// El DOM tiene un metodo para clonar elementos dinamicos como los que acabamos de crear, no es el metodo importNode que vimos anteriormente, pero trabaja de forma muy similar, este metodo es el cloneNode

document.body.appendChild($cloneCards)

// La diferencia que podemos apreciar es que la primera seccion de las tarjetas tiene los elementos random generados en este archivo, mientras que la segunda tiene las tarjetas originales, esto es debido a que el clone genera una copia del archivo original y no del archivo modificado, y como estas fueron alteradas y cambiadas mediante js y no de forma nativa en el archivo html es por eso que vemos que la segunda seccion de tarjetas es como esta tal cual en el codigo html y no como esta despues de haber sido modificado mediante la programacion con js en este archivo