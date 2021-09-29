console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"))
console.log(document.querySelector(".link-dom").href)
console.log(document.querySelector(".link-dom").getAttribute("href"))

    /* Estas son formas de agregar nuevos valores a los atributos de las etiquetas html */
document.documentElement.lang = "es"
console.log(document.documentElement.getAttribute("lang"))
document.documentElement.setAttribute("lang", "es-MX")
console.log(document.documentElement.getAttribute("lang"))

    /* Para no tener que estar escribiendo en todo momento el "document.documentElement, document querySelector" etc etc etc, podemos guardar ese codigo en variables ya sean let o const para estarlos utilizando y reciclando cuando queramos o necesitemos */

    const $linkDOM = document.querySelector(".link-dom")

        /* Al momento de utilizar el get, set attribute lo que ponemos entre parentesis es el atributo de la etiqueta que le estamos asignando o al que hacemos referencia y el valor de dicho atributo*/

    $linkDOM.setAttribute("target", "_blank")
    $linkDOM.setAttribute("rel", "noopener")
    $linkDOM.setAttribute("href", "https://youtube.com")
    console.log($linkDOM.hasAttribute("rel"))
    
    $linkDOM.removeAttribute("rel")
    console.log($linkDOM.hasAttribute("rel"))

    // Data-Attributes: JS nos permite crear nuestros atributos propios, para esto solo necesitamos anteponer al nombre de nuestro atributo el "data-"

    // Para interactuar con estos atributos podemos utilizar el get y el set de igual manera, pero tambien JS guarda estos atributos personalizados de forma independiente en una mapa y para ingresar a estos por medio de esta forma es utilizando el "dataset". El data set lo que hace es que nos muestra todos los data-attributes o atributos personalizados de forma general, pero tambien podemos acceder al valor de un atributo en especifico en la notacion del punto seguido del nombre del atributo 

    // De igual manera podemos cambiar o eliminar el valor de esto atributos

console.log($linkDOM.getAttribute("data-description"))
console.log($linkDOM.dataset) // Aqui podemos observar que el resultado el el mapa general de losdata-attributes
console.log($linkDOM.dataset.description) // Mientras que aqui solo vemos el valor en especifico del atributodata-description

    // Cambiando valores del data-description (atributo personalizado), de igual manera podemos utilizar el set o directamente el dataset
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento")
console.log($linkDOM.dataset.description)

$linkDOM.dataset.description = "Aprendiendo acerca de los data-attributes"
console.log($linkDOM.dataset.description)

    // Validando si tiene cierto atributo por medio de has.attribute
console.log($linkDOM.hasAttribute("data-id"))
console.log($linkDOM.hasAttribute("data-description"))

    // Eliminando atributos mediante remove.attributes

$linkDOM.removeAttribute("data-id")
console.log($linkDOM.hasAttribute("data-id"))

// Para estos dos ultimos que son comprobar la existencia de ciertos atributos y el remover atributos (has y remove) si ocupamos los metodos como tal, no hay un metodo mediante el dataset para hacer la funcion de estos dos