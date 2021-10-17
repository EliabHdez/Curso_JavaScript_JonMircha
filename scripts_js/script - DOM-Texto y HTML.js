const $whatIs2 = document.querySelector('#que-es')
console.log($whatIs2)

const $whatIs = document.getElementById('que-es')
console.log($whatIs)

let text = `
    <p>El modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML</p>
    <p>Este provee una representacion estructural del documento , permitiendo modificar su contenido y presentacion visual mediante codigo JS</p>
    <p><mark>El DOM no es parte de la especificacion de JavaScript, es una API para los navegadores</mark></p>
    `

$whatIs.innerText = text // innerText se creo para internet explorer, este no es un standar
$whatIs.textContent = text // Tanto con innerText como con textContent lo que hacemos es ingresar o reemplazar contenido por el texto especificado, pero este texto sera ta cual texto, ya que si hacemos uso de etiquetas html dentro de este texto estas etiquetas seran texto como tal y no etiquetas
$whatIs.innerHTML = text // innerHTML ingresa o reemplaza contenido pero respetando si hay etiquetas HTML en este
$whatIs.outerHTML = text // outerHTML ingresa o reemplaza contenido pero no solo respeta las etiquetas HTML si no que reemplaza la etiqueta en cuestion donde se esta aplicando este metodo, en este caso reemplaza la etiqueta "p" con el id: que-es por las 3 etiquetas "p" correspondientes especificadas en la variable text que se esta utilizando para reemplazar el contenido 