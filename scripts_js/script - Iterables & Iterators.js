const iterable = [1,2,3,4,5]

// Accedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]()

console.log(iterable)
console.log(iterador)
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())

let next = iterador.next()

while(!next.done) {
    console.log(next.value)
    next = iterador.next()
}

// for(let iterador of iterable){
//     console.log(iterador)
// }

const iterableString = 'Hola Mundo'
const iteradorString = iterableString[Symbol.iterator]()

let nextString = iteradorString.next()

// while(!nextString.done){
//     console.log(nextString.value)
//     nextString = iteradorString.next()
// }

const iterableSet = new Set([10,20,30,30,30,40,50,60,60])
const iteradorSet = iterableSet[Symbol.iterator]()

let next2 = iteradorSet.next()

while(!next2.done) {
    console.log(next2.value)
    next2 = iteradorSet.next()
}

const iterableMap = new Map([['nombre', 'Moises'], ['apellido', 'Hernandez'], ['edad', 30]])
const iteradorMap = iterableMap[Symbol.iterator]()

console.log(iteradorMap)

// let next3 = iteradorMap.next()

// while(!next3.done) {
//     console.log(next3.value)
//     next3 = iteradorMap.next()
// }

for(let iterador of iterableMap){
    console.log(iterador)
}