// 15.- Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const conversion = (numero, base) => {
    if(numero === undefined) return console.warn('No ingresaste ningun numero')

    if(typeof numero !== 'number') return console.error('El valor ingresado no es un numero')

    if(numero < 0) return console.error('El numero ingresado no puede ser negativo')

    if(base === undefined) return console.error('No ingresaste la base para la conversion')
    
    if(typeof base !== 'number') console.error('El valor ingresado NO es un numero')
    
    return (base === 2)
        ? console.info(`${numero} en base ${base} = ${parseInt(numero, base)} en base 10`)
        : (base === 10)
            ? console.info(`${numero} en base ${base} = ${(numero.toString(2))} en base 2`)
            : console.error('El valor ingresado no es valido. Por favor ingresa 2 para conversion de Binario y 10 para conversion de Decimal')
}

// Tambien se pudo haber resuelto con una expresion regular como en el ejercicio de los grados donde pusieramos como parametros 2 y 10

conversion()
conversion(2)
conversion('5')
conversion(-1)
conversion(100)
conversion(100, '2')
conversion(100, 2)
conversion(11001, 2)
conversion(10110101, 2)
conversion(4, 10)
conversion(10, 10)
conversion(100, 10)
conversion(154, 10)
conversion(10110, 10)
conversion(111, 8)