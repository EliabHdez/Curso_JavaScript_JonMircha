// 11.- Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n)

const factorial = (num = undefined) => {    
    if(num === undefined) return console.warn('No ingresaste ningun valor numerico')
    
    if(num < 0) return console.error('Los numeros negativos no son validos')

    if(num === 0) return console.error('El numero 0 no es valido')

    if(typeof num !== 'number') return console.error('El valor ingresado NO es un numero')

    let factorial = 1
    
    for(let i = num; i > 1; i--){
        factorial *= i
    }
    return console.info(`El factorial de ${num} es ${factorial}`)
}

factorial()
factorial('5')
factorial([1,2,3])
factorial(0)
factorial(-5)
factorial(5)
factorial(8)