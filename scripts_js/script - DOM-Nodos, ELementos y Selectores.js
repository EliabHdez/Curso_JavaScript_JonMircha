console.log(document.getElementsByTagName('ul'))
console.log(document.getElementsByTagName('li'))
console.log(document.getElementsByClassName('cards'))
console.log(document.getElementsByName('nombre'))

// Los selectores anteriores fueron sustituidos por el querySelector, los podemos seguir ocupando, sin embargo ya no es muy comun verlos. Lo mas recomendable o lo que mas se usa en estos momentos es el querySelector

// En los selectores anteriores no era necesario hacer uso del punto(.), del gato(#) etc para especificar lo que queriamos en el selector debido a que estaba esplicito en el nombre de este ultimo, sin embargo con query no es asi, con query si necesitamos hacer uso de estos signos para especificar que es lo que estamos buscando, si una clase, un id, una etiqueta etc ya que el querySelector es universal y puedes mandar a traer con este cualquier elemento, por lo tanto si es necesario hacer uso del signo correspondiente a lo que queremos traer

console.log(document.getElementById('menu'))
console.log(document.querySelector('#menu'))
console.log(document.querySelector("a"))
    // querySelector nos va a traer solo el primer elemento del tipo que estamos buscando, como en el caso anterior donde le dijimos que queremos las etiquetas "a" nos trajo la primera que encontro, si queremos generalizar y que nos traiga todo lo de ese tipo tenemos que hacer uso de querySelectorAll
console.log(document.querySelectorAll("a"))
console.log(document.querySelectorAll("a").length)
document.querySelectorAll('a').forEach((el) => console.log(el))
console.log(document.querySelector(".card"))
console.log(document.querySelectorAll(".card"))
console.log(document.querySelectorAll(".card")[2])
console.log(document.querySelector("#menu li"))