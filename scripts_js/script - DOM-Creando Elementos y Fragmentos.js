// Elementos = Etiqueta HTML

const $figure = document.createElement('figure')
const $img = document.createElement('img')
const $figcaption = document.createElement('figcaption')
const $figcaptionText = document.createTextNode('Animals')
const $cards = document.querySelector('.cards')

$figure.appendChild($img)
$figure.appendChild($figcaption)
$figure.classList.add('card')

$img.setAttribute('src', 'https://placeimg.com/200/200/animals')
$img.setAttribute('alt', 'Animals')

$figcaption.appendChild($figcaptionText)

$cards.appendChild($figure)

const $figure2 = document.createElement('figure')

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/arch" alt="Arch">
<figcaption>Arch</figcaption>
`

$figure2.classList.add('card')
$cards.appendChild($figure2)

const yearStations = ['Primavera', 'Verano', 'Otoño', 'Invierno']
const $ul = document.createElement('ul')

document.write("<h3>Estaciones del Año</h3>")
document.body.appendChild($ul)

yearStations.forEach((el) => {
    const $li = document.createElement('li')
    $li.textContent = el
    $ul.appendChild($li)
})

document.write("<h3>Continentes</h3>")

const continentes = ['America', 'Asia', 'Africa', 'Europa', 'Oceania']
const $ul2 = document.createElement('ul')

$ul2.innerHTML = "" // Puede ser que nos lleguemos a encontrar con que debemos inicializar el inner con una cadena de texto vacia, esto para poderla inicializar y posteriormente ir agregando los elementos. En este caso en particular no es necesario sin embargo la dejamos ya que es importante esa linea de codigo para evitar cualquier error con navegadores viejos o que no tengan el mismo soporte que chrome
continentes.forEach((el) => $ul2.innerHTML += `<li>${el}</li>`) // Aqui lo que estamos haciendo es hacer un elemento li y agregarlo al ul por cada elemento de la constante continentes, el simbolo + que anteponemos al = es poque necesitamos concatenar lo que ya hay mas lo que vaya agregando. Si quitamos el + lo que hacemos es agregar el elemento li en cada vuelta pero uno sobre otro, vaya sobreescribiendo el valor actual, con el += logramos que deje el valor actual y añada el nuevo valor del foreach

document.body.appendChild($ul2)

//  Cuando creamos elementos ya sea por medio de un inner o por medio de un forEach como en los casos anteriores cada vuelta del foreach o cada elemento que se crea con el innerhtml es una insercion al DOM lo cual representa mucho consumo de recursos del navegador

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

const $ul3 = document.createElement('ul')
const $fragment = document.createDocumentFragment()

meses.forEach((el) => {
    const $li = document.createElement('li')
    $li.textContent = el
    $fragment.appendChild($li)
})

document.write("<h3>Meses del Año</h3>")
$ul3.appendChild($fragment)
document.body.appendChild($ul3)

// Con la creacion de fragmentos como en el caso anteior lo que hacemos es que todo lo que vayamos creando o agregando se va añadiendo al fragmento y posteiormente este fragmento con todo lo que añadimos en el, lo que tiene dentro lo agregamos al DOM, lo cual solo representa una sola insercion en este ultimo