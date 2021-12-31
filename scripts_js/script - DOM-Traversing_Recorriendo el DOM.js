/* 
    En JavaScript hay diferentes tipos de nodos. Hay aproxidamante 12 nodos diferentes. Por mencionar algunos hay nodos de elementos, nodos de comentarios, nodos de texto, nodos de fragmentos etc.
    El espaciado o la indentacion que hay en un salto de linea tambien es interpretado como un nodo en JavaScript
*/ 

const $cards = document.querySelector('.cards')

console.log($cards)
console.log($cards.childNodes) // Hace referencia a todos los hijos ya sean tal cual nodos o elementos, hay que recordar que en si todos son nodos, solo que dentro de estos nodos hay diferentes tipos de nodos como se explico en el comentario al inicio de este archivo. Aqui podemos observar que nos despliega un Nodelist con los nodos que son tanto los text como los figure.card
console.log($cards.children)
console.log($cards.children[2])
console.log($cards.parentNode)
console.log($cards.parentElement)
console.log($cards.firstChild) // Como podemos observar aqui el resultado en consola en un "text", si deplegammos la informacion de este nodo podremos ver que en su textContent tenemos un \n o un simbolo de flecha en retroceso la cual se ve y se relaciona al simbolo de la tecla enter y esto quiere decir ese espacio, ese salto de linea que hay. Por lo tanto el primer hijo como tal detecta el nodo del salto de linea, pero si especificamos que el hijo tiene que ser un elemento el resultado cambiara, ya que el salto de linea no es un elemento. En otras palabras hace referencia al primer hijo "nodo"
console.log($cards.firstElementChild) // Este hace referencia al primer hijo "elemento"
console.log($cards.lastChild) // Este hace referencia al ultimo hijo "nodo". de igual manera vamos a ver como resultado un "text", que hace referencia al salto de linea
console.log($cards.lastElementChild) // Este hace referencia al ultimo hijo "elemento"
console.log($cards.previousSibling)
console.log($cards.previousElementSibling)
console.log($cards.nextSibling)
console.log($cards.nextElementSibling)
console.log($cards.closest("div")) // closest es un metodo, por lo tanto lleva parentesis. Este va a buscar el padre mas cercano del tipo de selector que especifiquemos. Con el div me arroja como resultado un "null" ya que dentro de nuestro codigo html no hay ninguna etiqueta div
console.log($cards.closest("body")) // Nos arroja como resultado el body, ya que aunque este es el unico que hay pues dentro de la busqueda que realiza es el primero que encuentra
console.log($cards.children[2].closest("section")) // Aqui ya podemos ver algo mas certero y es que el selector o etiqueta de tipo section mas cercano es el mismo section que guarda todas estas etiquetas card al igual que la misma que se esta utilizando como referencia para ejecutar el metodo closest