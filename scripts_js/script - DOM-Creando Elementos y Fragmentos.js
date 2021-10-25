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

// $ul2.innerHTML = ""
continentes.forEach((el) => $ul2.innerHTML += `<li>${el}</li>`)

document.body.appendChild($ul2)