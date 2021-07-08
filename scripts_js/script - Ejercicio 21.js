// 21.- Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const arrNum = (arr) => {
    if(arr === undefined) return console.warn('No ingresaste ningun Array')

    if(!(arr instanceof Array)) return console.error('El dato ingresado no es un Array')

    if(arr.length === 0) return console.error('El Array ingresado esta vacio')

    for (let num of arr){
        if(typeof num !== 'number') return console.error(`El valor ${num} ingresado NO es un número`)
    }

    console.info(arr)
    
    // Esta es una forma de hacerlo con el metodo map
        /* const newArr = arr.map((elevacion) => {
            return elevacion * 2
        }) */

    // Esta es otra forma de hacerlo de manera mas corta y abreviada utilizando de igual manera el metodo map. Es la manera que ocupo el profe Jon
    const newArr1 = arr.map(el => el * el)
    console.info(newArr1)
	console.info(`Array original: ${arr},\nArreglo elevado al cuadrado: ${newArr1}`)
}

arrNum()
arrNum('')
arrNum(123)
arrNum({})
arrNum([])
arrNum([1,2,'3',4,{}])
arrNum([1,2,{}])
arrNum([1,2,3,4,5])