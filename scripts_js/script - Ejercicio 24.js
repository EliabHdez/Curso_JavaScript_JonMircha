// 24.- Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenNumeros = (arr) => {
    if(arr === undefined) return console.warn('No ingresaste ningun Array')

    if(!(arr instanceof Array)) return console.error(`El dato ingresado No es un Array`)

    if(arr.length === 0) return console.warn('El Array ingresado esta vacío')

    for(element of arr){
        if(typeof element !== 'number') return console.error(`El dato "${element}" ingresado NO es un número`)
    }

    const numAscDesc = {
        Arreglo_Original: arr,
        Ascendente: arr.map(el => el).sort((a,b) => a - b),
        Descendente: arr.map(el => el).sort((a,b) => b - a)
    }

    console.info(numAscDesc)
}

ordenNumeros()
ordenNumeros('')
ordenNumeros(123)
ordenNumeros([])
ordenNumeros([10,2,3,'hola'])
ordenNumeros([10,2,3,200,4,5])