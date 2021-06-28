// 16.- Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 	pe. miFuncion(1000, 20) devolverá 800.

const porcentaje = (valor, porcentaje) => {
    if(valor === undefined) return console.warn('No ingresaste un valor')

    if(typeof valor !== 'number') return console.error('El valor ingresado no es valido')

    if(valor < 0) return console.error('El valor no puede ser un numero negativo')

    if(porcentaje === undefined) return console.warn('No ingresaste el valor porcentual')

    if(typeof porcentaje !== 'number') return console.error('El porcentaje debe ser un valor numerico')

    if(porcentaje < 0) return console.error('El valor del porcentaje no puede ser negativo')

    let porcentajeAplicado = valor * porcentaje / 100
    let valorFinal = valor - porcentajeAplicado

    console.info(`"El resultado final es: ${valorFinal}". Valor original: ${valor} - Porcentaje aplicado ${porcentaje}%`)
}

porcentaje()
porcentaje('hola')
porcentaje('100')
porcentaje(100)
porcentaje(-100)
porcentaje(100, 20)
porcentaje(500, 10)
porcentaje(2000, 75)
porcentaje(86, 13)
porcentaje(1000000, 25)