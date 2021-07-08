// 25.- Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]

const eliminarDuplicados = (arr) => {
    if(arr === undefined) return console.warn('No ingresaste ningun Array')

    if(!(arr instanceof Array)) return console.error(`El dato ingresado No es un Array`)

    if(arr.length === 0) return console.warn('El Array ingresado esta vacío')

    if(arr.length === 1) return console.warn('El Array ingresado debe tener al menos 2 elementos')

    const sinDuplicados = arr.filter((value, index, self) => self.indexOf(value) === index)

    const arrSinDuplicados = {
        Arreglo_Original: arr,
        Sin_Duplicados: sinDuplicados
    }

    console.info(arrSinDuplicados)
}

eliminarDuplicados()
eliminarDuplicados('')
eliminarDuplicados(123)
eliminarDuplicados([])
eliminarDuplicados([5])
eliminarDuplicados(['x',10,'x',2,10,'10',true,true])

const quitarDuplicadosConSet = (arr) => {
    if(arr === undefined) return console.warn('No inresaste ningun Array')

    if(!(arr instanceof Array)) return console.error(`El dato ingresado No es un Array`)

    if(arr.length === 0) return console.warn('El Array ingresado esta vacío')

    if(arr.length === 1) return console.warn('El Array ingresado debe tener al menos 2 	elementos')

    return console.info({
        Original: arr,
        SinDuplicadosConSet: [...new Set(arr)]
    })
}

quitarDuplicadosConSet()
quitarDuplicadosConSet('')
quitarDuplicadosConSet(123)
quitarDuplicadosConSet([])
quitarDuplicadosConSet([5])
quitarDuplicadosConSet(['x',10,'x',2,10,'10',true,true])