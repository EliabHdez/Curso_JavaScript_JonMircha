// Los weak sets y maps no son objetos iterables. Asi que no los podemos recorrer con un for, al igual tampoco podremos saber su tamaño por medio del size

// No podemos agregar valores al weakset de forma directa dentro de los parentesis, tenemos que hacerlo de forma independiente, uno por uno con el metodo add

// Los WeakSets solo admiten como valores objetos, asi que para declararlo tenemos que guardar estos objetos en variables

const ws = new WeakSet()

let valor1 = {valor1: 1}
let valor2 = {valor2: 2}
let valor3 = {valor3: 3}
let valor4 = {valor4: 4}

ws.add(valor1)
ws.add(valor2)
ws.add(valor3)

console.log(ws)

console.log(ws.has(valor1))
console.log(ws.has(valor4))

ws.delete(valor2)
console.log(ws)

ws.add(valor2)
ws.add(valor4)

console.log(ws)

// setInterval(() => console.log(ws), 1000)

// setTimeout(() => {
//     valor1 = null
//     valor2 = null
//     valor3 = null
//     valor4 = null
// }, 5000)

console.log('******* WeakMaps *******')

const wm = new WeakMap()

let llave1 = {}
let llave2 = {}
let llave3 = {}

wm.set(llave1, 1)
wm.set(llave2, 2)

console.log(wm)

console.log(wm.get(llave1))
console.log(wm.get(llave2))
console.log(wm.get(llave3))

wm.delete(llave2)
console.log(wm)

wm.set(llave2, 2)
wm.set(llave3, 3)

console.log(wm)

// setInterval(() => console.log(wm), 1000)

// setTimeout(() => {
//     llave1 = null
//     llave2 = null
//     llave3 = null
// }, 5000)