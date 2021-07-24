// El Set es un tipo de dato muy similar al Array, la diferencia esta en que el Set es una nueva estructura de datos unicos, esto quiere decir que no toma en cuenta los datos duplicados, ademas de que para saber cuantos datos tenemos en el set no ocupamos la propiedad length si no la propiedad size

const set = new Set([1,2,3,3,4,5,true,false,false,{},{},'hola','HOLA','Hola', 'HolA'])

console.log(set)
console.log(set.size)

// Porque si vemos los dos Objects y los 3 hola, los objetos es debido a que cada objeto aunque esten vacios no se consideran datos iguales ya que cada uno puede tener informacion diferente y si lo tomara como datos iguales estaria haciendo a un lado la informacion de uno de los objetos aunque esta fuera diferente a la informacion del otro objeto, por lo tanto cada objeto se toma como dato independiente y no como un igual de los demas. Y por el lado de los hola es porque javascript es un lenguaje case sensitive, lo que quiere decir que distingue minusculas de mayusculas por lo tanto al haber una variacion entre estos holas gracias a las mayusculas y minusculas javascript los considera como datos diferentes

const set2 = new Set()

set2.add(1)
set2.add(2)
set2.add(2)
set2.add(3)
set2.add(4)
set2.add(5)
set2.add(true)
set2.add(false)
set2.add(true)
set2.add({})

console.log(set2)
console.log(set2.size)

// De igual manera puedo recorrer cada dato de un Set con los metodos for of o forEach

console.log('Recorriendo el Set')

for(item of set){
    console.log(item)
}

console.log('Recorriendo el Set2')

set2.forEach(item => console.log(item))

// Podemos saber el valor de los datos conforme a su posicion pero para esto debemos convertir el set en un array ya que aunque se parezcan el set no es Array como tal, entonces para saber el valor de cada posicion hay que convertirlo a un Array tal cual. Para hacer esto hacemos uso del metodo from de los Arrays y lo tenemos que ocupar junto con el Objeto directo Array

console.log('Entrando a un valor en especifico por medio de su posición')

const setToArray = Array.from(set)

console.log(setToArray)
console.log(setToArray.length)
console.log(setToArray[0])
console.log(setToArray[5])
console.log(setToArray[9])

// Eliminando datos de un set

set.delete('HolA')
console.log(set)

// Sabiendo si tenemos cierto dato o valor en especifico en el set

console.log(set.has('hola'))
console.log(set.has(20))
console.log(set.has('HolA')) // Aqui como podemos ver nos arroja false como resultado, ya que aunque si tenia este dato ya lo hemos borrado del set

// Podemos tambien limpiar o borrar todos los datos del set con el metodo clear

set2.clear()
console.log(set2)