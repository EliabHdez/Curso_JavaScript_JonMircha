// 23.- Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const objNumParImp = (arr) => {
    if(arr === undefined) return console.warn('No ingresaste ningun Array')

    if(!(arr instanceof Array)) return console.error('El dato ingresado debe ser un Array')

    if(arr.length === 0) return console.warn('El Array ingresado esta vacío')

    for(let num of arr){
        if(typeof num !== 'number') return console.error(`El dato ${num} NO es un número`)
    }

    numPares = (elemento) => {
        return elemento % 2 === 0
    }
    numImpares = (elemento) => {
        return elemento % 2 === 1
    }

    const ParesImpares = {
        Pares: arr.filter(numPares),
        Impares: arr.filter(numImpares)
    }

    console.log(ParesImpares)
}

objNumParImp()
objNumParImp('')
objNumParImp(12345)
objNumParImp([1,2,3,4,5,6,7,8,9,10])
objNumParImp([1,2,3,4,5])

const separarParesImpares = (arr1) => {
    if(arr1 === undefined) return console.warn('No ingresaste ningun Array')

    if(!(arr1 instanceof Array)) return console.error('El dato ingresado debe ser un Array')

    if(arr1.length === 0) return console.warn('El Array ingresado esta vacío')

    for(let num of arr1){
        if(typeof num !== 'number') return console.error(`El dato ${num} NO es un número`)
    }

    return console.info({
        Pares: arr1.filter(num => num % 2 === 0),
        Impares: arr1.filter(num => num % 2 === 1)
    })
}

separarParesImpares()
separarParesImpares('')
separarParesImpares(123)
separarParesImpares([])
separarParesImpares([1,2,3,'j'])
separarParesImpares([11,12,13,14,15,16,17,18,19,20])