// Los proxies nos sirven para generar copias basadas en un objeto literal

const persona = {
    nombre: '',
    apellido: '',
    edad: 0
}

const manejador = {
    set(obj, prop, valor){
        if(Object.keys(persona).indexOf(prop) === -1){
            return console.error(`La propiedad "${prop.toUpperCase()}" no existe en el objeto persona`)
        }
        if((prop === "nombre" || prop === "apellido") && !(/^[A-Za-zÑñÁÉÍÓÚáéíóúÜü\s]+$/g.test(valor))){
            return console.error(`La propiedad "${prop.toUpperCase()}" solo acepta letras y espacios`)
        }
        if((prop === "edad") && valor <= 0){
            return console.error(`La propiedad "${prop.toUpperCase()}" no puede ser 0 y/o un numero negativo`)
        }
        if((prop === "edad") && !(/^[0-9]+$/g.test(valor))){
            return console.error(`La propiedad "${prop.toUpperCase()}" solo acepta numeros`)
        }
        obj[prop] = valor
    }
}

// Por medio de la validacion en el manejador podemos evitar que se añadan mas propiedades tanto al objeto como al proxy, es decir que esto lo estariamos haciendo cuando no queramos que tanto nuestro objeto como nuestro proxy tengan mas opciones o propiedades de las ya establecidas. De igual forma podemos poner cualquier validacion dentro del manejador las cuales estaran limitando los proxies.

const moy = new Proxy(persona, manejador)
moy.nombre = 'Moises'
moy.apellido = "Hernandez"
moy.edad = 30
moy.email = 'eliab.hdez@icloud.com'
console.log(moy)

console.log(persona)

// Sin la validacion estariamos generando una nueva propiedad de email, pero al ser una proxy este crea un vinculo con el objeto del cual se basa y esto hace que al crear una nueva propiedad en el proxy tambien se cree en el objeto original

// En el siguiente codigo vemos como hemos quitado el condicional del manejador y en el momento de agregar la propiedad email al proxy esta se añade tanto al proxy como al objeto

const persona1 = {
    nombre: '',
    apellido: '',
    edad: 0
}

const manejador1 = {
    set(obj, prop, valor){
        obj[prop] = valor
    }
}

const eliab = new Proxy(persona1, manejador1)
eliab.nombre = 'Moises'
eliab.apellido = "Hernandez"
eliab.edad = 30
eliab.email = 'eliab.hdez@icloud.com'
console.log(eliab)

console.log(persona1)