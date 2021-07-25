// Los Maps son objetos que nos sirven para almacenar un conjunto de valores asociados a manera de objeto

/* Para agregar valores hay 2 formas
    - La primera es con el método set()
    - La segunda es anotando los valores directamente en el map. Para hacer esto  tenemos que poner corchetes dentro de los parentesis y unos corchetes mas dentro de los primeros corchetes para cada llave-valor, algo asi como un Array dentro de otro Array*/

// De igual manera que los sets para saber su longitud o cuandos datos contiene no ocupamos length, si no la propiedad size

let mapa = new Map()

mapa.set('nombre', 'Moisés')
mapa.set('apellido', 'Hernández')
mapa.set('edad', 30)

console.log(mapa)
console.log(mapa.size)
console.log(mapa.has('correo'))
console.log(mapa.has('nombre'))
console.log(mapa.get('nombre'))
mapa.set('nombre', 'Moises Hernandez')
console.log(mapa.get('nombre'))
mapa.delete('apellido')

// Los Maps se conforman de una key y el value de la key. Son objetos que nos permiten tener una coleccion de llave-valor. Lo curioso de los maps es que el key puede ser cualquier tipo de valor en comparacion con otro tipo de objeto primitivo los cuales solo aceptan strings. Esto no es muy comun, no se ve muy a menudo y tampoco es muy recomendable, sin embargo es algo que se puede y por lo tanto hay que saberlo y tenerlo presente

mapa.set(19, 'diecinueve')
mapa.set(false, 'falso')
mapa.set({}, {})
mapa.set(NaN, 'Not At Number')

console.log(mapa)
console.log(mapa.size)

for(let [key, value] of mapa) {
    console.log(`Llave: ${key}, Valor: ${value}`)
}

const mapa2 = new Map([
    ['nombre', 'katana'],
    ['edad', '2 años'],
    ['animal', 'perro'],
    ['raza', 'husky siberiano'],
    [null, 'nulo']
])

console.log(mapa2)
console.log(mapa2.size)

for(let [key, value] of mapa2) {
    console.log(`Llave: ${key}, Valor: ${value}`)
}

// Podemos separar las keys de los values

// Vamos a separar los keys y los values y almacenar cada uno de estos dos tipos en dos Arrays diferentes

const llavesMapa2 = [...mapa2.keys()]
const valoresMapa2 = [...mapa2.values()]

console.log(llavesMapa2)
console.log(valoresMapa2)