// 19.- Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validarNombre = (nombre) => {
    if(!nombre) return console.warn('No ingresaste ningun nombre')

    if(typeof nombre !== 'string') return console.error('El valor ingresado no es valido')

    let expReg = /^[A-Za-zÑñÁÉÍÓÚáéíóúÜü\s]+$/g.test(nombre)

    return (expReg === true)
        ? console.info(`"${nombre}" es un nombre valido`)
        : console.info('El nombre ingresado NO es valido')
}

validarNombre('')
validarNombre(738)
validarNombre({})
validarNombre([])
validarNombre('1239478')
validarNombre('Moises 121212')
validarNombre('Moisés Hernández')
validarNombre('Toño Muñiz')
validarNombre('Tomas Müller')