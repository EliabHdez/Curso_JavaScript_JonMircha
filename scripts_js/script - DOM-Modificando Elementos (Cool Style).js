/* 
    Existen 3 metodos
            - .insertAdjacent
            - .insertAdjacentElement(position, el) - Viene siendo como un appendChild o   un before. Agrega un elemento
            - .insertAdjacentHTML(position, html) - Viene siendo como el innerHTML.   Agrega codigo HTML
            - .insertAdjacentText(position, text) - Viene siendo como el textContent

        Estos reciben 2 parametros, la posicion y el elemento, el codigo HTML o el texto

    Posiciones
        - beforebegin(hermano anterior)
        - afterbegin(primer hijo)
        - beforeend(ultimo hijo)
        - afterend(hermano siguiente)
*/

const $cards = document.querySelector(".cards")
const $newCard = document.createElement("figure")
const $newCard2 = document.createElement("figure")
const $newCard3 = document.createElement("figure")
const $newCard4 = document.createElement("figure")

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Before Begin">
<figcaption>Before Begin</figcaption>
`
$newCard.classList.add("card")
$cards.insertAdjacentElement("beforebegin", $newCard)

$newCard2.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="After Begin">
<figcaption>After Begin</figcaption>
`
$newCard2.classList.add("card")
$cards.insertAdjacentElement("afterbegin", $newCard2)

$newCard3.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Before End">
    <figcaption>Before End</figcaption>
    `
$newCard3.classList.add("card")
$cards.insertAdjacentElement("beforeend", $newCard3)

$newCard4.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="After End">
    <figcaption>After End</figcaption>
`
$newCard4.classList.add("card")
$cards.insertAdjacentElement("afterend", $newCard4)
    
const $newCard5 = document.createElement("figure")

let $newContentHtml = `
<img src="https://placeimg.com/200/200/any" alt="Content HTML">
<figcaption></figcaption>
`
$newCard5.classList.add("card")
$newCard5.insertAdjacentHTML("beforeend",  $newContentHtml)
$newCard5.querySelector("figcaption").insertAdjacentText("afterbegin", "Content Text")
// $cards.insertAdjacentElement("afterbegin", $newCard5)

// Adicional tenemos otros cuatro metodos mas directos que nos sirve solo para agregar elementos al DOM. Estos 4 metodos son

/* 
    - prepend - (primer hijo, lo que viene haciendo afterbegin)
    - append - (ultimo hijo, lo que viene haciendo beforeend)
    - before - (hermano anterior, lo que viene haciendo beforebegin)
    - after - (hermano siguiente, lo que viene haciendo afterend)
*/

//  Para ver estos 4 metodos vamos a eliminar la insercion de la newCard5 para insertarlo con estos 4 metodos adicionales. Ojo solo vamos a eliminar la insercion al DOM que estamos generando con el .inserAdjacentElement. Bueno mejor dicho la vamos a comentar solo para que no genere la insercion

//$cards.prepend($newCard5)
//$cards.append($newCard5)
//$cards.before($newCard5)
$cards.after($newCard5)

// En lo personal estos ultimos se me hacen mas faciles de digerir y recordar ya que los puedes relacionar de manera mas facil cuales son los que agregaran el contenido o los elementos como hijos y cuales son los que lo agregaran como hermanos, de igual manera cual lo agregara antes o depues en su correspondiente jerarquia