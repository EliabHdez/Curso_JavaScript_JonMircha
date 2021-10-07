 const $linkDOM = document.querySelector(".link-dom")

 console.log($linkDOM.style)
 console.log($linkDOM.getAttribute("style"))
 console.log($linkDOM.style.color)
 console.log($linkDOM.style.backgroundColor)
 console.log(window.getComputedStyle($linkDOM))
 console.log(getComputedStyle($linkDOM).getPropertyValue("color"))
 console.log(getComputedStyle($linkDOM).getPropertyValue("background-color"))

 $linkDOM.style.setProperty("text-decoration", "none")
 $linkDOM.style.setProperty("display", "block")
 $linkDOM.style.setProperty("text-align", "center")
 $linkDOM.style.width = "50%"
 $linkDOM.style.marginLeft = "auto"
 $linkDOM.style.marginRight = "auto"
 $linkDOM.style.marginTop = "10px"
 $linkDOM.style.padding = "1rem"
 $linkDOM.style.borderRadius = ".5rem"
 $linkDOM.style.fontSize = "20px"

 console.log($linkDOM.style)
 console.log($linkDOM.getAttribute("style"))
 console.log(getComputedStyle($linkDOM))

 // Cuando utilizamos la conotacion o el metodo del punto el resultado es general a lo solicitado en el metodo, vaya nos da como resultado todo lo que se encuentra en dicha propiedad, mientras que con el metodo getAttribute nos arroja como resultado el valor tal cual del atributo

 // Variables CSS - Custom Properties CSS

 const $html = document.documentElement
 const $body = document.body

 let varBlackColor = getComputedStyle($html).getPropertyValue("--black-color") 
 let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")

 console.log(varBlackColor, varYellowColor)

 $body.style.backgroundColor = varBlackColor
 $body.style.color = varYellowColor

 const $linksHtml = document.querySelector('.link1')

 $linksHtml.style.textDecoration = 'none'
console.log($linksHtml.style)
console.log($linksHtml.getAttribute("style"))
console.log($linksHtml.style.color)

$html.style.setProperty('--black-color', '#222') // Aqui estamos declarando el nuevo valor pero porque no vemos ningun cambio en el html, eso es debido a que estamos cambiando el valor y lo estamos declarando en el html y el color del background esta declarado en el body, asi que tendriamos de entrada que actualizar la variable que controla el color del backgroound y posteriormente volver a asignar el background color al body

// Actualizacion o redeclaracion de la variable

varBlackColor = getComputedStyle($html).getPropertyValue('--black-color')

// Asignando el nuevo valor al body

$body.style.backgroundColor = varBlackColor

// Tambien lo podemos hacer mediante el meto del setProperty
    // $body.style.setProperty('background-color', varBlackColor)

// Sin embargo en lo personal me gusta mas el metodo del punto