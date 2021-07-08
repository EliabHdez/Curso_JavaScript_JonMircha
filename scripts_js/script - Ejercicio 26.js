// 26.- Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedioArray = (arr) => {
    if(arr === undefined) return console.warn('No ingresaste ningun Array')

    if(!(arr instanceof Array)) return console.error(`El dato ingresado No es un Array`)

    if(arr.length === 0) return console.warn('El Array ingresado esta vacío')

    if(arr.length === 1) return console.error('El Array ingresado debe tener al menos 2 elementos')

    for(let elemento of arr){
        if(typeof elemento !== 'number') return console.error(`El valor "${elemento}" NO es un número`)
    }

    let suma = 0
    
    arr.forEach((numero) => {
        suma += numero
    })

    const promedio = suma / arr.length

    console.info(`Array Original: ${arr}\nSuma: ${suma}\nPromedio: ${promedio}`)
}

promedioArray()
promedioArray('')
promedioArray(123)
promedioArray([])
promedioArray([2])
promedioArray([2,3,'hola'])
promedioArray([1,2,3,4,5])
promedioArray([11,10,9,8,7,6,5,4,3,2,1,0])

// Forma de hacerlo del Profe Jon con el metodo reduce

    // El metodo recude recibe una funcion la cual va a llevar un acumulador, el elemento que itera, el index de dicho elemento y el array en cuestion. El metodo reduce lo que hace es que reduce un Array a un solo valor, es por ello que en este ejercicio nos sirve

    const promedio = (arr) => {
        if(arr === undefined) return console.warn('No ingresaste ningun Array')

        if(!(arr instanceof Array)) return console.error(`El dato ingresado No es un Array`)

        if(arr.length === 0) return console.warn('El Array ingresado esta vacío')

        for(let elemento of arr){
            if(typeof elemento !== 'number') return console.error(`El valor "${elemento}" NO es 	un número`)
        }
        
        return console.info(
            arr.reduce((total, num, index, arr) => {
                total += num
                if(index === arr.length-1){
                    return `El promedio de ${arr.join('+')} es ${total / arr.length}`
                }else{
                    return total
                }
            })
        )
    }

    promedio()
    promedio('')
    promedio(123)
    promedio([])
    promedio([2,true])
    promedio([1,2,3,4,5,6,7,8,9,0])